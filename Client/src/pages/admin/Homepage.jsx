// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import StateSection from "../student/StateSection "

// const images = [
//   "https://static.vecteezy.com/system/resources/thumbnails/045/633/738/small/college-students-collaborating-in-a-study-group-high-selling-stock-image-potential-clear-and-impactful-photo.jpg",
//   "https://img.freepik.com/free-photo/close-up-students-indoors_23-2148950535.jpg?semt=ais_hybrid&w=740&q=80",
//   "https://www.shutterstock.com/image-photo/diverse-international-students-diplomas-celebrating-600nw-2642795267.jpg",
//   "https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/6EOgsHD36zWDc2QpiVe2sg/5f0f2cb25658f0db972ec7141ab05bc3/SL_Lab_Technician_Course_-_SEO.jpg?fit=thumb",
// ];

// const Adminhome = () => {
    
//   const [currentImage, setCurrentImage] = useState(0);
//   const [transition, setTransition] = useState(true);
//   const [department, setDepartment] = useState([]);
//   const navigate = useNavigate();
//   const sliderImages = [...images, images[0]];
//   useEffect(() => {
//     fetch("http://localhost:4000/api/v1/department/listdepartment")
//       .then((res) => res.json())
//       .then((data) => setDepartment(data));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => prev + 1);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (currentImage === images.length) {
//       setTimeout(() => {
//         setTransition(false);
//         setCurrentImage(0);
//       }, 1000);

//       setTimeout(() => {
//         setTransition(true);
//       }, 1050);
//     }
//   }, [currentImage]);
//   return (
//     <div>
//       <section className="relative min-h-screen overflow-hidden">
//         {/* Sliding Images */}
//         <div
//           className={`flex ${
//             transition ? "transition-transform duration-1000 ease-in-out" : ""
//           }`}
//           style={{
//             width: `${sliderImages.length * 100}vw`,
//             transform: `translateX(-${currentImage * 100}vw)`,
//           }}
//         >
//           {sliderImages.map((image, index) => (
//             <div
//               key={index}
//               className="w-screen h-screen bg-cover bg-center bg-no-repeat shrink-0 relative"
//               style={{
//                 backgroundImage: `url(${image})`,
//               }}
//             >
//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/65"></div>
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
//           <div className="max-w-2xl px-4">
//             <h1 className="text-5xl font-bold mb-5">this is admin home</h1>

//             <p className="mb-6 text-lg">
//               Join a community of learners, innovators, and leaders. Discover
//               endless opportunities for growth and success at one of the
//               nation's leading college.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link to="/department">
//                 <button className="bg-[#2596be] flex items-center gap-2 px-6 py-3 text-lg font-medium text-black rounded-md hover:bg-gray-200 transition">
//                   Get Departments
//                   <ArrowRight className="size-5" />
//                 </button>
//               </Link>
//               <Link to="/contact">
//                 <button className="px-6 py-3 items-center text-lg font-medium border border-white text-white rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition">
//                   Apply Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <StateSection />

//       <section className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h2 className="mb-4 text-3xl md:text-4xl">Why Choose Us</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We provide world-class education with a focus on innovation,
//             research, and personal growth
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
//             <div className="inline-flex items-center justify-center size-16 rounded-full bg-blue-100 text-blue-600 mb-4">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/17190/17190349.png"
//                 alt="book"
//               />
//             </div>
//             <h3 className="mb-2 text-xl">Academic Excellence</h3>
//             <p className="text-gray-600 text-sm">
//               Rigorous curriculum designed by industry experts and leading
//               academics
//             </p>
//           </div>

//           <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
//             <div className="inline-flex items-center justify-center size-16 rounded-full bg-green-100 text-green-600 mb-4">
//               <img src="/images/users.png" alt="users" />
//             </div>
//             <h3 className="mb-2 text-xl">Expert Faculty</h3>
//             <p className="text-gray-600 text-sm">
//               Learn from renowned professors and industry professionals
//             </p>
//           </div>

//           <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
//             <div className="inline-flex items-center justify-center size-16 rounded-full bg-purple-100 text-purple-600 mb-4">
//               <img src="/images/award.png" alt="award" />
//             </div>
//             <h3 className="mb-2 text-xl">Career Support</h3>
//             <p className="text-gray-600 text-sm">
//               Comprehensive career services and industry connections for your
//               success
//             </p>
//           </div>

//           <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
//             <div className="inline-flex items-center justify-center size-16 rounded-full bg-orange-100 text-orange-600 mb-4">
//               {/* <Globe className="size-8" /> */}
//               <img src="/images/global.png" alt="" />
//             </div>
//             <h3 className="mb-2 text-xl">Global Network</h3>
//             <p className="text-gray-600 text-sm">
//               Connect with students and alumni from around the world
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className=" py-16 bg-[#f0f0f0]">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 flex items-center justify-between">
//             <div>
//               <h2 className="mb-4 text-3xl md:text-4xl">Featured Programs</h2>
//               <p className="text-gray-600">
//                 Explore our most popular academic offerings
//               </p>
//             </div>

//             <Link
//               to="/department"
//               className="border px-4 py-2 rounded inline-flex items-center gap-2"
//             >
//               View All
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {department.slice(0, 3).map((department) => (
//               <div
//                 key={department.id}
//                 className="overflow-hidden group hover:shadow-lg transition-shadow"
//               >
//                 <div className="aspect-video overflow-hidden bg-gray-200">
//                   <img
//                     src={department.image}
//                     alt={department.name}
//                     className="w-full h-full object-cover transition-transform group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="p-6">
//                   {/* <div className="text-sm text-blue-600 mb-2">
//                     {program.department}
//                   </div> */}
//                   <h3 className="mb-2 text-xl">{department.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {department.subjects} • {department.description}
//                   </p>

//                   <Link
//                     to="/department"
//                     className="text-blue-600 flex items-center gap-2"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#2596be] text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="mb-4 text-3xl md:text-4xl">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="mb-8 text-xl text-blue-100 max-w-2xl mx-auto">
//             Take the first step towards an exceptional education and a bright
//             future
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//              <Link to="/contact">
//                 <button className="px-6 py-3 items-center text-lg font-medium border border-white text-white rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition">
//                  Learn About Admissions
//                 </button>
//               </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Adminhome;

import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import {
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";

const Adminhome = () => {
  const [dashboard, setDashboard] = useState({
    totalStudents: 0,
    totalFaculty: 0,
    totalDepartments: 0,
    recentDepartments: [],
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await axiosInstance.get("/admin/dashboard");
      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Students",
      value: dashboard.totalStudents,
      icon: <Users className="text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Faculty",
      value: dashboard.totalFaculty,
      icon: <GraduationCap className="text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Departments",
      value: dashboard.totalDepartments,
      icon: <Building2 className="text-white" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div>

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-blue-950">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your college website content
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-2 text-blue-950">
                  {card.value}
                </h2>
              </div>

              <div className={`${card.color} p-4 rounded-xl`}>
                {card.icon}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Recent Departments */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-4 text-blue-950">
          Recent Departments
        </h2>

        {dashboard.recentDepartments?.length === 0 ? (
          <p className="text-gray-500">
            No departments available
          </p>
        ) : (
          <div className="space-y-4">
            {dashboard.recentDepartments?.map((department) => (
              <div
                key={department._id}
                className="bg-gray-100 rounded-lg p-4 "
              >
                <h3 className="font-semibold text-lg text-blue-900">
                  {department.name}
                </h3>

                <p className="text-gray-500">
                  {department.description}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default Adminhome;