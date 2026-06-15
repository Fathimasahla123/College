import React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contactpage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Have questions? We're here to help. Reach out to us and we'll get
            back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6  rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <MapPin className="size-6" />
              </div>
              <h3 className="mb-2 text-xl">Visit Us</h3>
              <p className="text-gray-600">
                123 University Avenue
                <br />
                Campus City, ST 12345
                <br />
                United States
              </p>
            </div>

            <div className="p-6  rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Phone className="size-6" />
              </div>
              <h3 className="mb-2 text-xl">Call Us</h3>
              <p className="text-gray-600">
                Main Office: (555) 123-4567
                <br />
                Admissions: (555) 123-4568
                <br />
                Financial Aid: (555) 123-4569
              </p>
            </div>

            <div className="p-6  rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Mail className="size-6" />
              </div>
              <h3 className="mb-2 text-xl">Email Us</h3>
              <p className="text-gray-600">
                General: info@university.edu
                <br />
                Admissions: admissions@university.edu
                <br />
                Support: support@university.edu
              </p>
            </div>

            <div className="p-6  rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Clock className="size-6" />
              </div>
              <h3 className="mb-2 text-xl">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-6  rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <h2 className="mb-6 text-2xl">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-xl mb-2">Thank you!</div>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName">First Name :</label> <br />
                      <div className="border border-gray-300 rounded-md p-2">
                        <input id="firstName" required placeholder="John" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name :</label>
                      <br />
                      <div className="border border-gray-300 rounded-md p-2">
                        <input id="lastName" required placeholder="Doe" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email">Email :</label>
                      <br />
                      <div className="border border-gray-300 rounded-md p-2">
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone">Phone Number :</label>
                      <br />
                      <div className="border border-gray-300 rounded-md p-2">
                        <input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject">Subject :</label>
                    <br />
                    <div className="border border-gray-300 rounded-md p-2">
                      <input
                        id="subject"
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message">Message :</label>
                    <br />
                    <div className="border border-gray-300 rounded-md p-2">
                      <textarea
                        id="message"
                        required
                        placeholder="Tell us how we can help you..."
                        rows={6}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    size="lg"
                    className="w-full bg-gray-600 text-white hover:bg-gray-700 py-3 px-4 rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl text-center">Find Us on Campus</h2>
          <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Campus Map</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactpage;
