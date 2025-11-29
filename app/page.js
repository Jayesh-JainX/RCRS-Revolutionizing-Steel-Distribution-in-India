import React, { Suspense, lazy } from "react";
import Main from "./Main";

export const metadata = {
  title: "Home - Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
  description:
    "Welcome to Ramchandra Radheshyam jaiswal Iron Steel - Your trusted partner for premium steel distribution in Ayodhya, Uttar Pradesh. Authorized dealers of SAIL, Jindal, JSW, and Apollo since 1980. Quality TMT bars, MS angles, steel sheets & construction materials.",
  keywords: [
    "Steel Distributor Ayodhya",
    "Ramchandra Radheshyam jaiswal Iron Steel",
    "RCRS Steel Ayodhya",
    "TMT Bars Ayodhya",
    "MS Angle Ayodhya",
    "Steel Sheets Ayodhya",
    "Construction Steel Ayodhya",
    "Iron Steel Supplier Ayodhya",
    "SAIL Dealer Ayodhya",
    "Jindal Steel Ayodhya",
    "JSW Steel Ayodhya",
    "Apollo Steel Ayodhya",
    "Building Material Ayodhya",
    "Steel Products Uttar Pradesh",
  ],
  openGraph: {
    title: "Home - Ramchandra Radheshyam jaiswal Iron Steel - Ayodhya",
    description:
      "Welcome to Ramchandra Radheshyam jaiswal Iron Steel - Your trusted partner for premium steel distribution in Ayodhya since 1980.",
    url: "https://rcrsjaiswal.in",
    type: "website",
  },
  alternates: {
    canonical: "https://rcrsjaiswal.in",
  },
};


const LazyHero = lazy(() => import("./Hero"));
const LazyAbout = lazy(() => import("./About"));
const LazyContainer = lazy(() => import("./ContainerPage"));
const LazyMap = lazy(() => import("./Map"));

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-2xl font-bold animate-pulse">Loading...</div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Main />
      <hr className="mx-4" />
      <Suspense fallback={<Loading />}>
        <LazyAbout />
      </Suspense>

      <hr className="mx-4" />
      <Suspense fallback={<Loading />}>
        <LazyHero />
      </Suspense>
      <hr className="mx-4" />
      <Suspense fallback={<Loading />}>
        <LazyContainer />
      </Suspense>
      <hr className="mx-4" />
      <Suspense fallback={<Loading />}>
        <LazyMap />
      </Suspense>
    </div>
  );
}
