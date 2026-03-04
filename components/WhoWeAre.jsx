"use client";

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-gray-100 py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Who We Are
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        {/* Subtitle */}
        <p className="mt-6 text-gray-600 text-lg">
          Pioneering the future of waste management.
        </p>

        {/* Description */}
        <p className="mt-10 text-gray-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          DProfiz is dedicated to creating innovative, sustainable, and technology-driven
          solutions. Our goal is to transform city waste management while rewarding citizens
          for responsible disposal habits.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Sustainability */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="text-2xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Sustainability
            </h3>
            <p className="mt-4 text-gray-600">
              Environmental responsibility is at our core.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="text-2xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Innovation
            </h3>
            <p className="mt-4 text-gray-600">
              Cutting-edge IoT technology and design.
            </p>
          </div>

          {/* Rewards */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="text-2xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Rewards
            </h3>
            <p className="mt-4 text-gray-600">
              Encouraging good habits through incentives.
            </p>
          </div>

          {/* Professionalism */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="text-2xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Professionalism
            </h3>
            <p className="mt-4 text-gray-600">
              Trusted by partners and institutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}