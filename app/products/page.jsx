"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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

const ProductsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) {
      setSearchTerm(query);
    }
  }, [router]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
        Products
      </h1>
      {searchTerm && (
        <h2 className="text-lg mb-4">
          Results for: <span className="font-semibold">{searchTerm}</span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link key={index} href={item.link} className="block">
              <div className="border rounded-lg p-4 bg-primary-foreground hover:border-blue-500 transition-all duration-300">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-[25vh] w-full object-fill rounded transition duration-300 ease-in-out transform hover:scale-105"
                />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-center h-[40vh]">
            <p className="text-gray-600 text-xl font-semibold">
              No products found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
