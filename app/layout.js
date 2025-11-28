import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./footer";
import { structuredData } from "@/lib/structuredData";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { ToastDemo } from "./components/ToastPage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://rcrs.vercel.app"),
  title: {
    default: "RCRS: Revolutionizing Steel Distribution in India",
    template: "%s | RCRS Steel Distribution",
  },
  description:
    "RCRS is your trusted partner for innovative steel distribution solutions in India, providing quality products, timely delivery, and exceptional service.",
  keywords: [
    "Steel Distributor",
    "Steel Supply",
    "RCRS",
    "Steel Products India",
    "TMT Bars",
    "MS Angle",
    "Steel Sheets",
    "Construction Steel",
    "Ayodhya Steel Distributor",
  ],
  authors: [{ name: "RCRS Team" }],
  creator: "RCRS",
  publisher: "RCRS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rcrs.vercel.app",
    title: "RCRS: Revolutionizing Steel Distribution in India",
    description:
      "RCRS provides quality steel distribution services across India. Authorized dealers of SAIL, Jindal, JSW, and Apollo.",
    siteName: "RCRS Steel Distribution",
    images: [
      {
        url: "/Hindustan-Iron-Store-Slider-1.jpg",
        width: 1200,
        height: 630,
        alt: "RCRS Steel Distribution - Quality Steel Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RCRS: Revolutionizing Steel Distribution in India",
    description:
      "RCRS provides quality steel distribution services across India.",
    images: ["/Hindustan-Iron-Store-Slider-1.jpg"],
  },
  alternates: {
    canonical: "https://rcrs.vercel.app",
  },
  manifest: "/manifest.json",
  verification: {
    google: "tS79y0KazvnvyQ5xkEdJW8RC955XhgLbbLZy783oAuU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        {structuredData.products.map((product, index) => (
          <Script
            key={`product-schema-${index}`}
            id={`product-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(product),
            }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <ToastDemo />
          <SpeedInsights />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
