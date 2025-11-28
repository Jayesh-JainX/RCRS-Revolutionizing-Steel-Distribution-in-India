import React, { Suspense, lazy } from "react";
import Main from "./Main";

export const metadata = {
  title: "Home - RCRS Steel Distribution",
  description:
    "Welcome to RCRS - Your trusted partner for innovative steel distribution solutions in India. Authorized dealers of SAIL, Jindal, JSW, and Apollo since 1960.",
  keywords: [
    "Steel Distributor India",
    "RCRS Steel",
    "TMT Bars",
    "MS Angle",
    "Steel Sheets",
    "Construction Steel Ayodhya",
  ],
  openGraph: {
    title: "Home - RCRS Steel Distribution",
    description:
      "Welcome to RCRS - Your trusted partner for innovative steel distribution solutions in India.",
    url: "https://rcrs.vercel.app",
    type: "website",
  },
  alternates: {
    canonical: "https://rcrs.vercel.app",
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
