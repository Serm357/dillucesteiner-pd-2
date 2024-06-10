"use client";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function Stats() {
  return (
    <section className="flex flex-col items-center mt-12 justify-center px-2 py-3 lg:py-4 light:bg-primary-foreground dark:transparent w-full">
      <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-extrabold">
        Why we exist?
      </h1>
      {/* <!-- Card Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card
            title="Sepsis"
            no={13660000}
            desc={
              "millionpeople who died globally had sepsis as an immediate cause of death or in the chain of events leading to their death (intermediate cause)."
            }
            year="2019"
          />
          <Card
            title="Drug Resistant Infection"
            no={4950000}
            desc={
              "millionpeople who died from drug-resistant infections, such as lower respiratory, bloodstream, and intra-abdominal infections"
            }
            year="2019"
          />
          <Card
            title="Direct Cause"
            no={1270000}
            desc={"milliondeaths in 2019 were directly caused by AMR"}
            year="2019"
          />
          <Card2 />
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </section>
  );
}

function Card({
  title,
  no,
  desc,
  year,
}: {
  title: string;
  no: number;
  desc: string;
  year: string;
}) {
  return (
    <div className="">
      <div className=" w-full h-[300px] relative max-w-xs">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-md  shadow-primary bg-primary-foreground  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl text-blue-900 dark:text-blue-300 mb-4 relative z-50">
              <AnimatedNumbers
                includeComma
                className="text-center"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={no}
              />
            </h1>
            <h1 className="font-bold text-sm text-primary mb-1 relative z-50 uppercase">
              {title}
            </h1>

            <p className="h-16  font-normal text-sm text-slate-500 dark:text-white text-center mb-3 relative z-50 capitalize">
              {desc}
            </p>
            <h1 className="font-bold text-xl mt-8 mb-4">{year}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="">
      <div className=" w-full h-[300px] relative max-w-xs">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-md shadow-primary bg-primary-foreground  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold flex items-center justify-center text-2xl text-blue-900 dark:text-blue-300 mb-4 relative z-50">
              <AnimatedNumbers
                includeComma
                className="text-center"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={1}
              />{" "}
              <span className="text-sm mx-1 ">in</span>{" "}
              <AnimatedNumbers
                includeComma
                className="text-center"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={5}
              />{" "}
              <br /> <span className="text-sm  ml-1">People</span>
            </h1>
            <h1 className="font-bold text-sm text-primary mb-1 relative z-50 uppercase">
              AMR
            </h1>
            <p className="h-24 font-normal text-sm text-slate-500 dark:text-white text-center mb-3 relative z-50 capitalize">
              died from AMR was a child under 5 years old, often from previously
              treatable infections.
            </p>
            {/* <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {year}
        </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}
