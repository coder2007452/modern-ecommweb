export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-[#e6e2d9] flex justify-center py-16 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Shipping Policy
        </h1>

        {/* Last Updated */}
        <p className="mt-4 text-gray-800">
          <span className="font-semibold">Last Updated:</span> October 30, 2025
        </p>

        <div className="mt-8 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
          
          <p>Shipping Policy</p>

          <p>
            Orders are typically processed within 1–3 business days.
          </p>

          <p>Delivery time,</p>

          <p>
            <span className="font-medium">Standard:</span> 5–10 business days.
          </p>

          <p>
            <span className="font-medium">Express:</span> 3–5 business days.
          </p>

          <p>
            Tracking details are shared once the order is shipped.
          </p>

          <p>
            The business is not responsible for delays due to courier services or unforeseen circumstances.
          </p>

        </div>

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-green-600">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-700">
            For questions regarding shipping, please contact us:
          </p>

          <p className="mt-2 text-gray-800">
            Email:{" "}
            <a
              href="mailto:info.dprofiz@gmail.com"
              className="text-green-600 hover:underline"
            >
              info.dprofiz@gmail.com
            </a>
          </p>

          <p className="text-gray-800">
            Phone: 9023545603
          </p>
        </div>

      </div>
    </div>
  );
}