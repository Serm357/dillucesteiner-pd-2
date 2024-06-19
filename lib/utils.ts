import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Diluc Steiner - AI and AMR",
  description = "Susceptibility Testing meets AI",
  image = "/android-chrome-512x512.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sermdev",
    },
    icons,
    metadataBase: new URL("http://localhost:3000/"),
    // metadataBase: new URL("https://dilucsteiner.com/"),
  };
}
