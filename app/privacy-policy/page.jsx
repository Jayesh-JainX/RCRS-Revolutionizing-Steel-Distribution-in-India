import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-28 p-6 rounded-lg shadow-md text-left">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At RCRS, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy outlines our
        practices regarding the collection, use, and disclosure of your
        information when you use our website and our services. By accessing our
        website, you agree to the terms outlined in this policy.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We collect several types of information to provide and improve our
        services, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal Information: Such as your name, email address, and phone
          number.
        </li>
        <li>
          Order Information: Details related to your purchases, including
          product details and payment information.
        </li>
        <li>
          Usage Data: Information about how you use our website, such as your IP
          address, browser type, and pages visited.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We may use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To process and fulfill your orders.</li>
        <li>To communicate with you regarding your order and our services.</li>
        <li>
          To improve our website, products, and services based on your feedback.
        </li>
        <li>
          To send you promotional materials and updates, if you opt-in to
          receive them.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        3. Data Security
      </h2>
      <p className="mb-4">
        We take the security of your personal information seriously. We
        implement a variety of security measures to maintain the safety of your
        personal information. However, please be aware that no method of
        transmission over the internet or method of electronic storage is 100%
        secure.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        4. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties without your consent, except as required by law or to
        protect our rights. We may share your information with trusted third
        parties who assist us in operating our website, conducting our business,
        or servicing you, as long as those parties agree to keep this
        information confidential.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        5. Your Rights
      </h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal
        information that we hold. If you would like to exercise any of these
        rights, please contact us using the information provided below.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        6. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please feel free to contact us:
      </p>
      <p>
        <strong>Email:</strong> info@rcrs.com | <strong>Phone:</strong>{" "}
        +91-XXXXXXXXXX
      </p>
      <p className="mt-4">
        We value your trust and are committed to safeguarding your personal
        information. Thank you for choosing RCRS!
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
