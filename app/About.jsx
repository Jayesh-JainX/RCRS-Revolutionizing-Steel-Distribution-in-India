export default function AboutUs() {
  return (
    <div className="hero-section flex flex-col justify-center items-center p-6 md:p-12 font-[family-name:var(--font-geist-sans)] ">
      <div className="hero-section p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
          ABOUT US
        </h1>
        <p className="text-center mb-6 text-sm md:text-base">
          <span className="inline">
            At RCRS, we are pioneering a new era in steel distribution across
            India. Our mission is to optimize the supply chain, ensuring that
            high-quality steel is readily available for all sectors, from
            construction to manufacturing.
          </span>
          <span className="hidden sm:inline ml-2">
            With an unwavering commitment to excellence and customer
            satisfaction, we strive to reshape the industry by enhancing
            operational efficiency and promoting sustainability.
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mx-4 md:mx-16">
        <div className="w-full md:w-1/2 p-4 py-5 md:my-12">
          <h2 className="text-2xl sm:text-5xl mt-2 font-serif font-bold mb-4 ">
            Hindustan Iron Store
          </h2>
          <span className="bg-blue-500 p-1 rounded-lg shadow-lg mx-2"></span>
          <span className="font-bold text-lg ">Since 1981</span>
          <p className="mt-4 font-sans text-sm md:text-md ">
            Founded in Khurja, Uttar Pradesh, Hindustan Iron Store has long
            stood as a hallmark of quality in iron and steel distribution.
            Established by Shri Umesh Garg (1953-2020), our legacy is built on
            principles of safety, cost-effectiveness, and trust. With over 40
            years of experience, we have consistently embraced cutting-edge
            technology, allowing us to deliver exceptional products and services
            to our esteemed clientele across India. Our dedication to continuous
            improvement and innovation has made us a leader in the industry.
            With an unwavering commitment to excellence and customer
            satisfaction, we strive to reshape the industry by enhancing
            operational efficiency and promoting sustainability.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-3 py-5 sm:py-0 md:p-4 relative">
          <div className="absolute top-0 left-0 bg-blue-400 w-16 h-16 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 bg-blue-200 w-24 h-24 rounded-full opacity-50"></div>
          <img
            src="/Hindustan-Iron-Store-Slider-1.jpg"
            alt="Steel Distribution"
            className="w-full md:h-[50vh] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
      {/* <span className="text-center text-sm my-4 mx-2 text-muted-foreground">
        At Hindustan Iron Store, we are committed to delivering exceptional
        products that meet the highest industry standards. Our extensive
        experience and dedication to quality ensure that our clients receive the
        best materials for their construction needs. Trust us to provide you
        with reliable, durable, and high-performance products that stand the
        test of time.
      </span> */}
    </div>
  );
}
