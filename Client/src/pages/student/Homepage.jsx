import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../components/shared/SupabaseClient";
import { Link } from 'react-router';

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
      <section
        className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.shutterstock.com/image-photo/graduation-daya-mortarboard-scroll-on-600nw-2282105211.jpg')`,
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Shape Your Future</h1>
            <p className="mb-5">
              Join a community of learners, innovators, and leaders. Discover
              endless opportunities for growth and success at one of the
              Kerala's leading College.
            </p>
            <button
              className="btn btn-neutral"
              onClick={() => navigate("/department")}
            >
              Get Departments
            </button>
            <div className="gap-2 p-4">
              {" "}
              <button className="btn " onClick={() => navigate("/contact")}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide world-class education with a focus on innovation,
            research, and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 text-center hover:shadow-lg transition-shadow">
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

          <div className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-green-100 text-green-600 mb-4">
              <img src="/images/users.png" alt="users" />
            </div>
            <h3 className="mb-2 text-xl">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">
              Learn from renowned professors and industry professionals
            </p>
          </div>

          <div className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-purple-100 text-purple-600 mb-4">
              <img src="/images/award.png" alt="award" />
            </div>
            <h3 className="mb-2 text-xl">Career Support</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive career services and industry connections for your
              success
            </p>
          </div>

          <div className="p-6 text-center hover:shadow-lg transition-shadow">
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

      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl md:text-4xl">Featured Programs</h2>
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

       <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step towards an exceptional education and a bright future
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <button size="lg" variant="secondary">
                Apply Now
              </button>
            </Link>
            <Link to="/contact">
              <button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
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
