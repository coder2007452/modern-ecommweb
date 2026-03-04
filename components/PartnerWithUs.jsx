"use client";

import { Coins, Target, Globe, BarChart3, Handshake } from "lucide-react";
import Link from "next/link";

export default function PartnerWithUs() {
  return (
    <section id="partner" className="bg-[#f3f4f6] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Partner with Us
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-black">
          Join DProfiz in transforming waste management. We provide rewarding partnership opportunities for corporates, malls, housing societies, hotels, and government organizations.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-white">
          
          {/* Card 1 */}
          <div className="bg-white text-black border border-gray-300 shadow-md rounded-2xl p-8 text-center">
            <Coins className="mx-auto text-yellow-400" size={28} />
            <h3 className="mt-6 text-xl font-semibold">
              Revenue Opportunities
            </h3>
            <p className="text-black mt-4 leading-relaxed">
              Monetize through advertising and data insights.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black border border-gray-300 shadow-md rounded-2xl p-8 text-center">
            <Target className="mx-auto text-pink-400" size={28} />
            <h3 className="mt-6 text-xl font-semibold">
              Brand Visibility
            </h3>
            <p className="text-black mt-4 leading-relaxed">
              Logo placement on smart bins and on our platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black border border-gray-300 shadow-md rounded-2xl p-8 text-center">
            <Globe className="mx-auto text-green-400" size={28} />
            <h3 className="mt-6 text-xl font-semibold">
              Sustainability Impact
            </h3>
            <p className="text-black mt-4 leading-relaxed">
              Measurable environmental benefits for CSR initiatives.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white text-black border border-gray-300 shadow-md rounded-2xl p-8 text-center">
            <BarChart3 className="mx-auto text-blue-400" size={28} />
            <h3 className="mt-6 text-xl font-semibold">
              Data Analytics
            </h3>
            <p className="text-black mt-4 leading-relaxed">
              Detailed insights into waste patterns and user behaviour.
            </p>
          </div>

        </div>

        {/* Button */}
        <Link href="#app" className="mt-12 inline-block">
          <button className="text-white bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition">
            <Handshake size={18} />
            Become a Partner
          </button>
        </Link>
          

      </div>
    </section>
  );
}