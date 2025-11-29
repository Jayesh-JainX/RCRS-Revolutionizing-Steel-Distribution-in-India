import React from "react";

export const metadata = {
  title: "Shipping Policy - RCRS Steel Distribution",
  description:
    "Learn about RCRS's shipping policy for steel products, including delivery coverage, charges, advance payment requirements, and material inspection guidelines.",
  keywords: [
    "Shipping Policy",
    "RCRS Delivery",
    "Steel Delivery India",
    "Logistics Policy",
  ],
  openGraph: {
    title: "Shipping Policy - RCRS Steel Distribution",
    description:
      "RCRS's shipping policy for steel products, covering delivery terms, advance payment, and inspection.",
    url: "https://rcrs.vercel.app/shipping-return-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://rcrs.vercel.app/shipping-return-policy",
  },
  robots: {
    index: true,
    follow: false,
  },
};

const ShippingPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-28 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">Shipping Policy</h1>

      <h2 className="text-3xl font-semibold mb-4">1. Shipping / Delivery</h2>
      <p className="mb-2">
        We deliver across India via trusted transport partners.
      </p>
      <p className="mb-2">
        Delivery charges depend on distance, vehicle type, and load weight.
      </p>
      <p className="mb-4">
        Delivery dates are estimates and may vary due to market conditions,
        transportation delays, or force majeure.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
        2. Advance Payment Requirement
      </h2>
      <p className="mb-2">
        All dispatches are made only after receiving full advance payment.
      </p>
      <p className="mb-4">
        No material will be booked for transport without payment confirmation.
      </p>

      <h2 className="text-3xl font-semibold mb-4">3. Material Inspection</h2>
      <p className="mb-2">
        Customers must check materials during delivery or pickup.
      </p>
      <p className="mb-4">
        No claims will be accepted once the goods have been unloaded or taken
        away.
      </p>
    </div>
  );
};

export default ShippingPolicyPage;
