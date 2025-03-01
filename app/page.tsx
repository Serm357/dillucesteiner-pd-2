// app/page.tsx
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { getPostMetadata } from "./components/HomePageComponents/getPostMetadata";

// Server Components
import Stats from "./components/HomePageComponents/Stats";
import Herofeatures from "./components/HomePageComponents/Features";
import CTA from "./components/HomePageComponents/CTA";
import HeroFinale from "./components/HomePageComponents/HeroFinale";

// Dynamic Client Components
const Team = dynamic(() => import("./components/HomePageComponents/Team"), {
  ssr: false,
  loading: () => (
    <Skeleton className="h-[400px] w-full max-w-7xl mx-auto rounded-lg" />
  ),
});

const Testimonials = dynamic(
  () => import("./components/HomePageComponents/Testimonials"),
  {
    ssr: false,
    loading: () => (
      <Skeleton className="h-[300px] w-full max-w-6xl mx-auto rounded-lg" />
    ),
  }
);

const ImageSlider = dynamic(
  () => import("./components/HomePageComponents/ImageSlider"),
  {
    ssr: false,
    loading: () => (
      <Skeleton className="h-72 w-full max-w-7xl mx-auto rounded-lg" />
    ),
  }
);

// Hero Loading Component
const HeroLoading = () => (
  <div className="relative h-screen min-h-[600px] w-full">
    <Skeleton className="absolute inset-0 h-full w-full bg-gray-900/20" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
      <Skeleton className="h-8 w-48 rounded-full bg-gray-800/50" />
      <Skeleton className="h-16 w-3/4 max-w-2xl rounded-lg bg-gray-800/50" />
      <Skeleton className="h-24 w-5/6 max-w-3xl rounded-lg bg-gray-800/50" />
      <Skeleton className="h-12 w-40 rounded-full bg-gray-800/50" />
    </div>
  </div>
);

export default async function Home() {
  const posts = await getPostMetadata(); // Fetch data on server

  return (
    <main className="flex-1">
      <React.Suspense fallback={<HeroLoading />}>
        <HeroFinale />
      </React.Suspense>

      <React.Suspense
        fallback={
          <div className="py-12">
            <Skeleton className="h-48 w-full max-w-6xl mx-auto rounded-lg" />
          </div>
        }
      >
        <Stats />
      </React.Suspense>

      <React.Suspense
        fallback={
          <div className="py-16">
            <Skeleton className="h-36 w-full max-w-4xl mx-auto rounded-lg" />
          </div>
        }
      >
        <CTA />
      </React.Suspense>

      <React.Suspense
        fallback={
          <div className="py-16">
            <Skeleton className="h-64 w-full max-w-7xl mx-auto rounded-lg" />
          </div>
        }
      >
        <Herofeatures />
      </React.Suspense>

      <React.Suspense
        fallback={
          <div className="py-12">
            <Skeleton className="h-72 w-full max-w-7xl mx-auto rounded-lg" />
          </div>
        }
      >
        <ImageSlider posts={posts} />
      </React.Suspense>

      <React.Suspense
        fallback={
          <Skeleton className="h-[300px] w-full max-w-6xl mx-auto rounded-lg" />
        }
      >
        <Testimonials />
      </React.Suspense>

      <React.Suspense
        fallback={
          <Skeleton className="h-[400px] w-full max-w-7xl mx-auto rounded-lg" />
        }
      >
        <Team />
      </React.Suspense>
    </main>
  );
}
