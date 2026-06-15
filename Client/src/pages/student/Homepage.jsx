import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StateSection from "./StateSection ";

const Homepage = () => {
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();
    useEffect(() => {
    fetch("http://localhost:4000/api/v1/department/listdepartment")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
  }, []);

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/college.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm">
              Empowering Future Leaders
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Shape Your Future With
              <span className="block text-[#2596be]">Quality Education</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto">
              Join a vibrant academic community where innovation, knowledge, and
              opportunities come together to help students achieve excellence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/department">
                <button className="w-full sm:w-auto bg-[#2596be] hover:bg-[#1d7fa3] px-6 md:px-8 py-3 rounded-lg flex items-center justify-center gap-2 text-white font-semibold transition">
                  Explore Departments
                  <ArrowRight size={20} />
                </button>
              </Link>

              <Link to="/contact">
                <button className="w-full sm:w-auto border border-white px-6 md:px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StateSection />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide world-class education with a focus on innovation,
            research, and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/17190/17190349.png"
                alt="book"
              />
            </div>
            <h3 className="mb-2 text-xl">Academic Excellence</h3>
            <p className="text-gray-600 text-sm">
              Rigorous curriculum designed by industry experts and leading
              academics
            </p>
          </div>

          <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-green-100 text-green-600 mb-4">
              <img src="/images/users.png" alt="users" />
            </div>
            <h3 className="mb-2 text-xl">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">
              Learn from renowned professors and industry professionals
            </p>
          </div>

          <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-purple-100 text-purple-600 mb-4">
              <img src="/images/award.png" alt="award" />
            </div>
            <h3 className="mb-2 text-xl">Career Support</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive career services and industry connections for your
              success
            </p>
          </div>

          <div className="p-6 text-center rounded-xl border bg-white hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              {/* <Globe className="size-8" /> */}
              <img src="/images/global.png" alt="" />
            </div>
            <h3 className="mb-2 text-xl">Global Network</h3>
            <p className="text-gray-600 text-sm">
              Connect with students and alumni from around the world
            </p>
          </div>
        </div>
      </section>

      <section className=" py-16 bg-[#f0f0f0]">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-3xl md:text-4xl">Featured Programs</h2>
              <p className="text-gray-600">
                Explore our most popular academic offerings
              </p>
            </div>

            <Link
              to="/department"
              className="border px-4 py-2 rounded inline-flex items-center gap-2"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.slice(0, 3).map((department) => (
              <div
                key={department.id}
                className="overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  {/* <div className="text-sm text-blue-600 mb-2">
                    {program.department}
                  </div> */}
                  <h3 className="mb-2 text-xl">{department.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {department.subjects} • {department.description}
                  </p>

                  <Link
                    to="/department"
                    className="text-blue-600 flex items-center gap-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2596be] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step towards an exceptional education and a bright
            future
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <button className="px-6 py-3 items-center text-lg font-medium border border-white text-white rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition">
                Learn About Admissions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
