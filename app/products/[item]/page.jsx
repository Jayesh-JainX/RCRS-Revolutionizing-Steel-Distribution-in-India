import items from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";

export async function generateMetadata({ params }) {
  const { item } = params;
  const product = items.find((p) => p.link === "/" + item);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.name,
    description: product.description || product.short,
    keywords: [
      product.name,
      product.short,
      ...product.tags,
      "Steel Product Ayodhya",
      "RCRS Steel",
      "Steel Supplier",
      "Iron Steel India",
    ],
    openGraph: {
      title: `${product.name} | Ramchandra Radheshyam jaiswal Iron Steel`,
      description: product.description || product.short,
      url: `https://rcrsjaiswal.in/products/${item}`,
      type: "website",
      images: [
        {
          url: product.imgSrc,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | RCRS Steel`,
      description: product.short,
      images: [product.imgSrc],
    },
    alternates: {
      canonical: `https://rcrsjaiswal.in/products/${item}`,
    },
  };
}

export async function generateStaticParams() {
  return items.map((item) => ({
    item: item.link.replace("/", ""),
  }));
}

const ProductPage = () => {
  return <ProductDetail />;
};

export default ProductPage;
