import React from "react";

export const metadata = {
  title: "Shipping & Return Policy - RCRS Steel Distribution",
  description:
    "Learn about RCRS's shipping and return policies for steel products. We ensure timely delivery and hassle-free returns for our customers.",
  keywords: [
    "Shipping Policy",
    "Return Policy",
    "RCRS Delivery",
    "Steel Delivery India",
  ],
  openGraph: {
    title: "Shipping & Return Policy - RCRS Steel Distribution",
    description: "RCRS's shipping and return policy for steel products.",
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

const ShippingReturnPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-28 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Shipping and Return Policy
      </h1>

      <p className="mb-4">
        At RCRS, we are committed to providing our customers with a seamless
        shopping experience. This Shipping and Return Policy outlines our
        practices regarding shipping and returns for products purchased from our
        website. By placing an order, you agree to the terms of this policy,
        which have been designed to ensure transparency and customer
        satisfaction.
      </p>

      <h2 className="text-3xl font-semibold mb-4">1. Shipping Policy</h2>
      <p className="mb-4">
        We strive to process and ship your orders as quickly as possible. Orders
        are typically processed within 1-3 business days. During peak seasons or
        holidays, processing times may be extended. Delivery times may vary
        based on your location and the shipping method selected at checkout,
        ensuring that your order reaches you promptly.
      </p>
      <p className="mb-4">
        <strong>Shipping Methods:</strong> We offer various shipping options,
        including standard, expedited, and next-day delivery. You can select
        your preferred shipping method during the checkout process to fit your
        needs.
      </p>
      <p className="mb-4">
        <strong>Shipping Charges:</strong> Shipping costs are calculated based
        on the weight of your order, dimensions, and your location. You will see
        the shipping charges before finalizing your order, allowing you to make
        informed decisions. Occasionally, we may offer free shipping promotions
        on orders over a certain amount.
      </p>
      <p className="mb-4">
        <strong>International Shipping:</strong> We currently ship to select
        international locations. Please note that international orders may be
        subject to customs duties and taxes, which are the responsibility of the
        recipient. We advise checking with your local customs office for
        specific regulations and fees before placing an international order.
      </p>

      <h2 className="text-3xl font-semibold mb-4">2. Order Tracking</h2>
      <p className="mb-4">
        Once your order has been shipped, you will receive a confirmation email
        containing tracking information. You can use this tracking number to
        monitor the status of your shipment on the carrier's website. This
        ensures you stay informed about your package’s journey and estimated
        delivery time.
      </p>
      <p className="mb-4">
        If you encounter any issues with tracking or have questions about your
        order, please feel free to reach out to our customer service team, who
        will be happy to assist you.
      </p>

      <h2 className="text-3xl font-semibold mb-4">3. Return Policy</h2>
      <p className="mb-4">
        We want you to be completely satisfied with your purchase. If you are
        not satisfied for any reason, you may return eligible items within 30
        days of receiving your order. This allows you to evaluate the product
        and ensure it meets your expectations.
      </p>
      <p className="mb-4">
        <strong>Eligibility for Returns:</strong> To be eligible for a return,
        items must be unused, in their original packaging, and in the same
        condition as when you received them. Some items may be excluded from
        returns for hygiene or safety reasons, such as personal protective
        equipment or customized items. Please check the product details for
        specific return information.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
        4. How to Initiate a Return
      </h2>
      <p className="mb-4">
        To initiate a return, please contact our customer service team at{" "}
        <strong>info@rcrs.com</strong>. Provide your order number, details about
        the item you wish to return, and the reason for the return. Our team
        will guide you through the return process, ensuring a hassle-free
        experience.
      </p>
      <p className="mb-4">
        You will be responsible for the return shipping costs, except in cases
        where the item is defective or incorrect. We recommend using a trackable
        shipping service to ensure your return reaches us safely and to keep
        proof of shipment for your records.
      </p>

      <h2 className="text-3xl font-semibold mb-4">5. Refunds and Exchanges</h2>
      <p className="mb-4">
        Once we receive your returned item, we will inspect it and notify you of
        the status of your refund. If approved, your refund will be processed,
        and a credit will automatically be applied to your original payment
        method within a certain number of days, depending on your bank's
        policies.
      </p>
      <p className="mb-4">
        If you would like to exchange an item for a different size, color, or
        model, please follow the return process and place a new order for the
        desired item. Exchanges are subject to product availability, and we
        encourage you to act quickly to secure the new item.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
        6. Damaged or Defective Items
      </h2>
      <p className="mb-4">
        If you receive a damaged or defective item, please contact us within 7
        days of receiving your order. We will provide instructions for returning
        the item and will either replace it or issue a full refund, ensuring you
        receive a product that meets our quality standards.
      </p>
      <p className="mb-4">
        In the case of damaged items, please provide photos of the damage along
        with your communication to expedite the process. We value your
        satisfaction and aim to resolve any issues as quickly as possible.
      </p>

      <h2 className="text-3xl font-semibold mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about our shipping and return
        policy, please don’t hesitate to reach out. Our customer service team is
        here to assist you and ensure your experience with RCRS is positive:
      </p>
      <p>
        <strong>Email:</strong> info@rcrs.com | <strong>Phone:</strong>{" "}
        +91-XXXXXXXXXX
      </p>
      <p className="mt-4">
        We appreciate your business and are committed to providing you with the
        best possible service.
      </p>
    </div>
  );
};

export default ShippingReturnPolicyPage;
