export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#e6e2d9] flex justify-center py-16 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Terms and Conditions
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Last Updated: November 10, 2025
        </p>

        <p className="mt-4 text-gray-700 text-sm md:text-base">
          These Terms and Conditions govern your use of this website and the purchase of products or services offered herein.
        </p>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

          <div>
            <h3 className="font-semibold">1. General Use</h3>
            <p className="mt-2">
              By using this website, you confirm that you are at least 18 years old or are using the website under supervision of a parent or legal guardian.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. User Responsibilities</h3>
            <p className="mt-2">
              Users agree not to misuse the website by introducing malicious material or attempting unauthorized access.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Product & Service Descriptions</h3>
            <p className="mt-2">
              All efforts are made to ensure accuracy in descriptions and pricing. However, we do not guarantee that content is complete or error-free.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">4. Order Acceptance & Cancellation</h3>
            <p className="mt-2">
              Placing an order does not constitute confirmation. We reserve the right to refuse or cancel orders for valid reasons.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">5. Pricing and Payment</h3>
            <p className="mt-2">
              Prices are displayed in INR and must be paid through secure and approved payment gateways.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">6. Intellectual Property</h3>
            <p className="mt-2">
              All website content including text, images, and logos are the property of the company and protected by law.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">7. Limitation of Liability</h3>
            <p className="mt-2">
              We are not responsible for indirect damages arising from use of this website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">8. Modifications to Terms</h3>
            <p className="mt-2">
              These terms may be revised at any time. Continued use of the website implies acceptance of changes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">9. Governing Law</h3>
            <p className="mt-2">
              These terms shall be governed by and construed in accordance with the laws of India.
            </p>
          </div>

          {/* Business Details */}
          <div>
            <h2 className="font-semibold text-lg text-green-600">Business Details</h2>
            <p className="mt-2">
              Business Name: DProfiz Pvt Ltd <br />
              Email ID: info.dprofiz@gmail.com <br />
              Mobile No: 9023545603
            </p>
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