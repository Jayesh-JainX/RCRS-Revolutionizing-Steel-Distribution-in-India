"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const items = [
  {
    name: "Saline Solution Steel",
    price: "12.99 Rs/pi",
    imgSrc: "../sheet-1.png",
    link: "saline-solution-steel",
  },
  {
    name: "Rodes Item Steel",
    price: "19.99 Rs/pi",
    imgSrc: "../rodes-1.png",
    link: "rodes-item-steel",
  },
  {
    name: "Belt Item Steel",
    price: "15.99 Rs/pi",
    imgSrc: "../belt-1.png",
    link: "belt-item-steel",
  },
  {
    name: "TMT Bar",
    price: "25.99 Rs/pi",
    imgSrc: "../TMT-Bar.jpg",
    link: "tmt-bar",
  },
  {
    name: "T Iron",
    price: "18.99 Rs/pi",
    imgSrc: "../T-Iron.jpg",
    link: "t-iron",
  },
  {
    name: "Steel Plate",
    price: "22.49 Rs/pi",
    imgSrc: "../Steel-Plate.png",
    link: "steel-plate",
  },
  {
    name: "Steel Item 1",
    price: "14.49 Rs/pi",
    imgSrc: "../stel-1.jpg",
    link: "steel-item-1",
  },
];

const ProductPage = () => {
  const { item } = useParams();

  // Ensure item is defined before trying to access it
  const product = items.find((p) => p.link === item);
  const recommendedItems = items.filter((p) => p.link !== item).slice(0, 3);

  return (
    <div className="p-8 bg-background text-foreground">
      {product ? (
        <>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="border-2  p-10 bg-primary-foreground rounded overflow-hidden mb-4 md:mb-0 md:mr-4">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-[30vw] rounded h-[40vh] object-fill"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg font-semibold mb-2">
                Price: <span className="text-blue-500">{product.price}</span>
              </p>
              <p>Description of the {product.name} product.</p>
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
        {recommendedItems.map((recItem, index) => (
          <Link
            key={index}
            href={`/products/${recItem.link}`}
            className="block border border-gray-300 rounded-lg p-4 bg-primary-foreground hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={recItem.imgSrc}
                alt={recItem.name}
                className="h-48 w-auto object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mt-2">{recItem.name}</h3>
              <p className="text-gray-600">{recItem.price}</p>
              <p className="mt-2 text-sm text-gray-500">
                Description of the {recItem.name} product.
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/products"
          className="inline-block text-blue-500 hover:underline"
        >
          See More Products
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
