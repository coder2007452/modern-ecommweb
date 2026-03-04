"use client";
import { useState } from "react";

export default function ContactPage() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9d34a27d-c8d8-4323-ae09-5fe8978635b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen bg-[#e6e2d9] flex items-start justify-center py-20 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Contact Us
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-700">
          We'd love to hear from you! Reach out to DProfiz Pvt Ltd for inquiries, support, or feedback.
        </p>

        {/* Contact Info */}
        <div className="mt-6 space-y-3 text-gray-800">
          <p>
            <span className="font-semibold text-orange-600">Email:</span>{" "}
            <a
              href="mailto:info.dprofiz@gmail.com"
              className="text-green-600 hover:underline"
            >
              info.dprofiz@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-orange-600">Phone:</span>{" "}
            9023545603
          </p>

          <p>
            <span className="font-semibold text-orange-600">Address:</span>{" "}
            C-1, 45 2, GIDC Rd, near Dwarka Steel, Kalol, Gandhinagar, Gujarat 382725, India
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          
          <div>
            <label className="block font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Your Query or Complaint</label>
            <textarea
              rows="4"
              name="message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded-md transition"
          >
            Submit Query/Complaint
          </button>

        </form>

      </div>
    </div>
  );
}