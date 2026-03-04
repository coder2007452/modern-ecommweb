export default function ReturnExchangePolicy() {
  return (
    <div className="min-h-screen bg-[#e6e2d9] flex justify-center py-16 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Return and Exchange Policy
        </h1>

        {/* Last Updated */}
        <p className="mt-4 text-gray-800">
          <span className="font-semibold">Last Updated:</span> October 31, 2025
        </p>

        {/* Intro */}
        <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
          This document presents the official return and exchange policy of 
          DPROFIZ PRIVATE LIMITED, registered at C-1, 45 2, GIDC Rd, near Dwarka 
          Steel, Kalol, Gujarat 382725, India. This policy applies to all eligible 
          purchases made via dprofiz.com, its mobile site, and the Trashee Partner Android app.
        </p>

        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

          {/* Return Window */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Return, Refund & Exchange Window
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>We offer refund or exchange only within the first 1 day from the date of purchase.</li>
              <li>If more than 1 day has passed since your purchase, you will not be offered a return or refund.</li>
              <li>Items must be unused, in original condition, and in original packaging.</li>
              <li>Items purchased on sale (discounted) may not be eligible for return or exchange.</li>
              <li>Only defective or damaged items are eligible for replacement after inspection.</li>
            </ul>
          </div>

          {/* Exempted Products */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Exempted Products / Categories
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                Certain categories of products/items are exempt from return or refund. 
                These will be clearly notified during checkout.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Return/Exchange Process & Inspection
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                For accepted requests, items must be sent to us for inspection.
              </li>
              <li>
                After inspection, we will notify you regarding approval or rejection.
              </li>
              <li>
                Approved refunds will be processed to the original payment method.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Contact & Support
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info.dprofiz@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  info.dprofiz@gmail.com
                </a>
              </li>
              <li>Phone: 9023545603</li>
              <li>
                Postal Address: C-1, 45 2, GIDC Rd, near Dwarka Steel, Kalol,
                Gujarat 382725, India.
              </li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <hr className="my-10 border-gray-300" />
        <p className="text-xs text-gray-500">
          © 2025 DProfiz Pvt Ltd. All Rights Reserved.
        </p>

      </div>

    </div>
  );
}