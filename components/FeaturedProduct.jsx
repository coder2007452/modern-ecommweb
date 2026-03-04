"use client";

import { Trash2, Smartphone, Gift } from "lucide-react";

export default function FeaturedProduct() {
  return (
    <section className="bg-gray-50 py-24 px-6" id="featuredproduct">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-900">
          How It Works
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-gray-600 text-lg">
          Three simple steps to earn rewards while making a difference.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">
              1
            </div>

            <div className="mt-10 flex justify-center">
              <Trash2 size={48} className="text-gray-500" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Dispose Your Trash
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Drop your waste into any Trashee smart bin located across the city.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">
              2
            </div>

            <div className="mt-10 flex justify-center">
              <Smartphone size={48} className="text-indigo-600" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Scan QR Code
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Open the Trashee app and scan the QR code on the bin to record your disposal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">
              3
            </div>

            <div className="mt-10 flex justify-center">
              <Gift size={48} className="text-yellow-500" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Earn Rewards
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Receive points instantly and redeem them for rewards, discounts, and eco-friendly products.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}