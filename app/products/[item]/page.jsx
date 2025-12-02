import items from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";

// Inject JSON-LD for breadcrumb and product data
function ProductJsonLd({ item }) {
  const product = items.find((p) => p.link === "/" + item);
  if (!product) return null;

  const absoluteImg = `https://rcrsjaiswal.in${product.imgSrc}`;
  const productUrl = `https://rcrsjaiswal.in/products/${item}`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rcrsjaiswal.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://rcrsjaiswal.in/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteImg,
    description: product.description || product.short,
    brand: {
      "@type": "Brand",
      name: "Ramchandra Radheshyam jaiswal Iron Steel",
    },
    sku: product.name.replace(/\s+/g, "-").toLowerCase(),
    mainEntityOfPage: productUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
    </>
  );
}

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

const ProductPage = ({ params }) => {
  const { item } = params || {};
  return (
    <>
      {item ? <ProductJsonLd item={item} /> : null}
      <ProductDetail />
    </>
  );
};

export default ProductPage;
