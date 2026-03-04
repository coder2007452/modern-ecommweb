import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200
    bg-white
    text-gray-600 
    px-6 md:px-16 lg:px-32 py-6 transition">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo - Left */}
        <Image
          src={assets.logo}
          alt="logo"
          className="w-20 md:w-24 lg:w-28 h-auto"
        />

        {/* Text - Right */}
        <div className="text-xs md:text-sm space-y-1 text-center md:text-right">
          <p>
            Developed by{" "}
            <span className="text-green-500 font-semibold">
              DPROFIZ PVT LTD
            </span>
          </p>

          <p>
            © 2025 DProfiz. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;