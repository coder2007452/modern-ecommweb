"use client";

export default function EarnWhileYouDispose() {
  return (
    <section id="reward" className="bg-[#f3f4f6] py-24 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold">
          Earn While You Dispose
        </h2>

        <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-lg text-gray-700">
          Join our gamified rewards program and make eco-friendly living fun and profitable.
        </p>

        {/* Cards - One Row */}
        <div className="mt-16 flex justify-center gap-6">

          {/* Bronze */}
          <div className="bg-white border border-gray-300 shadow-md w-60 rounded-3xl p-6 ">
            <div className="text-4xl mb-4">🥉</div>
            <h3 className="text-lg font-semibold">Bronze</h3>
            <p className="mt-2 text-orange-600 font-medium">
              100+ points
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Starter rewards & discount vouchers.
            </p>
          </div>

          {/* Silver */}
          <div className="bg-white border border-gray-300 rounded-3xl p-6 shadow-md w-60">
            <div className="text-4xl mb-4">🥈</div>
            <h3 className="text-lg font-semibold">Silver</h3>
            <p className="mt-2 text-orange-600 font-medium">
              500+ points
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Better offers & partner coupons.
            </p>
          </div>

          {/* Gold */}
          <div className="bg-white border border-gray-300 rounded-3xl p-6 shadow-md w-60">
            <div className="text-4xl mb-4">🥇</div>
            <h3 className="text-lg font-semibold">Gold</h3>
            <p className="mt-2 text-orange-600 font-medium">
              1000+ points
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Premium rewards & priority support.
            </p>
          </div>

          {/* Platinum */}
          <div className="bg-white border border-gray-300 rounded-3xl p-6 shadow-md w-60">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-lg font-semibold">Platinum</h3>
            <p className="mt-2 text-orange-600 font-medium">
              5000+ points
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Exclusive perks & special experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}