"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const LayoutGrid = dynamic(() => import("@/components/ui/layout-grid"), {
  ssr: false,
});

export default function Subhero() {
  return (
    <div className="h-screen py-2 lg:py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-primary">For Provider.</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Diluc Steiner, our advanced technology is designed to uncover and
        expose antimicrobial resistance (AMR) hiding places with unparalleled
        accuracy and speed
      </p>
      <Link
        href="/for-providers"
        className="my-2 py-2 px-3 w-11 font-bold bg-primary-foreground text-primary rounded-md"
      >
        Lean How
      </Link>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-primary">For Patient</p>
      <p className="font-normal text-base my-4 max-w-lg lg:h-28 text-neutral-200 ">
        By using our technology, patients can provide real-time data through
        regular health monitoring and reporting symptoms early. When patients
        use at-home diagnostic kits linked to our AI system, they can collect
        samples (like swabs or blood) and input symptoms into a user-friendly
        app. Our AI then analyzes these samples and symptoms for any signs of
        resistance.
      </p>
      <Link
        href="/for-patients"
        className="my-2 py-2 px-3 w-11 font-bold bg-primary-foreground text-primary rounded-md"
      >
        Lean How
      </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 hover:cursor-pointer ",
    thumbnail: "/bg/10.jpg",
    title: "For Providers",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 hover:cursor-pointer ",
    thumbnail: "/bg/18.jpg",
    title: "For Patients",
  },
];
