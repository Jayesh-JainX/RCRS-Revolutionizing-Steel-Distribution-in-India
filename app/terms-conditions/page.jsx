import React from "react";

export const metadata = {
  title: "Terms & Conditions - Ramchandra Radheshyam jaiswal Iron Steel",
  description:
    "Read Ramchandra Radheshyam jaiswal Iron Steel's terms & conditions, shipping and refund policy for purchases of iron, steel, and construction materials.",
  keywords: [
    "Terms and Conditions",
    "Terms of Service",
    "Ramchandra Radheshyam jaiswal Iron Steel Terms",
    "RCRS Terms",
    "User Agreement",
    "Shipping Policy",
    "Refund Policy",
    "Steel Purchase Terms",
  ],
  openGraph: {
    title: "Terms & Conditions - Ramchandra Radheshyam jaiswal Iron Steel",
    description:
      "Ramchandra Radheshyam jaiswal Iron Steel's terms & conditions, shipping, and refund policies for using our services.",
    url: "https://rcrsjaiswal.in/terms-conditions",
    type: "website",
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-28 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">
        TERMS &amp; CONDITIONS
      </h1>

      <h2 className="text-3xl font-semibold mb-4">1. General</h2>
      <p className="mb-4">
        These Terms &amp; Conditions ("Terms") govern all purchases made from
        Hindustan Iron Store, including retail and bulk orders of iron, steel,
        and construction materials. By placing an order, you agree to these
        Terms.
      </p>

      <h2 className="text-3xl font-semibold mb-4">2. Products &amp; Pricing</h2>
      <p className="mb-2">
        All product specifications (sizes, weights, grades) are provided based
        on manufacturer data.
      </p>
      <p className="mb-2">
        Prices are subject to market fluctuations and may change without prior
        notice until payment is received.
      </p>
      <p className="mb-4">
        Any special cutting, customization, or fabrication request will incur
        additional charges.
      </p>

      <h2 className="text-3xl font-semibold mb-4">3. Order Confirmation</h2>
      <p className="mb-2">
        Orders are confirmed only after advance payment is received.
      </p>
      <p className="mb-4">
        Once confirmed, orders cannot be cancelled unless mutually agreed.
      </p>

      <h2 className="text-3xl font-semibold mb-4">4. Payment Terms</h2>
      <p className="mb-2">We operate strictly on advance payment basis.</p>
      <p className="mb-2">
        Accepted payment methods: Bank Transfer, UPI, Cheque (subject to
        clearance).
      </p>
      <p className="mb-4">GST invoices are provided for all orders.</p>

      <h2 className="text-3xl font-semibold mb-4">5. Delivery &amp; Pickup</h2>
      <p className="mb-2">
        Delivery timelines depend on availability, logistics, and dispatch
        schedules.
      </p>
      <p className="mb-2">Customers must inspect goods upon delivery/pickup.</p>
      <p className="mb-4">Any discrepancy must be reported within 24 hours.</p>

      <h2 className="text-3xl font-semibold mb-4">
        6. Weight &amp; Quantity Tolerance
      </h2>
      <p className="mb-2">
        Standard industry tolerance applies to TMT bars, plates, and sections.
      </p>
      <p className="mb-4">
        Final billing is based on actual weight measured at the
        warehouse/weighbridge.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
        7. Warranty &amp; Liability
      </h2>
      <p className="mb-2">
        We do not manufacture the products; warranties are as per the respective
        brand/manufacturer.
      </p>
      <p className="mb-4">
        We are not liable for damages caused by improper handling, storage, or
        third-party transport.
      </p>

      <h2 className="text-3xl font-semibold mb-4">8. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of India. Any disputes shall be
        resolved in the jurisdiction of Ayodhya, Uttar Pradesh.
      </p>
    </div>
  );
};

export default TermsAndConditionsPage;
