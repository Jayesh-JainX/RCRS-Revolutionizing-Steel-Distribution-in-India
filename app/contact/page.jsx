import React from "react";
import MapComponent from "../../components/Map";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya. We're here to assist you with any inquiries about our steel products and services. Contact us via phone, email, or visit our location.",
  keywords: [
    "Contact RCRS Steel",
    "Steel Supplier Contact Ayodhya",
    "RCRS Jaiswal Contact",
    "Steel Distributor Ayodhya Contact",
    "Iron Steel Contact Uttar Pradesh",
    "Get Quote Steel Ayodhya",
  ],
  openGraph: {
    title: "Contact Us | Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
    description:
      "Contact Ramchandra Radheshyam jaiswal Iron Steel for all your steel needs. Located near Devkali bypass, Ayodhya. Call +91-9044944111 or email rcrsjaiswal@gmail.com",
    url: "https://rcrsjaiswal.in/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact RCRS Steel Ayodhya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Ramchandra Radheshyam jaiswal Iron Steel",
    description:
      "Get in touch with RCRS Steel Ayodhya. Phone: +91-9044944111, Email: rcrsjaiswal@gmail.com",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in/contact",
  },
};

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4 pt-2">Contact Us</h1>
      <p className="text-center mb-6 font-[family-name:var(--font-geist-sans)] px-2">
        We're here to assist you at Ram Chander Radhey Shyam Jaiswal with any
        inquiries or support you may need. Feel free to reach out using the
        information below.
      </p>
      <div className="container mx-auto p-6 rounded-lg shadow-md flex justify-center flex-col md:flex-row md:space-x-6">
        <div className="relative border rounded-xl sm:mx-6 md:w-1/2 p-6 overflow-hidden my-4 sm:my-0 flex flex-col justify-between h-full">
          <div className="relative z-10 flex-grow">
            <h2 className=" text-3xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
              Get in Touch
            </h2>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              We’re here to help! Whether you have questions about our services,
              need support, or want to explore partnership opportunities, our
              team is ready to assist you.
            </p>

            <h2 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">
              Contact Information
            </h2>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              <strong>Email:</strong>{" "}
              <a href="mailto:rcrsjaiswal@gmail.com" className="text-blue-500">
                rcrsjaiswal@gmail.com
              </a>
            </p>
            <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
              <strong>Phone:</strong>{" "}
              <a href="tel:+91-9044944111">+91-9044944111</a>
            </p>
            <p className="mb-2 font-[family-name:var(--font-geist-sans)]">
              <strong>Address:</strong> Near Devkali bypass, Ayodhya, Uttar
              Pradesh, India
            </p>
          </div>
        </div>
      </div>

      <MapComponent />
    </div>
  );
};

export default ContactUs;
