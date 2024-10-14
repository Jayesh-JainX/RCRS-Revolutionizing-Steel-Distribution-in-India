"use client";
import items from "@/lib/data";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function ContainerMobile() {
  const scrollContainerRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  const scrollItems = [...items, ...items];

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
      <div className="sm:hidden block">
        <h1 className="text-center text-2xl font-extrabold mb-4">
          Our Premier Products
        </h1>
        <p className="text-center mb-6 text-base md:text-lg ">
          With decades of expertise, Hindustan Iron Store delivers excellence in
          every product.
        </p>

        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 mb-8">
          <Link href={"/products" + items[0].link}>
            <div className="group relative border rounded-md bg-primary-foreground w-full  flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
              <img
                src={items[0].imgSrc}
                className="h-full w-full rotate-45   object-fill transition duration-300 ease-in-out group-hover:scale-105"
                alt={items[0].name}
              />
              <div className="absolute bottom-4 left-4 dark:bg-gray-600 bg-slate-200  bg-opacity-70 p-1 rounded-full">
                <span className="font-semibold text-sm pl-1">
                  {items[0].name}
                </span>
                <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-1 text-xs">
                  {items[0].price}
                </span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col space-y-4 w-full">
            {items.slice(1, 3).map((item, index) => (
              <Link key={index} href={"/products" + item.link}>
                <div className="group relative border rounded-md bg-primary-foreground w-full h-[25vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                  <img
                    src={item.imgSrc}
                    className="h-full w-full object-fill transition duration-300 ease-in-out group-hover:scale-105"
                    alt={item.name}
                  />
                  <div className="absolute bottom-2 left-2 dark:bg-gray-600 bg-slate-200  bg-opacity-70 p-1 rounded-full">
                    <span className="font-semibold text-sm pl-1">
                      {item.name}
                    </span>
                    <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-1 text-xs">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-4 mb-4">
            {scrollItems.map((item, index) => (
              <Link key={index} href={"/products" + item.link}>
                <div className="group relative border rounded-md bg-primary-foreground w-[70vw] h-[25vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                  <img
                    src={item.imgSrc}
                    className="h-full w-full object-fill transition duration-300 ease-in-out group-hover:scale-105"
                    alt={item.name}
                  />
                  <div className="absolute bottom-2 left-2 dark:bg-gray-600 bg-slate-200  bg-opacity-70 p-1 rounded-full">
                    <span className="text-sm pl-1">{item.name}</span>
                    <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-1 text-xs">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
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

export default ContainerMobile;
