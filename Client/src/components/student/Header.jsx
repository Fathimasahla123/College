// import React from 'react'
// import DarkMode from '../shared/DarkMode'
// import { useNavigate } from 'react-router-dom'

// const Header = () => {

//   const navigate = useNavigate();
//   return (
// <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li onClick={()=> navigate("/")}><a>Home</a></li>
//      <li onClick={()=> navigate("/about")}><a>About</a></li>
//       <li onClick={()=> navigate("/department")}><a>Departments</a></li>
//       <li onClick={()=> navigate("/contact")}><a>Contact</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">College</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li onClick={()=> navigate("/")}><a>Home</a></li>
//      <li onClick={()=> navigate("/about")}><a>About</a></li>
//       <li onClick={()=> navigate("/department")}><a>Departments</a></li>
//       <li onClick={()=> navigate("/contact")}><a>Contact</a></li>
//     </ul>
//   </div>
  
//   <div className="navbar-end gap-5">
//     <DarkMode/>
//     <a className="btn" onClick={()=>navigate("/login")}>Join Us</a>
//   </div>
// </div> 
//  )
// }

// export default Header


import React, { useState, useEffect } from 'react'
import DarkMode from '../shared/DarkMode'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../shared/SupabaseClient'

const Header = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li onClick={() => navigate("/")}><a>Home</a></li>
            <li onClick={() => navigate("/about")}><a>About</a></li>
            <li onClick={() => navigate("/department")}><a>Departments</a></li>
            <li onClick={() => navigate("/contact")}><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">College</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li onClick={() => navigate("/")}><a>Home</a></li>
          <li onClick={() => navigate("/about")}><a>About</a></li>
          <li onClick={() => navigate("/department")}><a>Departments</a></li>
          <li onClick={() => navigate("/contact")}><a>Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <DarkMode />
        
        {session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
                <span className="text-lg font-semibold">
                  {session.user?.user_metadata?.name?.charAt(0).toUpperCase() || 
                   session.user?.email?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className="menu-title">
                <span>{session.user?.user_metadata?.name || 'User'}</span>
                <span className="text-xs opacity-60">{session.user?.email}</span>
              </li>
              <li onClick={() => navigate("/profile")}><a>Profile</a></li>
              <li onClick={() => navigate("/settings")}><a>Settings</a></li>
              <li>
                <a onClick={handleLogout} className="text-error">
                  {loading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </>
                  )}
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <a className="btn" onClick={() => navigate("/login")}>Join Us</a>
        )}
      </div>
    </div>
  )
}

export default Header