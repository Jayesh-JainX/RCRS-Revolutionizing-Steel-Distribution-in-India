import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Header from "../components/header";
import Footer from "../components/footer";
import { structuredData } from "@/lib/structuredData";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { ToastDemo } from "../components/ToastPage";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  metadataBase: new URL("https://rcrsjaiswal.in"),
  title: {
    default:
      "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya | Premium Steel Distributor Since 1980",
    template: "%s | Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
  },
  description:
    "Ramchandra Radheshyam jaiswal Iron Steel - Leading steel distributor in Ayodhya, Uttar Pradesh since 1980. Authorized dealers of SAIL, Jindal, JSW, and Apollo. Premium TMT bars, MS angles, steel sheets, pipes, channels & construction steel products.",
  keywords: [
    "Ramchandra Radheshyam jaiswal Iron Steel",
    "RCRS Steel Ayodhya",
    "Steel Distributor Ayodhya",
    "Iron Steel Supplier Ayodhya",
    "TMT Bars Ayodhya",
    "MS Angle Ayodhya",
    "Steel Sheets Ayodhya",
    "Construction Steel Ayodhya",
    "SAIL Authorized Dealer Ayodhya",
    "Jindal Steel Dealer Ayodhya",
    "JSW Steel Distributor Ayodhya",
    "Apollo Steel Dealer Ayodhya",
    "Steel Supplier Uttar Pradesh",
    "Iron Products Ayodhya",
    "MS Pipes Ayodhya",
    "C Channel Ayodhya",
    "T Iron Ayodhya",
    "MS Structure Ayodhya",
    "Galvanized Sheets Ayodhya",
    "HR Sheets Ayodhya",
    "GP Sheets Ayodhya",
    "Iron Plates Ayodhya",
    "MS Flat Ayodhya",
    "Barbed Wire Ayodhya",
    "Boundary Fence Ayodhya",
    "Roofing Sheets Ayodhya",
    "Construction Material Ayodhya",
    "Building Material Supplier Ayodhya",
    "Steel Products India",
    "Quality Steel Distributor",
    "Wholesale Steel Supplier",
    "Industrial Steel Ayodhya",
  ],
  authors: [{ name: "Ramchandra Radheshyam jaiswal Team" }],
  creator: "Ramchandra Radheshyam jaiswal Iron Steel",
  publisher: "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
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
    url: "https://rcrsjaiswal.in",
    title:
      "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya | Premium Steel Distributor Since 1980",
    description:
      "Leading steel distributor in Ayodhya since 1980. Authorized dealers of SAIL, Jindal, JSW, and Apollo. Premium quality TMT bars, MS angles, steel sheets & construction materials.",
    siteName: "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ramchandra Radheshyam jaiswal Iron Steel - Quality Steel Products in Ayodhya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya | Premium Steel Since 1980",
    description:
      "Leading steel distributor in Ayodhya. Authorized dealers of SAIL, Jindal, JSW, and Apollo. Premium quality steel products.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in",
  },
  manifest: "/manifest.json",
  verification: {
    google: "tS79y0KazvnvyQ5xkEdJW8RC955XhgLbbLZy783oAuU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
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
        suppressHydrationWarning
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
        </ThemeProvider>
      </body>
    </html>
  );
}
