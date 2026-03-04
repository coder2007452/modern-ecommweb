export default function AccountDeletionPolicy() {
  return (
    <div className="min-h-screen bg-[#e6e2d9] flex justify-center py-16 px-6">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg p-10 md:p-14">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Account Deletion Policy
        </h1>

        {/* Last Updated */}
        <p className="mt-4 text-gray-800">
          <span className="font-semibold">Last Updated:</span> October 30, 2025
        </p>

        {/* Intro */}
        <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
          At DProfiz Pvt Ltd, we respect your right to privacy and control over 
          your personal data. This Account Deletion Policy explains how you can 
          request deletion of your account and related personal data collected 
          through our smart waste management services, apps, and website.
        </p>

        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">

          {/* How to Request */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              How to Request Account Deletion
            </h2>

            <p className="mt-3">
              To delete your account and have your personal data removed, please contact us via email or phone:
            </p>

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
            </ul>

            <p className="mt-4">
              Ensure you provide sufficient information (such as registered email, 
              username, or phone number) for identity verification before processing the request.
            </p>
          </div>

          {/* What Happens After */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              What Happens After You Request Deletion?
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                We verify your request and identity to protect your data from unauthorized access.
              </li>
              <li>
                Upon verification, your account and personal data will be permanently deleted.
              </li>
              <li>
                Some data may be retained in backup or archived systems to comply with legal obligations.
              </li>
              <li>
                Once deletion is complete, you will not be able to recover your account or rewards data.
              </li>
            </ul>
          </div>

          {/* Important Considerations */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Important Considerations
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                Deleting your account removes access to rewards, app features, and services tied to your account.
              </li>
              <li>
                We may retain anonymized or aggregated data for analytical purposes.
              </li>
              <li>
                Our Privacy Policy governs how we handle your information and should be reviewed alongside this policy.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Contact Us
            </h2>

            <p className="mt-3">
              For questions regarding account deletion, please reach out to:
            </p>

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