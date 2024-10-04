import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8">About RCRS</h1>
      <p className="text-lg text-center mb-6">
        At RCRS, we are pioneering a new era in steel distribution across India.
        Our mission is to optimize the supply chain, ensuring that high-quality
        steel is readily available for all sectors, from construction to
        manufacturing. With an unwavering commitment to excellence and customer
        satisfaction, we strive to reshape the industry by enhancing operational
        efficiency and promoting sustainability.
      </p>

      <div className="flex items-start justify-between mb-8 mx-10">
        <div className="w-1/2 p-4 mx-28">
          <h2 className="text-5xl mt-1 font-serif font-bold mb-4">
            Hindustan Iron Store
          </h2>
          <span className="bg-blue-500 p-1 rounded-lg shadow-lg mx-2"></span>
          <span className="font-bold">Since 1981</span>
          <p className="mt-4 font-sans">
            Founded in Khurja, Uttar Pradesh, Hindustan Iron Store has long
            stood as a hallmark of quality in iron and steel distribution.
            Established by Shri Umesh Garg (1953-2020), our legacy is built on
            principles of safety, cost-effectiveness, and trust. With over 40
            years of experience, we have consistently embraced cutting-edge
            technology, allowing us to deliver exceptional products and services
            to our esteemed clientele across India. Our dedication to continuous
            improvement and innovation has made us a leader in the industry.
          </p>
        </div>

        <div className="w-1/2 p-4">
          <img
            src="/Hindustan-Iron-Store-Slider-1.jpg"
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
          Our team comprises industry experts and dedicated professionals who
          are passionate about transforming the steel distribution landscape in
          India. Each member brings unique skills and experiences, allowing us
          to innovate and adapt in an ever-changing market. Together, we work
          towards a common goal of excellence, reliability, and customer
          satisfaction, ensuring that our clients receive the best possible
          service and support.
        </p>
        <p className="mb-4">
          We believe in fostering a collaborative environment where ideas can
          flourish, leading to innovative solutions that benefit our clients and
          the industry as a whole. Our commitment to continuous learning and
          development ensures that our team stays at the forefront of industry
          trends and advancements, driving our mission forward.
        </p>
      </section>

      <section className="mb-8 bg-primary-foreground p-4 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="mb-4">
          At RCRS, we are always looking to expand our horizons. Whether you are
          a supplier, partner, or customer, we invite you to join us on our
          journey towards creating a more efficient and sustainable steel
          distribution network in India. Together, we can build a stronger, more
          reliable future.
        </p>
        <p className="mb-4">
          Your collaboration is essential in achieving our goals. We welcome
          partnerships that share our vision of innovation and sustainability.
          Let’s work together to set new standards in the steel distribution
          industry and make a lasting impact on the economy and the environment.
          With your support, we can elevate our industry to new heights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you’re interested in learning more about our services or exploring
          partnership opportunities, please don’t hesitate to reach out. Our
          dedicated team is here to assist you and answer any questions you may
          have. Together, we can forge a path towards a more efficient and
          sustainable future in steel distribution.
        </p>
        <p>
          <strong>Email:</strong> info@rcrs.com | <strong>Phone:</strong>{" "}
          +91-XXXXXXXXXX
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
