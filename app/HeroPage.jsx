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
import products from "@/lib/products";

function Hero() {
  const renderIcon = (iconName) => {
    const iconProps = "mx-auto mb-4 text-blue-500 h-10 w-10"; // Adjusted size for mobile
    switch (iconName) {
      case "BarChart2":
        return <BarChart2 className={iconProps} />;
      case "Triangle":
        return <Triangle className={iconProps} />;
      case "RectangleEllipsis":
        return <RectangleEllipsis className={iconProps} />;
      case "Pipette":
        return <Pipette className={iconProps} />;
      case "Shield":
        return <Shield className={iconProps} />;
      case "ArrowUpCircle":
        return <ArrowUpCircle className={iconProps} />;
      case "Building":
        return <Building className={iconProps} />;
      case "Sliders":
        return <Sliders className={iconProps} />;
      case "Sparkles":
        return <Sparkles className={iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="hero-section p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
        OUR PRODUCTS
      </h1>
      <p className="text-center mb-6 text-sm md:text-base">
        Hindustan Iron Store has 40+ years of experience in providing
        world-class products to our clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/products${product.link}`}
            className="product bg-primary-foreground p-4 md:p-6 rounded-lg border hover:border-blue-500 shadow text-center w-full flex flex-col"
          >
            <div key={product.id}>
              {renderIcon(product.icon)}
              <h2 className="text-lg md:text-xl font-semibold">
                {product.name}
              </h2>
              <p className="mt-2 mb-4 text-sm md:text-base">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="additional-info mt-8 text-center">
        <p className="text-sm md:text-base">
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
