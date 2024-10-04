import React from "react";
import Link from "next/link";
import {
  ArrowUpCircle,
  BarChart2,
  Building,
  Pipette,
  RectangleEllipsis,
  Shield,
  Sliders,
  Sparkles,
  Triangle,
} from "lucide-react";

function Hero() {
  return (
    <div className="hero-section p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-3xl font-bold mb-4">OUR PRODUCTS</h1>
      <p className="text-center mb-6">
        Hindustan Iron Store has 40+ years of experience in providing
        world-class products to our clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <BarChart2 className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">TMT BAR</h2>
          <p className="mt-2 mb-4">
            TMT bars (Thermo Mechanically treated Bars) are high-strength
            reinforcement bars with a hard outer core and soft inner core, ideal
            for most types of construction projects.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <Triangle className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">ANGLE</h2>
          <p className="mt-2 mb-4">
            Hindustan Iron Store supplies a wide range of Steel Angles. We offer
            both equal and unequal angles, catering to diverse construction
            needs with a full range of standard options.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <RectangleEllipsis className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">FLAT BAR</h2>
          <p className="mt-2 mb-4">
            Our well-designed Flat Bars are perfect for construction purposes,
            featuring excellent mechanical and chemical properties that ensure
            low maintenance costs and high durability.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <Pipette className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">STEEL PLATE</h2>
          <p className="mt-2 mb-4">
            Steel Plates are typically more affordable than cold-rolled steel
            due to their manufacturing process, which eliminates delays and the
            need for reheating.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <Shield className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">BLACK PIPE</h2>
          <p className="mt-2 mb-4">
            As one of the top manufacturers, our Black Pipes feature
            high-strength reinforcement with a hardened outer core and a soft
            inner core, ensuring durability and reliability.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <ArrowUpCircle className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">IRON CARDEN</h2>
          <p className="mt-2 mb-4">
            Known for their high tensile and yield strength, our Iron Cardens
            perform exceptionally well in various applications, providing
            unmatched quality.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <Building className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">GIRDER</h2>
          <p className="mt-2 mb-4">
            Our Channels, defined by their web height and flange width, are
            ideal for bus bodies, EOT cranes, and various engineering
            applications.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <Sliders className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">CEMENT SHEET</h2>
          <p className="mt-2 mb-4">
            Cement Sheets are vital for constructing bridges and large
            structures, offering numerous benefits that enhance their usability
            and performance.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center  w-full flex flex-col">
          <Sparkles className="mx-auto mb-4 text-blue-500 h-12 w-12" />{" "}
          <h2 className="text-xl font-semibold">T IRON</h2>
          <p className="mt-2 mb-4">
            T Iron Bar is produced to provide connections in some of the steel
            structures that are widely used today. T Iron Bars are commonly used
            as a support in the construction and automotive spare parts
            industries.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>
      </div>

      <div className="additional-info mt-8 text-center">
        <p>
          At Hindustan Iron Store, we are committed to delivering exceptional
          products that meet the highest industry standards. Our extensive
          experience and dedication to quality ensure that our clients receive
          the best materials for their construction needs. Trust us to provide
          you with reliable, durable, and high-performance products that stand
          the test of time.
        </p>
      </div>
    </div>
  );
}

export default Hero;
