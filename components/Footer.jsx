import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-3 text-xl font-bold tracking-wide text-gray-900">
            TRASHEE <span className="text-green-600 font-semibold">by DProfiz</span>
          </p>
          <p className="mt-6 text-sm">
            India's Smart IoT Waste Management System. Smart Trash. Smart Rewards. Cleaner Cities.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#featuredproduct">How It Works</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/all-products">Product</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#reward">Rewards</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#about">About Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#partner">Partner with Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Policies</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="/refund-policy">Refund and Cancellation Policy</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/contact">Contact Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/terms-and-conditions">Terms and Conditions</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/shipping-policy">Shipping Policy</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/return-exchange-policy">Return and Exchange Policy</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/account-deletion-policy">Account Deletion Policy </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs md:text-sm space-y-1">

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
    </footer>
  );
};

export default Footer;