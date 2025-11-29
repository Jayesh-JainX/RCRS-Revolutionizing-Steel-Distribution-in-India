"use client";
import company_names from "@/lib/company";
import React, { useEffect, useRef } from "react";

function ContainerMobile() {
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
      <div className="sm:hidden block">
        <h1 className="text-center text-2xl font-extrabold mb-4">
          Our Premier Products
        </h1>
        <p className="text-center mb-6 text-base md:text-lg ">
          With decades of expertise, Hindustan Iron Store delivers excellence in
          every product.
        </p>

        <div
          className="overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-4 mb-4">
            {scrollItems.map((item, index) => (
              <div key={index}>
                <div className="group relative border rounded-md bg-primary-foreground w-[70vw] h-[25vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                  <img
                    src={item.imgSrc}
                    className="w-full object-fill transition duration-300 ease-in-out group-hover:scale-105"
                    alt={item.name}
                  />
                </div>
              </div>
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
