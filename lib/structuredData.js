import items from "./data";

export const structuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Ramchandra Radheshyam jaiswal Iron Steel",
  legalName: "Ram Chander Radhey Shyam Jaiswal",
  url: "https://rcrsjaiswal.in",
  logo: "https://rcrsjaiswal.in/images/logo.png",
  foundingDate: "1980",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9044944111",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Devkali bypass, Ayodhya, Uttar Pradesh, India",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    postalCode: "224123",
    addressCountry: "IN",
  },
  description:
    "Ramchandra Radheshyam jaiswal Iron Steel - Leading distributor of premium quality steel products in Ayodhya, Uttar Pradesh since 1980. Authorized dealers of SAIL, Jindal, JSW, and Apollo. Specializing in TMT bars, MS angles, steel sheets, pipes, channels, and construction materials.",
  sameAs: [
    "https://rcrsjaiswal.in",
    // Add social media links here when available
  ],
  priceRange: "$$",
};

const structuredDataProducts = items.map((item) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: item.name,
  image: item.imgSrc,
  description: item.description,
  brand: {
    "@type": "Brand",
    name: "Ramchandra Radheshyam jaiswal Iron Steel",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: item.price,
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    url: `https://rcrsjaiswal.in${item.link}`,
  },
  sku: `${item.name.replace(/\s+/g, "-").toLowerCase()}`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "100",
  },
  mainEntityOfPage: `https://rcrsjaiswal.in${item.link}`,
}));

export const structuredData = {
  organization: structuredDataOrganization,
  products: structuredDataProducts,
};

// Helper function to generate BreadcrumbList structured data
export const generateBreadcrumbList = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Helper function to generate WebPage structured data
export const generateWebPage = (pageData) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageData.name,
    description: pageData.description,
    url: pageData.url,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
      url: "https://rcrsjaiswal.in",
    },
  };
};
