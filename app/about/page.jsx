import React from "react";

export const metadata = {
  title: "About Us - Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
  description:
    "Learn about Ramchandra Radheshyam jaiswal Iron Steel - A trusted family-run iron & steel enterprise since 1980 in Ayodhya, Uttar Pradesh. Authorized dealers of SAIL, Jindal, JSW, and Apollo. Premium quality TMT bars, MS angles, steel sheets & construction materials.",
  keywords: [
    "About Ramchandra Radheshyam jaiswal Iron Steel",
    "RCRS Steel Ayodhya",
    "Steel Distributor Ayodhya History",
    "Steel Company Ayodhya",
    "Family Steel Business Ayodhya",
    "Iron Steel Dealer Ayodhya",
    "SAIL Authorized Dealer Ayodhya",
    "Jindal Steel Ayodhya",
    "JSW Steel Ayodhya",
    "Apollo Steel Ayodhya",
    "Steel Distribution Uttar Pradesh",
    "Construction Material Supplier Ayodhya",
  ],
  openGraph: {
    title: "About Us - Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
    description:
      "Learn about Ramchandra Radheshyam jaiswal Iron Steel - A trusted family-run iron & steel enterprise since 1980 in Ayodhya, Uttar Pradesh.",
    url: "https://rcrsjaiswal.in/about",
    type: "website",
    images: [
      {
        url: "/store.png",
        width: 1200,
        height: 630,
        alt: "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
      },
    ],
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in/about",
  },
};

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">About RCRS</h1>
      <p className="text-lg text-center mb-6">
        At Ram Chander Radhey Shyam Jaiswal (RCRS), we are pioneering a new era
        in steel distribution across India. Our mission is to optimize the
        supply chain, ensuring that high-quality steel is readily available for
        all sectors, from construction to manufacturing. With an unwavering
        commitment to excellence and customer satisfaction, we strive to reshape
        the industry by enhancing operational efficiency and promoting
        sustainability.
      </p>

      <div className="flex flex-col md:flex-row items-start justify-between mb-8 mx-2 md:mx-10">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-5xl mt-1 font-serif font-bold mb-4">
            Rcrs Iron Store
          </h2>
          <span className="bg-blue-500 p-1 rounded-lg shadow-lg mx-2"></span>
          <span className="font-bold">
            Your Trusted Iron & Steel Partner Since 1980
          </span>
          <p className="mt-4 font-sans">
            Founded in 1980 in Ayodhya, Uttar Pradesh, our family-run iron &
            steel enterprise has been a trusted supplier of high-quality TMT
            bars, angles, channels, flats, plates, and structural materials for
            over six decades. As authorised dealers of leading brands such as
            SAIL, Jindal, JSW, and Apollo, we provide reliable products at
            competitive prices to contractors, fabricators, builders, and
            industries across India. With a legacy built on honesty, timely
            service, and customer commitment, we continue to deliver strong
            foundations for projects of every scale.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <img
            src="/store.png"
            alt="Steel Distribution"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
        <p className="mb-4">
          At RCRS, our core values shape our culture and guide our actions. We
          believe that embodying these values is crucial for building lasting
          relationships with our clients and partners. We are committed to:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Integrity:</strong> We operate with transparency and
            honesty, fostering trust in every interaction with our clients and
            partners.
          </li>
          <li>
            <strong>Innovation:</strong> We leverage the latest technologies and
            methodologies to continuously improve our processes and services,
            ensuring we stay at the forefront of the industry.
          </li>
          <li>
            <strong>Sustainability:</strong> We are dedicated to environmentally
            friendly practices, striving for a greener future for generations to
            come through responsible sourcing and energy-efficient operations.
          </li>
          <li>
            <strong>Customer-Centric:</strong> Our clients are at the heart of
            our operations; we strive to exceed their expectations in every
            engagement, tailoring our services to meet their unique needs.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="mb-4">
          Our Journey Established in 1980 in Ayodhya, Uttar Pradesh, our firm
          has grown from a small regional iron supplier into a trusted name
          across the construction and infrastructure sector. Over four decades,
          we have proudly supplied high-quality steel, TMT bars, structural
          sections, and roofing materials to contractors, builders, and
          government agencies across India. Our journey is built on hard work,
          consistency, and trust values that have guided every customer
          relationship since our beginning. As our expertise and capacity
          expanded, we became authorized partners for leading brands such as
          SAIL, Jindal, JSW, Apollo, Ankur, Rungta, MSP, and many more. This
          strong supply network allows us to deliver reliable materials for
          projects of every scale
        </p>
        <p className="mb-4">
          We believe in fostering a collaborative environment where ideas can
          flourish, leading to innovative solutions that benefit our clients and
          the industry as a whole. Our commitment to continuous learning and
          development ensures that our team stays at the forefront of industry
          trends and advancements, driving our mission forward.
        </p>
      </section>

      <section className="mb-8 bg-primary-foreground border-2 p-4 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">
          Your journey, Our constant support
        </h2>
        <p className="mb-4">
          At RCRS, we are always looking to expand our horizons. Whether you are
          a supplier, partner, or customer, we invite you to join us on our
          journey towards creating a more efficient and sustainable steel
          distribution network in India. Together, we can build a stronger, more
          reliable future.
        </p>
        <p>
          Your collaboration is essential in achieving our goals. We welcome
          partnerships that share our vision of innovation and sustainability.
          Let’s work together to set new standards in the steel distribution
          industry and make a lasting impact on the economy and the environment.
          With your support, we can elevate our industry to new heights.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
