"use client";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export type StatCardType = {
  number1: number;
  separator?: string;
  number2?: number;
  end?: string;
  desc: string;
};

export default function StatCard({
  number1,
  separator,
  number2,
  end,
  desc,
}: StatCardType) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center md:w-full">
      <h1 className="text-4xl font-bold lg:text-5xl text-orange-500 my-3 mb-0 text-center ">
        {number1 && (
          <span className="mx-1">
            <AnimatedNumbers
              includeComma
              className="text-center"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={number1}
            />
          </span>
        )}
        {separator && <span className="mx-1">{separator}</span>}
        {number2 && (
          <span className="mx-1">
            <AnimatedNumbers
              includeComma
              className="text-center"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={number2}
            />
          </span>
        )}
        {end && <span className="mx-1">{end}</span>}
      </h1>
      <p className="m-3 mt-0 text-white">{desc}</p>
    </div>
  );
}
