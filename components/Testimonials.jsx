"use client";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What Our Partners & Users Say
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-gray-600 text-lg">
          Real experiences from our community.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
            <p className="text-gray-700 leading-relaxed">
              "Trashee has transformed how our housing society manages waste. Residents love earning rewards, and we've seen a big reduction in overflow issues."
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold">
                RS
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Rajesh Sharma
                </h4>
                <p className="text-sm text-gray-600">
                  Society Manager, Mumbai
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
            <p className="text-gray-700 leading-relaxed">
              "The analytics dashboard is incredible. We can track waste patterns, optimize routes, and demonstrate our environmental impact to stakeholders."
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold">
                PK
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Priya Kulkarni
                </h4>
                <p className="text-sm text-gray-600">
                  Operations Manager, TechPark
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
            <p className="text-gray-700 leading-relaxed">
              "I've already earned thousands of points. It's amazing how a simple act of disposing trash properly can lead to real rewards. Great initiative for cleaner cities."
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold">
                AM
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Amit Mehta
                </h4>
                <p className="text-sm text-gray-600">
                  Trashee User, Delhi
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}