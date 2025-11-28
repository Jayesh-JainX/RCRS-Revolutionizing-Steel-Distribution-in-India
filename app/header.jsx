"use client";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useRef } from "react";
import { ModeToggle } from "./theme";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Headset, Search, Menu, X, Mail } from "lucide-react";
import items from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);
  const recommendationsRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowRecommendations(e.target.value.length > 0);
  };

  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 4);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    toggleSidebar();
    if (searchQuery) {
      window.location.href = `/products?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleRecommendationClick = () => {
    toggleSidebar();
    setShowRecommendations(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        recommendationsRef.current &&
        !recommendationsRef.current.contains(event.target) && // Check if click is outside recommendations
        document.querySelector('input[type="text"]') && // Ensure input exists
        !document.querySelector('input[type="text"]').contains(event.target) // Check if click is outside the input
      ) {
        setShowRecommendations(false); // Hide recommendations
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <div>
      <header className="flex items-center justify-between p-4 shadow-md my-2 dark:shadow-sm dark:shadow-secondary">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <h1 className="text-md font-semibold font-[family-name:var(--font-geist-sans)]">
                    RCRS
                  </h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <div className="lg:pl-3 space-x-6 text-md font-mono hidden sm:flex">
            <a
              href="/about"
              className="text-gray-500 hover:text-secondary-foreground hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              About
            </a>
            <a
              href="/products"
              className="text-gray-500 hover:text-secondary-foreground hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              Products
            </a>
            <a
              href="/contact"
              className="text-gray-500 hover:text-secondary-foreground hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative flex-grow px-[10vw] hidden sm:block ">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowRecommendations(true)}
              className="w-[30vw] h-10 hover:border-gray-500 rounded-lg"
            />
            <Button
              type="submit"
              variant="link"
              className="h-2 hover:no-underline"
            >
              <Search />
            </Button>
          </form>
          {showRecommendations && filteredItems.length > 0 && (
            <div
              ref={recommendationsRef}
              className="absolute bg-primary-foreground border border-gray-500 rounded-lg mt-1 z-10 w-[30vw]"
            >
              {filteredItems.map((item, index) => (
                <Link
                  key={index}
                  href={"/products" + item.link}
                  className="flex items-center p-2 hover:bg-secondary"
                  onClick={handleRecommendationClick}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-10 w-10 rounded"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <span className="hidden sm:block">
          <ModeToggle />
        </span>

        <a
          href="tel:+1234567890"
          className="ml-2 hover:no-underline hidden sm:block "
        >
          <Button variant="link">
            <Headset />
          </Button>
        </a>

        <Button variant="ghost" onClick={toggleSidebar} className="sm:hidden">
          <Menu />
        </Button>
      </header>

      {sidebarOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end"
          onClick={toggleSidebar}
        >
          <div
            ref={sidebarRef}
            className="bg-secondary w-[80vw] p-4 flex flex-col h-full rounded-l"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-xl">Menu</span>
              <Button variant="ghost" onClick={toggleSidebar}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <hr className="mb-3 shadow-md dark:border-gray-400" />

            <form onSubmit={handleSearchSubmit} className="mb-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowRecommendations(true)}
                className="w-full h-10 rounded-lg"
              />
              {showRecommendations && filteredItems.length > 0 && (
                <div
                  ref={recommendationsRef}
                  className="absolute bg-primary-foreground border border-gray-500 rounded-lg mt-1 z-10 w-[71vw]"
                >
                  {filteredItems.map((item, index) => (
                    <Link
                      key={index}
                      href={"/products" + item.link}
                      className="flex items-center p-2 hover:bg-secondary"
                      onClick={handleRecommendationClick}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="h-10 w-10 rounded"
                      />
                      <div className="ml-2">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-500">{item.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </form>

            <div className="flex flex-col space-y-4 mt-2 mb-auto">
              <a href="/products" onClick={closeSidebar}>
                All Products
              </a>
              <a href="/products?q=sheets" onClick={closeSidebar}>
                Sheets
              </a>
              <a href="/products?q=rolls" onClick={closeSidebar}>
                Rolls
              </a>

              <Link href="/about" onClick={closeSidebar}>
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-black"
                onClick={closeSidebar}
              >
                Contact
              </Link>
              <Link href="/terms-conditions" onClick={closeSidebar}>
                Terms & Conditions
              </Link>
              <Link href="/shipping-return-policy" onClick={closeSidebar}>
                Shipping & Returns
              </Link>
              <Link href="/privacy-policy" onClick={closeSidebar}>
                Privacy Policy
              </Link>

              <hr className="mt-3" />

              <div className="flex flex-row items-center justify-center pt-8">
                <ModeToggle className="mt-4" />
                <a
                  href="mailto:youremail@example.com"
                  className="hover:no-underline"
                  onClick={closeSidebar}
                >
                  <Button variant="link">
                    <Mail />
                  </Button>
                </a>
                <a
                  href="tel:+1234567890"
                  className="hover:no-underline"
                  onClick={closeSidebar}
                >
                  <Button variant="link">
                    <Headset />
                  </Button>
                </a>
              </div>
            </div>

            <Link href={"/"} onClick={closeSidebar}>
              <div className="mt-auto mb-4 text-center font-extrabold">
                RCRS
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
