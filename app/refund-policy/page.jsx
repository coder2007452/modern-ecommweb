export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#e6e2d9] flex items-start justify-center py-20 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Refund and Cancellation Policy
        </h1>

        {/* Content */}
        <p className="mt-8 text-gray-700 leading-relaxed text-base md:text-lg">
          We are not provide any kind of refund and cancellation. If approved
          refund, refund will be credited to the original payment method within
          5 to 7 business day.
        </p>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Footer */}
        <p className="text-sm text-gray-600">
          © 2025 DProfiz Pvt Ltd. All Rights Reserved.
        </p>

      </div>

    </div>
  );
}