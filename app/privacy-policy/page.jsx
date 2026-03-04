export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#e6e2d9] flex justify-center py-16 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Privacy Policy
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Last Updated: November 10, 2025
        </p>

        <p className="mt-4 text-gray-700">
          This document includes your business details and context of details we can pre-fill which you can edit and use for reference.
        </p>

        {/* Sections */}
        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

          <div>
            <h2 className="font-semibold text-lg text-gray-900">Introduction</h2>
            <p className="mt-2">
              This Privacy Policy outlines how personal information is collected, used, and safeguarded when you interact with this website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">1. Information We Collect</h3>
            <p className="mt-2">
              We may collect personal information such as name, phone number, email address, billing/shipping address, and payment information.
              We also collect technical information like IP address, browser type, and usage data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. How We Use Your Information</h3>
            <p className="mt-2">
              To process and deliver orders, send updates, improve services, and enhance user experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Data Sharing</h3>
            <p className="mt-2">
              We do not sell or trade personal data. Data may be shared with service providers like payment gateways and delivery partners to fulfill services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">4. Data Security</h3>
            <p className="mt-2">
              We implement reasonable security measures to protect data, however no online transmission is 100% secure.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">5. Cookies and Tracking Technologies</h3>
            <p className="mt-2">
              Cookies are used to personalize experience and analyze website traffic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">6. Third-Party Links</h3>
            <p className="mt-2">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">7. Your Rights</h3>
            <p className="mt-2">
              You may request access to or correction of your personal data and opt out of marketing communications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">8. Changes to This Policy</h3>
            <p className="mt-2">
              This policy may be updated periodically. Continued use of the website indicates acceptance of changes.
            </p>
          </div>

          {/* Grievance Office */}
          <div>
            <h2 className="font-semibold text-lg text-green-600">Grievance Office</h2>
            <p className="mt-2">
              DPROFIZ PRIVATE LIMITED <br />
              Address: C-1, 45 2, GIDC Rd, Near Dwarka Steel, Kalol, Gujarat 382725, IN. <br />
              Phone: 9023545603 <br />
              Email: info.dprofiz@gmail.com <br />
              Time: Monday - Friday (9:00 - 18:00)
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-lg text-green-600">Contact Us</h2>
            <p className="mt-2">
              For any questions related to this Privacy Policy, please contact us at:
            </p>
            <a
              href="mailto:info.dprofiz@gmail.com"
              className="text-green-600 hover:underline"
            >
              info.dprofiz@gmail.com
            </a>
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