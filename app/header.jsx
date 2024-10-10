"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { ModeToggle } from "./theme";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Headset, Search, Menu } from "lucide-react";

const items = [
  {
    name: "Saline Solution Steel",
    price: "12.99 Rs/pi",
    imgSrc: "./sheet-1.png",
    link: "/saline-solution-steel",
  },
  {
    name: "Rodes Item Steel",
    price: "19.99 Rs/pi",
    imgSrc: "./rodes-1.png",
    link: "/rodes-item-steel",
  },
  {
    name: "Belt Item Steel",
    price: "15.99 Rs/pi",
    imgSrc: "./belt-1.png",
    link: "/belt-item-steel",
  },
  {
    name: "TMT Bar",
    price: "25.99 Rs/pi",
    imgSrc: "./TMT-Bar.jpg",
    link: "/tmt-bar",
  },
  {
    name: "T Iron",
    price: "18.99 Rs/pi",
    imgSrc: "./T-Iron.jpg",
    link: "/t-iron",
  },
  {
    name: "Steel Plate",
    price: "22.49 Rs/pi",
    imgSrc: "./Steel-Plate.png",
    link: "/steel-plate",
  },
  {
    name: "Steel Item 1",
    price: "14.49 Rs/pi",
    imgSrc: "./stel-1.jpg",
    link: "/steel-item-1",
  },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      // Redirect to search results page
      window.location.href = `/products?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 shadow-md my-2 dark:shadow-sm dark:shadow-secondary">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <h1 className="text-md font-semibold font-[family-name:var(--font-geist-sans)]">
              RCRS STORE
            </h1>
          </Link>
          <div className="lg:pl-3 space-x-6 text-md font-mono hidden sm:flex">
            <Link
              href="/products"
              className="text-gray-500 hover:text-secondary-foreground hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              All
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-secondary-foreground hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              Sheets
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-secondary-foreground hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              Rolls
            </Link>
          </div>
        </div>

        <div className="relative flex-grow px-[10vw] ">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
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
          {searchQuery && filteredItems.length > 0 && (
            <div className="absolute bg-primary-foreground border border-gray-500 rounded-lg mt-1 z-10 w-[30vw]">
              {filteredItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-center p-2 hover:bg-secondary "
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

        <ModeToggle className="hidden sm:block" />
        <Button variant="link" className="ml-2 hover:no-underline">
          <Headset />
        </Button>

        <Button onClick={toggleSidebar} className="sm:hidden">
          <Menu />
        </Button>
      </header>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="bg-white w-64 p-4">
            <Button onClick={toggleSidebar} className="mb-4">
              Close
            </Button>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-500 hover:text-black">
                All
              </Link>
              <Link href="/" className="text-gray-500 hover:text-black">
                Sheets
              </Link>
              <Link href="/" className="text-gray-500 hover:text-black">
                Rolls
              </Link>
              <ModeToggle className="mt-4" />
              <Button variant="link" className="mt-2 hover:no-underline">
                <Headset />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
