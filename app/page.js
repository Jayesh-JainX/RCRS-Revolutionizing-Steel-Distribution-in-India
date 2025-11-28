import React, { Suspense, lazy } from "react";
import Main from "./Main";

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
