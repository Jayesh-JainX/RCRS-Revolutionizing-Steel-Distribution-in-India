"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function Container() {
  const scrollContainerRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  const items = [
    {
      name: "Saline Solution Steel",
      price: "12.99 Rs/pi",
      imgSrc: "./sheet-1.png",
    },
    {
      name: "Rodes Item Steel",
      price: "19.99 Rs/pi",
      imgSrc: "./rodes-1.png",
    },
    {
      name: "Belt Item Steel",
      price: "15.99 Rs/pi",
      imgSrc: "./belt-1.png",
    },
  ];

  const scrollItems = [...items, ...items]; // Duplicate items for continuous scrolling

  useEffect(() => {
    const container = scrollContainerRef.current;

    const startAutoScroll = () => {
      scrollAnimationRef.current = requestAnimationFrame(() => {
        container.scrollLeft += 1; // Adjust the scroll speed here
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset position for seamless looping
        }
        startAutoScroll(); // Continue auto-scrolling
      });
    };

    startAutoScroll(); // Start auto-scrolling

    return () => {
      cancelAnimationFrame(scrollAnimationRef.current);
    };
  }, []);

  return (
    <main className="m-4 ">
      {/* First section */}
      <div className="flex items-start space-x-4 mb-8">
        <Link href="/">
          <div className="group relative border rounded-md bg-primary-foreground w-[62vw] h-[66vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
            <img
              src="./sheet-1.png"
              className="h-[50vh] w-[65vw] rotate-45 bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
              alt=""
            />
            <div className="absolute top-2/3 right-2/3 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
              Saline Solution Steel
              <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                12.99 Rs/pi
              </span>
            </div>
          </div>
        </Link>

        <div className=" flex flex-col space-y-4 ">
          <Link href="/">
            <div className="group relative border rounded-md bg-primary-foreground w-[34.5vw] h-[32vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
              <img
                src="./rodes-1.png"
                className="h-[25vh] w-[50vw] bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                alt="Rodes Item Steel"
              />
              <div className="absolute bottom-4 left-4 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
                Rodes Item Steel
                <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                  19.99 Rs/pi
                </span>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="group relative border rounded-md bg-primary-foreground w-[34.5vw] h-[32vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
              <img
                src="./belt-1.png"
                className="h-[25vh] w-[50vw] bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                alt="Belt Item Steel"
              />
              <div className="absolute bottom-4 left-4 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
                Belt Item Steel
                <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                  15.99 Rs/pi
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Cloned section with scrolling */}
      <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef}>
        <div className="flex space-x-4 mb-4">
          {scrollItems.map((item, index) => (
            <Link key={index} href="/">
              <div className="group relative border rounded-md bg-primary-foreground w-[35vw] h-[32vh] flex items-center justify-center overflow-hidden hover:border-blue-600 transition-all duration-300">
                <img
                  src={item.imgSrc}
                  className="h-[25vh] w-[50vw] bg-transparent transition duration-300 ease-in-out group-hover:scale-105"
                  alt={item.name}
                />
                <div className="absolute bottom-4 left-4 px-2 py-1 font-[family-name:var(--font-geist-sans)]">
                  {item.name}
                  <span className="ml-2 text-secondary font-semibold bg-blue-500 rounded-full p-2">
                    {item.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
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

export default Container;
