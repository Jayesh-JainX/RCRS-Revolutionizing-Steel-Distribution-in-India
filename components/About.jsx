import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="hero-section flex flex-col justify-center items-center p-6 md:p-12 font-[family-name:var(--font-geist-sans)] ">
      <div className="hero-section p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
          ABOUT US
        </h1>
        <p className="text-center mb-6 text-sm md:text-base">
          <span className="inline">
            At Ram Chander Radhey Shyam Jaiswal (RCRS), we are pioneering a new
            era in steel distribution across India. Our mission is to optimize
            the supply chain, ensuring that high-quality steel is readily
            available for all sectors, from construction to manufacturing.
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
            Rcrs Iron Store
          </h2>
          <span className="bg-blue-500 p-1 rounded-lg shadow-lg mx-2"></span>
          <span className="font-bold text-lg ">
            Your Trusted Iron & Steel Partner Since 1980
          </span>
          <p className="mt-4 font-sans text-sm md:text-md ">
            Founded in 1980 in Ayodhya, Uttar Pradesh, Ram Chander Radhey Shyam
            Jaiswal (RCRS) is our family-run iron & steel enterprise has been a
            trusted supplier of high-quality TMT bars, angles, channels, flats,
            plates, and structural materials for over six decades. As authorised
            dealers of leading brands such as SAIL, Jindal, JSW, and Apollo, we
            provide reliable products at competitive prices to contractors,
            fabricators, builders, and industries across India. With a legacy
            built on honesty, timely service, and customer commitment, we
            continue to deliver strong foundations for projects of every scale.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-3 py-5 sm:py-0 md:p-4 relative">
          <div className="absolute top-0 left-0 bg-blue-400 w-16 h-16 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 bg-blue-200 w-24 h-24 rounded-full opacity-50"></div>
          <Image
            src="/store.png"
            alt="Steel Distribution"
            width={1200}
            height={800}
            className="w-full md:h-[50vh] object-cover rounded-md shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
