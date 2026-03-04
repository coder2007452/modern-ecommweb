"use client";

import Link from "next/link";
import { Play, Handshake } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="app" className="bg-green-600 py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Waste Management?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-green-100">
          Download the Trashee app today and start earning rewards while making a difference.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Customer App Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.dprofiz.trasheecustomer&pcampaignid=web_share"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center justify-center gap-2 transition"
          >
            <Play size={18} />
            Customer App
          </Link>

          {/* Partner App Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.dprofiz.trasheepartner&pcampaignid=web_share"
            className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full flex items-center justify-center gap-2 transition"
          >
            <Handshake size={18} />
            Partner App
          </Link>

        </div>

      </div>
    </section>
  );
}