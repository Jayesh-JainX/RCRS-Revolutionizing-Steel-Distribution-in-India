"use client";
import company_names from "@/lib/company";
import items from "@/lib/data";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function ContainerDesktop() {
  const scrollContainerRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  const scrollItems = [...company_names, ...company_names];

  useEffect(() => {
    const container = scrollContainerRef.current;

    const startAutoScroll = () => {
      scrollAnimationRef.current = requestAnimationFrame(() => {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        startAutoScroll();
      });
    };

    startAutoScroll();

    return () => {
      cancelAnimationFrame(scrollAnimationRef.current);
    };
  }, []);

  return (
    <main className="m-4">
      <div className="hidden sm:block">
        {" "}
        <div className="flex items-start space-x-4 mb-8">
          <Link href={"/products" + items[0].link}>
            <div className="group relative border rounded-md bg-primary-foreground w-[62vw] h-[66vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
              <img
                src={items[0].imgSrc}
                className="h-[50vh] w-[65vw] rotate-45 bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                alt={items[0].name}
              />
              <div className="absolute top-2/3 right-2/3 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
                {items[0].name}
                <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                  {items[0].price}
                </span>
              </div>
            </div>
          </Link>

          <div className=" flex flex-col space-y-4 ">
            <Link href={"/products" + items[1].link}>
              <div className="group relative border rounded-md bg-primary-foreground w-[34.5vw] h-[32vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                <img
                  src={items[1].imgSrc}
                  className="h-[25vh] w-[50vw] bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                  alt={items[1].name}
                />
                <div className="absolute bottom-4 left-4 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
                  {items[1].name}
                  <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                    {items[1].price}
                  </span>
                </div>
              </div>
            </Link>
            <Link href={"/products" + items[2].link}>
              <div className="group relative border rounded-md bg-primary-foreground w-[34.5vw] h-[32vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                <img
                  src={items[2].imgSrc}
                  className="h-[25vh] w-[50vw] bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                  alt={items[2].name}
                />
                <div className="absolute bottom-4 left-4 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
                  {items[2].name}
                  <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                    {items[2].price}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-4 mb-4">
            {scrollItems.map((item, index) => (
              <div key={index}>
                <div className="group relative border rounded-md bg-primary-foreground w-[35vw] h-[32vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                  <img
                    src={item.imgSrc}
                    className=" w-[50vw] bg-cover px-10 bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>

      <style jsx>{`
        /* Custom scrollbar styles */
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari and Opera */
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </main>
  );
}

export default ContainerDesktop;
