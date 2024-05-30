"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React, { useState, useRef, useEffect } from "react";
import MagicButton from "./MagicButton";
import { ChevronRight } from "lucide-react";


export default function Subhero() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">For Provider.</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Diluc Steiner, our advanced technology is designed to uncover and
        expose antimicrobial resistance (AMR) hiding places with unparalleled
        accuracy and speed
      </p>
      <a href="#about-us" className="my-2">
        <MagicButton
          title="Learn How"
          icon={<ChevronRight />}
          position="right"
        />
      </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">For Patient</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        By using our technology, patients can provide real-time data through
        regular health monitoring and reporting symptoms early. When patients
        use at-home diagnostic kits linked to our AI system, they can collect
        samples (like swabs or blood) and input symptoms into a user-friendly
        app. Our AI then analyzes these samples and symptoms for any signs of
        resistance.
      </p>
      <a href="#about-us" className="my-2">
        <MagicButton
          title="Learn How"
          icon={<ChevronRight />}
          position="right"
        />
      </a>
    </div>
  );
};
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">Greens all over</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">Rivers are serene</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 hover:cursor-pointer ",
    thumbnail: "/2.jpg",
    title: "For Providers",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 hover:cursor-pointer ",
    thumbnail: "/6.jpg",
    title: "For Patients",
  },
 
];
