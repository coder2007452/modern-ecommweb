"use client";

import Link from "next/link";
import Image from "next/image";
import {
  QrCode,
  Cpu,
  Cloud,
  Smartphone,
  Leaf,
  Mail,
  Download,
} from "lucide-react";
import { assets } from "@/assets/assets";

export default function TrasheeCurve() {
  return (
    <section className="bg-gradient-to-b from-[#f5f3e8] to-[#f0eee3] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          TRASHEE CURVE! Smart Bin
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Revolutionary IoT-powered waste management solution with QR rewards and real-time monitoring.
        </p>

        {/* Main Card */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-10 md:p-14 text-left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
                <Image
                  src={assets.header_plas_image}
                  alt="TRASHEE CURVE Smart Bin"
                  width={400}
                  height={500}
                  className="mx-auto"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow-md">
                ⭐ India's First
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Next-Gen Waste Management
              </h3>

              <p className="mt-4 text-gray-600">
                TRASHEE CURVE! combines cutting-edge IoT technology with sustainable design for a cleaner India.
              </p>

              <div className="mt-8 space-y-6">
                
                <Feature
                  icon={<QrCode className="text-green-600 mt-1" size={20} />}
                  title="QR Code Rewards"
                  description="Earn points instantly with every scan."
                />

                <Feature
                  icon={<Cpu className="text-green-600 mt-1" size={20} />}
                  title="IoT Sensors"
                  description="Real-time fill-level monitoring."
                />

                <Feature
                  icon={<Cloud className="text-green-600 mt-1" size={20} />}
                  title="Weather Resistant"
                  description="Durable outdoor design."
                />

                <Feature
                  icon={<Smartphone className="text-green-600 mt-1" size={20} />}
                  title="Mobile Connected"
                  description="Seamless app integration."
                />

                <Feature
                  icon={<Leaf className="text-green-600 mt-1" size={20} />}
                  title="Eco-Friendly"
                  description="Promoting sustainable habits."
                />

              </div>

              {/* Buttons with Links */}
              <div className="mt-10 flex flex-wrap gap-4">
                
                <Link
                  href="/request-quote"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
                >
                  <Mail size={18} />
                  Request Quote
                </Link>

                <Link
                  href="/download-app"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
                >
                  <Download size={18} />
                  Download App
                </Link>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* Feature Component */
function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 border-b pb-4 last:border-none">
      {icon}
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}