"use client";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Stats = ({ no }: { no: number }) => {
  return (
    <AnimatedNumbers
      includeComma
      className="text-center"
      transitions={(index) => ({
        type: "spring",
        duration: index + 0.3,
      })}
      animateToNumber={no}
    />
  );
};

export default Stats;
