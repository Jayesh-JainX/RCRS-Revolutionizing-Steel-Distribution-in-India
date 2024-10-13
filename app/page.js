import React, { Suspense, lazy } from "react";
import Main from "./Main";

const LazyContainer = lazy(() => import("./Container"));
const LazyHero = lazy(() => import("./Hero"));

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
        <LazyContainer />
      </Suspense>
      <hr className="mx-4" />
      <Suspense fallback={<Loading />}>
        <LazyHero />
      </Suspense>
    </div>
  );
}

// https://www.metalsupermarkets.com/
// https://hindustaniron.in/
