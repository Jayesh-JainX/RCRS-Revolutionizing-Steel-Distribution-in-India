import ProductsList from "@/components/ProductsList";

export const metadata = {
  title: "Products",
  description:
    "Browse our comprehensive range of premium steel products at Ramchandra Radheshyam jaiswal Iron Steel. TMT bars, MS angles, steel sheets, pipes, channels, and construction materials from SAIL, Jindal, JSW, and Apollo.",
  keywords: [
    "Steel Products Ayodhya",
    "TMT Bars",
    "MS Angle",
    "Steel Sheets",
    "MS Pipes",
    "C Channel",
    "T Iron",
    "Steel Catalog",
    "Construction Steel Products",
    "Iron Products Ayodhya",
    "SAIL Products",
    "Jindal Steel Products",
    "JSW Steel Products",
    "Apollo Steel Products",
    "Galvanized Sheets",
    "HR Sheets",
    "GP Sheets",
    "Barbed Wire",
    "Roofing Sheets",
  ],
  openGraph: {
    title:
      "Steel Products | Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
    description:
      "Explore our wide range of premium steel products including TMT bars, MS angles, steel sheets, pipes, and channels. Authorized dealers of SAIL, Jindal, JSW, and Apollo.",
    url: "https://rcrsjaiswal.in/products",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RCRS Steel Products Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Products | RCRS Steel Ayodhya",
    description:
      "Premium steel products from SAIL, Jindal, JSW, and Apollo. TMT bars, MS angles, sheets, pipes & more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in/products",
  },
};

const ProductsPage = () => {
  return <ProductsList />;
};

export default ProductsPage;
