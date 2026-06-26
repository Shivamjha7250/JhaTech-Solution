"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";

import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

export default function ContactPage() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(

        "service_834s5es",

        "template_y9054rn",

        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },

        "WjP10-15IHPKgnvNY"

      );

      alert("Message Sent Successfully");

      setFormData({

        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",

      });

    } catch (error) {

      console.log(error);

      alert("Failed To Send Message");

    } finally {

      setLoading(false);

    }

  };

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-blue-500 uppercase tracking-[3px] text-[11px] font-semibold mb-4">
            CONTACT JHATECH SOLUTION
          </p>

          <h1 className="text-3xl md:text-5xl font-black leading-tight">

            Let’s Build Your
            <span className="text-blue-500">
              {" "}Next Digital Solution
            </span>

          </h1>

          <p className="text-zinc-400 text-sm md:text-[15px] leading-7 mt-6 max-w-3xl mx-auto">

            We create modern websites,
            scalable web applications,
            ecommerce platforms,
            SEO optimized systems,
            and custom digital solutions
            for startups and businesses.

          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-500 uppercase tracking-[3px] text-[11px] font-semibold mb-4">
              GET IN TOUCH
            </p>

            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">

              Let’s Create
              <span className="text-blue-500">
                {" "}Something Amazing
              </span>

            </h2>

            <p className="text-zinc-400 text-sm leading-7 max-w-xl">

              Need a business website,
              custom application,
              ecommerce store,
              SEO service,
              bug fixing,
              or complete digital solution?
              Contact us today.

            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-5 mt-10">

              {/* EMAIL */}
              <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500 transition">

                <div className="bg-blue-600 p-4 rounded-xl text-lg">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="text-sm font-bold mb-1">
                    Email Address
                  </h3>

                  <a
                         href="mailto:info.jhatechsolution@gmail.com"
                          className="text-zinc-400 hover:text-blue-500 transition text-sm"
                              >
                            info.jhatechsolution@gmail.com
                  </a>

                </div>

              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500 transition">

                <div className="bg-blue-600 p-4 rounded-xl text-lg">
                  <FaInstagram />
                </div>

                <div>

                  <h3 className="text-sm font-bold mb-1">
                    Instagram
                  </h3>

                  <a
                    href="https://www.instagram.com/jhatechsolution?igsh=MTI2cGh3YnRvNG1tbw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-blue-500 transition text-sm"
                  >
                    @jhatechsolution
                  </a>

                </div>

              </div>

              {/* LINKEDIN */}
              <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500 transition">

                <div className="bg-blue-600 p-4 rounded-xl text-lg">
                  <FaLinkedin />
                </div>

                <div>

                  <h3 className="text-sm font-bold mb-1">
                    LinkedIn
                  </h3>

                  <a
                    href="https://www.linkedin.com/company/jhatech-solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-blue-500 transition text-sm"
                  >
                    JhaTech Solution
                  </a>

                </div>

              </div>

              {/* GOOGLE BUSINESS */}
              <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500 transition">

                <div className="bg-blue-600 p-4 rounded-xl text-lg">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="text-sm font-bold mb-1">
                    Google Business
                  </h3>

                  <a
                    href=
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-blue-500 transition text-sm"
                  >
                    View Business Profile
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-[30px] p-6 md:p-10">

            <p className="text-blue-500 uppercase tracking-[3px] text-[11px] font-semibold mb-4">
              SEND US A MESSAGE
            </p>

            <h2 className="text-3xl font-black leading-tight mb-8">

              Start Your
              <span className="text-blue-500">
                {" "}Project Today
              </span>

            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* ROW */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* NAME */}
                <div>

                  <label className="text-xs text-zinc-400 block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500 text-sm transition"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="text-xs text-zinc-400 block mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500 text-sm transition"
                  />

                </div>

              </div>

              {/* PHONE */}
              <div>

                <label className="text-xs text-zinc-400 block mb-2">
                  Mobile Number
                </label>

                <div className="relative">

                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="w-full bg-black border border-zinc-800 rounded-xl pl-11 pr-4 py-4 outline-none focus:border-blue-500 text-sm transition"
                  />

                </div>

              </div>

              {/* SUBJECT */}
              <div>

                <label className="text-xs text-zinc-400 block mb-2">
                  Project Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter project subject"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500 text-sm transition"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-xs text-zinc-400 block mb-2">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500 text-sm resize-none transition leading-7"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-800 disabled:text-zinc-500 transition py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20"
              >

                <FaPaperPlane />

                {
                  loading
                    ? "Sending Message..."
                    : "Send Message"
                }

              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}