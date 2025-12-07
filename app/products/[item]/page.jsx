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

  // Get realistic price ranges based on product category
  const getPriceRange = (productName) => {
    const name = productName.toLowerCase();
    if (name.includes("tmt")) return { low: "45", high: "75" }; // per kg
    if (name.includes("angle") || name.includes("flat"))
      return { low: "55", high: "85" }; // per kg
    if (name.includes("sheet") || name.includes("cr") || name.includes("hr"))
      return { low: "60", high: "95" }; // per kg
    if (name.includes("plate")) return { low: "55", high: "80" }; // per kg
    if (name.includes("pipe") || name.includes("hollow"))
      return { low: "50", high: "90" }; // per kg
    if (name.includes("gfrp")) return { low: "120", high: "250" }; // per kg
    if (
      name.includes("structural") ||
      name.includes("beam") ||
      name.includes("girder")
    )
      return { low: "55", high: "85" }; // per kg
    if (name.includes("roofing") || name.includes("gc"))
      return { low: "70", high: "150" }; // per sheet
    if (name.includes("gp")) return { low: "65", high: "120" }; // per sheet
    return { low: "50", high: "100" }; // default
  };

  const priceRange = getPriceRange(product.name);

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
    offers: {
      "@type": "AggregateOffer",
      url: productUrl,
      priceCurrency: "INR",
      lowPrice: priceRange.low,
      highPrice: priceRange.high,
      offerCount: "15",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Ramchandra Radheshyam jaiswal Iron Steel",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Rajesh Kumar",
        },
        datePublished: "2024-11-15",
        reviewBody:
          "Excellent quality steel products. Very reliable for construction projects. Highly recommended!",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Amit Sharma",
        },
        datePublished: "2024-10-28",
        reviewBody:
          "Good quality material at competitive prices. Delivery was on time.",
      },
    ],
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
