import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 ">
      <div className="hidden md:flex flex-col gap-6 border-t border-neutral-200 px-4 py-6 pt-8 text-sm  dark:border-neutral-700">
        <div className="flex ml-[14vw]">
          <Link href={"/"} className="flex items-center top-0 space-x-3">
            <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <h1 className="text-md font-semibold font-[family-name:var(--font-geist-sans)]">
              RCRS STORE
            </h1>
          </Link>
          <nav>
            <ul className="flex-col justify-start ml-[5vw]">
              <li>
                <Link
                  href="/"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-return-policy"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <span className="flex ml-[28vw]">
            <div className="">
              <h4 className="font-semibold">Customer Support</h4>
              <p>
                Need help? Call us at{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </span>
        </div>

        <hr />
        <div className="flex item-center justify-between mt-2">
          <span className="ml-16  ">
            © 2023-2024 Steel Store, Inc. All rights reserved. | Related to:
            Steel Products, Manufacturing, Supply Chain
          </span>
          <span>Jayesh Jain</span>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-6 border-t border-neutral-200 px-4 py-6 pt-8 text-sm dark:border-neutral-700">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-4 md:mb-0 md:ml-[14vw]">
            <Link href={"/"} className="flex items-center top-0 space-x-3">
              <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <h1 className="text-md font-semibold font-[family-name:var(--font-geist-sans)]">
                RCRS STORE
              </h1>
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li>
                <Link
                  href="/"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-return-policy"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block p-2 hover:text-black hover:underline dark:hover:text-neutral-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex md:ml-[5vw]">
            <div>
              <h4 className="font-semibold">Customer Support</h4>
              <p>
                Need help? Call us at{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex item-center justify-between mt-2">
          <span className="ml-0 md:ml-16">
            © 2023-2024 Steel Store, Inc. All rights reserved. | Related to:
            Steel Products, Manufacturing, Supply Chain
          </span>
          <span>Jayesh Jain</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
