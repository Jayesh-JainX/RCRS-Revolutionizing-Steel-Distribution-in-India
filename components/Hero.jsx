import React from "react";
import Link from "next/link";
import {
  BsArrowUpCircle,
  BsBarChart,
  BsBuilding,
  BsEyedropper,
  BsCardText,
  BsShield,
  BsSliders,
  BsTriangle,
} from "react-icons/bs";
import { HiMiniSparkles } from "react-icons/hi2";
import products from "@/lib/products";
import { Button } from "@/components/ui/button";

function Hero() {
  const renderIcon = (iconName) => {
    const iconProps = "mx-auto mb-4 text-blue-500 h-10 w-10";

    // The switch cases remain exactly the same to match your database/products.js strings
    switch (iconName) {
      case "BarChart2":
        return <BsBarChart className={iconProps} />;
      case "Triangle":
        return <BsTriangle className={iconProps} />;
      case "RectangleEllipsis":
        // BsCardText is a great alternative for a rectangle with lines/dots
        return <BsCardText className={iconProps} />;
      case "Pipette":
        return <BsEyedropper className={iconProps} />;
      case "Shield":
        return <BsShield className={iconProps} />;
      case "ArrowUpCircle":
        return <BsArrowUpCircle className={iconProps} />;
      case "Building":
        return <BsBuilding className={iconProps} />;
      case "Sliders":
        return <BsSliders className={iconProps} />;
      case "Sparkles":
        return <HiMiniSparkles className={iconProps} />;
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
        RCRS has 60+ years of experience in providing world-class products to
        our clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/products${product.link}`}
            className="relative overflow-hidden product bg-primary-foreground p-4 md:p-6 rounded-lg border hover:border-blue-500 shadow text-center w-full flex flex-col group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-60"
              style={{
                backgroundImage: `url(${product.img})`,
                filter: "blur(5px)",
              }}
            />
            <div className="relative z-10">
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

      <div className="flex justify-center mt-6">
        <Link href={"/products"}>
          <Button variant="secondary">View All Products</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
