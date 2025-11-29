import React from "react";

export const metadata = {
  title: "Privacy Policy - Ramchandra Radheshyam jaiswal Iron Steel",
  description:
    "Read Ramchandra Radheshyam jaiswal Iron Steel's privacy policy to understand how we collect, use, and protect your personal information when you use our services.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Ramchandra Radheshyam jaiswal Iron Steel Privacy",
    "RCRS Privacy Policy",
    "User Privacy",
    "Steel Distributor Privacy Policy",
  ],
  openGraph: {
    title: "Privacy Policy - Ramchandra Radheshyam jaiswal Iron Steel",
    description:
      "Ramchandra Radheshyam jaiswal Iron Steel's privacy policy and data protection practices.",
    url: "https://rcrsjaiswal.in/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in/privacy-policy",
  },
  robots: {
    index: true,
    follow: false,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-28 p-6 rounded-lg shadow-md text-left">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        PRIVACY POLICY
      </h1>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-2">We may collect:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Name, contact details, address.</li>
        <li>Business information (GST, PAN, etc.).</li>
        <li>Order and invoice history.</li>
        <li>Payment details (without storing sensitive bank/UPI passwords).</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-2">Your data is used only for:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Processing orders and invoices.</li>
        <li>Delivery coordination.</li>
        <li>Providing customer support.</li>
        <li>Sending updates related to orders or new products (optional).</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        3. Data Security
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>We do not sell, trade, or rent your personal information.</li>
        <li>
          All data is stored securely and accessed only by authorized personnel.
        </li>
        <li>
          Third-party logistics partners receive only necessary delivery
          details.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        4. Cookies &amp; Website Usage
      </h2>
      <p className="mb-4">
        Our website may use basic cookies to improve user experience. No
        sensitive information is stored.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        5. Third-Party Disclosure
      </h2>
      <p className="mb-2">We share customer details only with:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Transport agencies (for delivery).</li>
        <li>Manufacturers (for warranty or brand verification).</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        6. Your Rights
      </h2>
      <p className="mb-2">You may request:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Correction of your information.</li>
        <li>Deletion of your data.</li>
        <li>A copy of your stored information.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;
