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
  title: "RCRS: Revolutionizing Steel Distribution in India",
  description:
    "RCRS is your trusted partner for innovative steel distribution solutions in India, providing quality products, timely delivery, and exceptional service.",
  keywords:
    "Steel Distributor, Steel Supply, RCRS, Steel Products, India, Steel Distribution",
  author: "RCRS Team",
  robots: "index, follow",
  openGraph: {
    title: "RCRS: Revolutionizing Steel Distribution in India",
    description:
      "RCRS provides quality steel distribution services across India.",
    url: "https://rcrs.vercel.app", // replace with your actual URL
    image: "/Hindustan-Iron-Store-Slider-1.jpg", // replace with your actual Open Graph image
  },
  twitter: {
    card: "summary_large_image",
    title: "RCRS: Revolutionizing Steel Distribution in India",
    description:
      "RCRS provides quality steel distribution services across India.",
    image: "/Hindustan-Iron-Store-Slider-1.jpg", // replace with your actual Twitter image
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script type="application/ld+json">
          {JSON.stringify(structuredData.organization)}
        </Script>
        {structuredData.products.map((product, index) => (
          <Script key={index} type="application/ld+json">
            {JSON.stringify(product)}
          </Script>
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
          <SpeedInsights />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
      <Script type="application/ld+json">
        {JSON.stringify(structuredData.organization)}
      </Script>

      {structuredData.products.map((product, index) => (
        <Script key={index} type="application/ld+json">
          {JSON.stringify(product)}
        </Script>
      ))}
    </html>
  );
}
