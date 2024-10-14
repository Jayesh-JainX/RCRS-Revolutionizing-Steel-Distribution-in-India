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
    switch (iconName) {
      case "BarChart2":
        return <BarChart2 className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      case "Triangle":
        return <Triangle className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      case "RectangleEllipsis":
        return (
          <RectangleEllipsis className="mx-auto mb-4 text-blue-500 h-12 w-12" />
        );
      case "Pipette":
        return <Pipette className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      case "Shield":
        return <Shield className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      case "ArrowUpCircle":
        return (
          <ArrowUpCircle className="mx-auto mb-4 text-blue-500 h-12 w-12" />
        );
      case "Building":
        return <Building className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      case "Sliders":
        return <Sliders className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      case "Sparkles":
        return <Sparkles className="mx-auto mb-4 text-blue-500 h-12 w-12" />;
      default:
        return null;
    }
  };

  return (
    <div className="hero-section p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-3xl font-bold mb-4">OUR PRODUCTS</h1>
      <p className="text-center mb-6">
        Hindustan Iron Store has 40+ years of experience in providing
        world-class products to our clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/products${product.link}`}
            className="product bg-primary-foreground p-6 rounded-lg border hover:border-blue-500 shadow text-center w-full flex flex-col"
          >
            <div key={product.id}>
              {renderIcon(product.icon)}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-2 mb-4">{product.description}</p>
            </div>
          </Link>
        ))}
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
