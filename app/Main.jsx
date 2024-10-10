"use client";
import { Button } from "@/components/ui/button";
import { Gem, Goal, Telescope } from "lucide-react";
import React, { useEffect, useState } from "react";

function Main() {
  const images = [
    "Hindustan-Iron-Store-Slider-1.jpg",
    "Hindustan-Iron-Store-Slider-2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setNextImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mt-4">
      {/* Slider */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slider image ${index + 1}`}
              className="w-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            onClick={prevImage}
            className="shadow hover:bg-transparent"
          >
            &#10094;
          </Button>
          <Button
            variant="ghost"
            onClick={nextImage}
            className="shadow hover:bg-transparent"
          >
            &#10095;
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-[11.2vw] mt-4 backdrop-blur-md ">
        <div className="flex flex-col border transition-colors duration-300 ease-in-out hover:border-blue-500 items-center p-8 rounded-lg rounded-br-lg shadow-lg bg-primary-foreground -translate-y-10">
          <div className="relative mb-4">
            <div className="-inset-1 bg-blue-100 blur-lg" />
            <Telescope className="relative z-10 text-blue-600" size={40} />
          </div>
          <h2 className="text-lg text-center font-bold mb-2">Our Vision</h2>
          <p className="text-center font-[family-name:var(--font-geist-sans)]">
            To be the leading company in India supplying the best quality TMT
            bar, steel, and steel products and setting benchmarks in customer
            satisfaction.
          </p>
        </div>

        <div className="flex flex-col border transition-colors duration-300 ease-in-out hover:border-white items-center p-6 rounded-lg shadow-lg bg-blue-500 text-black -translate-y-16  ">
          <div className="relative mb-4">
            <div className="-inset-1 rounded-full bg-blue-300 blur-lg" />
            <Goal className="relative z-10 text-white" size={40} />
          </div>
          <h2 className="text-lg text-center font-extrabold mb-2">
            Our Mission
          </h2>
          <p className="text-center font-[family-name:var(--font-geist-sans)]">
            To create value for customers by providing the best products, and
            customized service and strive for excellence without compromising on
            values or ethics.
          </p>
        </div>

        <div className="flex flex-col border transition-colors duration-300 ease-in-out hover:border-blue-500 items-center p-8 rounded-lg rounded-bl-lg  shadow-lg bg-primary-foreground  -translate-y-10">
          <div className="relative mb-4">
            <div className=" -inset-1 rounded-full bg-blue-100 blur-lg" />
            <Gem className="relative z-10 text-blue-600" size={40} />
          </div>
          <h2 className="text-lg text-center font-bold mb-2">Our Values</h2>
          <p className="text-center font-[family-name:var(--font-geist-sans)]">
            Setting high standards of business and transaction, practicing the
            highest principles of work ethics, maintaining transparency, and
            persistently striving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
