"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { ModeToggle } from "./theme";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Headset, Search, Menu } from "lucide-react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 shadow-md my-2 dark:shadow-sm dark:shadow-secondary">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <h1 className="text-md font-semibold font-[family-name:var(--font-geist-sans)]">
              STEAL STORE
            </h1>
          </Link>
          <div className=" lg:pl-3 space-x-6 text-md font-mono hidden sm:flex">
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

        <div className="flex-grow px-[10vw] ">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-[30vw] h-10 hover:border-gray-500 rounded-lg"
            />
            <Button variant="link" className="h-2 hover:no-underline">
              <Search />
            </Button>
          </div>
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
