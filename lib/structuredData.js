import items from "./data";

export const structuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RCRS",
  url: "https://rcrs.vercel.app",
  logo: "https://rcrs.vercel.app/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/yourprofile",
    "https://www.twitter.com/yourprofile",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Steel Road",
    addressLocality: "Mumbai",
    addressRegion: "MH",
    postalCode: "400001",
    addressCountry: "IN",
  },
  description:
    "RCRS is a leading distributor of high-quality steel products in India, revolutionizing the steel distribution industry.",
};

const structuredDataProducts = items.map((item) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: item.name,
  image: item.imgSrc,
  description: item.description,
  brand: {
    "@type": "Brand",
    name: "RCRS",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: item.price,
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    url: `https://rcrs.vercel.app${item.link}`,
  },
  sku: `${item.name.replace(/\s+/g, "-").toLowerCase()}`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "100",
  },
  mainEntityOfPage: `https://rcrs.vercel.app${item.link}`,
}));

export const structuredData = {
  organization: structuredDataOrganization,
  products: structuredDataProducts,
};
