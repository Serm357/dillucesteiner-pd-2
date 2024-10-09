import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Ditekta  - Revolutionizing health care with Artificial Intellingence (AI)",
  description = "Aspring Healthcare startup Company that mainly deals with Antimicrobial Resistance, Susceptibilty testing, e.t.c all rapidly done through Artificial Intelligence (AI) ",
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
      creator: "@salum_dev",
    },
    icons,
    // metadataBase: new URL("http://localhost:3000/"),
    metadataBase: new URL("https://dilucsteiner.com/"),
  };
}
