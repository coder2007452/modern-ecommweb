"use client";

import Link from "next/link";
import { CheckCircle, Smartphone, Briefcase, Download } from "lucide-react";

export default function TrasheeApps() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Trashee Apps
        </h1>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-gray-600 text-lg">
          Smart waste management at your fingertips.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          
          {/* Customer App */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-left">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 mb-6">
              <Smartphone className="text-indigo-600" size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Customer App
            </h2>

            <p className="mt-3 text-gray-600">
              Track your points and rewards instantly.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Locate nearby smart bins.",
                "Scan QR codes to earn points.",
                "Track your reward balance.",
                "Redeem exclusive rewards.",
                "View your environmental impact.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://play.google.com/store/apps/details?id=com.dprofiz.trasheecustomer&pcampaignid=web_share"
              className="mt-10 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition"
            >
              <Download size={18} />
              Download Customer App
            </Link>
          </div>

          {/* Partner App */}
          <div className="bg-white rounded-3xl shadow-lg p-10 text-left">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
              <Briefcase className="text-purple-600" size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Partner App
            </h2>

            <p className="mt-3 text-gray-600">
              Manage bins, view analytics, and optimize operations.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Real-time bin monitoring.",
                "Automated fill-level alerts.",
                "Usage analytics dashboard.",
                "Collection route optimization.",
                "Customer engagement insights.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://play.google.com/store/apps/details?id=com.dprofiz.trasheepartner&pcampaignid=web_share"
              className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition"
            >
              <Download size={18} />
              Download Partner App
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}