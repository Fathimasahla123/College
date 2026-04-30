import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate();
  return (
//     <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//       className="max-w-sm rounded-lg shadow-2xl"
//     />
//     <div>
//       <h1 className="text-5xl font-bold">Box Office News!</h1>
//       <p className="py-6">
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//         quasi. In deleniti eaque aut repudiandae et a id nisi.
//       </p>
//       <button className="btn btn-neutral" onClick={()=>navigate("/contact")}>Get In Touch</button>
//     </div>
//   </div>
// </div>

 <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1721702754494-fdd7189f946c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzEyMTg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="container mx-auto px-4 py-24">
          <h1 className="mb-4 text-5xl md:text-6xl">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Leading the way in education, research, and innovation since 1950
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-4 text-3xl">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To provide transformative education that empowers students to become innovative leaders, 
              critical thinkers, and engaged citizens who contribute positively to society.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are committed to fostering an inclusive environment where academic excellence, 
              research innovation, and community engagement thrive together.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To be a globally recognized institution that shapes the future through cutting-edge research, 
              exceptional teaching, and meaningful partnerships with industry and community.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We aspire to create a lasting impact on individuals and communities by advancing knowledge 
              and fostering innovation across all disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl md:text-4xl text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <img
                src="https://cdn-icons-png.flaticon.com/512/17190/17190349.png"
                alt="book"
              />
              </div>
              <h3 className="mb-3 text-xl">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Pursuing the highest standards in teaching, research, and student achievement
              </p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-green-100 text-green-600 mb-4">
                <img src="/images/users.png" alt="users" />
              </div>
              <h3 className="mb-3 text-xl">Diversity</h3>
              <p className="text-gray-600 text-sm">
                Embracing diverse perspectives and creating an inclusive community for all
              </p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-orange-100 text-orange-600 mb-4">
               <img src="/images/trendingup.png" alt="users" />
              </div>
              <h3 className="mb-3 text-xl">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Encouraging creativity and pioneering solutions to global challenges
              </p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-purple-100  text-purple-600 mb-4">
                <img src="/images/award.png" alt="award" />
              </div>
              <h3 className="mb-3 text-xl">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Upholding the highest ethical standards in all our actions and decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl md:text-4xl text-center">Our History</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="text-blue-600 font-semibold mb-2">1950</div>
              <h3 className="text-xl mb-2">Foundation</h3>
              <p className="text-gray-600">
                The university was established with a vision to provide quality education to all students, 
                starting with just 3 departments and 200 students.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="text-blue-600 font-semibold mb-2">1980</div>
              <h3 className="text-xl mb-2">Expansion</h3>
              <p className="text-gray-600">
                Major campus expansion including new science and technology buildings, 
                establishing our reputation in STEM education.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="text-blue-600 font-semibold mb-2">2000</div>
              <h3 className="text-xl mb-2">Research Excellence</h3>
              <p className="text-gray-600">
                Designated as a research university, launching multiple PhD programs and 
                state-of-the-art research facilities.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="text-blue-600 font-semibold mb-2">2026</div>
              <h3 className="text-xl mb-2">Global Leadership</h3>
              <p className="text-gray-600">
                Now serving over 15,000 students from 80 countries with 50+ programs and 
                recognized globally for innovation and academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl md:text-4xl">Accreditation & Recognition</h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8">
            Our university is accredited by leading educational bodies and consistently ranked among 
            the top institutions nationally and internationally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">#1</div>
              <div className="text-blue-100 text-sm">Regional Ranking</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Top 50</div>
              <div className="text-blue-100 text-sm">National Ranking</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">AACSB</div>
              <div className="text-blue-100 text-sm">Business Accredited</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ABET</div>
              <div className="text-blue-100 text-sm">Engineering Certified</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Aboutpage