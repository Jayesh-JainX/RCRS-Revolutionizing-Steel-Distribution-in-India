"use client";

import items from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { item } = useParams();

  const product = items.find((p) => p.link === "/" + item);
  const productTags = product ? product.tags : [];

  const recommendedItems = items
    .filter(
      (p) =>
        p.link !== "/" + item && p.tags.some((tag) => productTags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="m-4 sm:p-8 bg-background text-foreground">
      {product ? (
        <>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="border-2 p-10 bg-primary-foreground rounded overflow-hidden mb-4 md:mb-0 md:mr-4">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="sm:w-[30vw] rounded sm:h-[40vh] object-fill"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg font-semibold mb-2">
                <span className="text-blue-500">{product.price}</span>
              </p>
              <p className="mt-4">{product.description}</p>
              <p className="mt-4 text-md text-gray-700">
                For inquiries, please{" "}
                <a
                  href="tel:+91-9044944111"
                  className="sm:hidden text-blue-500 hover:underline"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:rcrsjaiswal@gmail.com"
                  className="hidden sm:inline text-blue-500 hover:underline"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product Not Found</h2>
          <p className="mt-2">
            Sorry, we couldn't find the product you were looking for.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Go back to products
          </Link>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-8">Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {recommendedItems.length > 0 ? (
          recommendedItems.map((recItem, index) => (
            <Link
              key={index}
              href={`/products${recItem.link}`}
              className="block border border-gray-300 rounded-lg p-4 bg-primary-foreground hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={recItem.imgSrc}
                  alt={recItem.name}
                  className="h-48 w-auto object-cover rounded mb-2"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold mt-2">{recItem.name}</h3>
                <p className="text-gray-600">{recItem.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
      <div className="text-center mt-6">
        <a
          href="/products"
          className="inline-block text-blue-500 hover:underline"
        >
          See More Products
        </a>
      </div>
    </div>
  );
};

export default ProductPage;
