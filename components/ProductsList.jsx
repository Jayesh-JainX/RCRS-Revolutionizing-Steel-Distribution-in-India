"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import items from "@/lib/data";

const ProductsList = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) {
      setSearchTerm(query);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setLoading(false);
  }, [router]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fallbackRecommendations = items.slice(0, 3);

  return (
    <div className=" m-4 sm:p-8 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
        Products
      </h1>
      {searchTerm && (
        <h2 className="text-lg mb-4">
          Results for: <span className="font-semibold">{searchTerm}</span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-center h-[40vh]">
            <p className="text-gray-600 text-xl font-semibold animate-pulse">
              Loading...
            </p>
          </div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link key={index} href={"/products" + item.link} className="block">
              <div className="border rounded-lg p-4 bg-primary-foreground hover:border-blue-500 transition-all duration-300">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="h-72 w-full object-cover rounded transition duration-300 ease-in-out transform hover:scale-105"
                />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center">
            <p className="text-gray-600 text-2xl font-semibold mb-4 py-16">
              No products found.
            </p>
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
              You might like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {fallbackRecommendations.map((item, index) => (
                <Link
                  key={index}
                  href={"/products" + item.link}
                  className="block"
                >
                  <div className="border rounded-lg p-4 bg-primary-foreground hover:border-blue-500 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={600}
                      height={400}
                      className="h-[25vh] w-full object-cover rounded transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
            <a
              href="/products"
              className="mt-6 text-blue-600 hover:underline font-semibold"
            >
              See All Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
