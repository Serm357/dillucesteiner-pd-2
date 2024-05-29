"use client";
import AnimatedNumbers from "react-animated-numbers";

export default function Stats() {
  return (
    <section className="flex flex-col items-center justify-center px-2 py-3 lg:py-4 bg-primary-foreground dark:bg-slate-800 w-full">
      <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-extrabold">
        Why we exist?
      </h1>
      {/* <!-- Card Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card title="Cases" no={10000} perc={23} />
          <Card title="Equipments" no={500} perc={12} />
          <Card title="ghhf" no={999} perc={34} />
          <Card title="Cggs" no={10000} perc={23} />
          <Card title="lorem" no={2000} perc={56} />
          <Card title="ttt" no={6570} perc={23} />
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </section>
  );
}

function Card({
  title,
  no,
  perc,
}: {
  title: string;
  no: number;
  perc: number;
}) {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-opacity-50 dark:border-neutral-800">
      <div className="inline-flex justify-center items-center">
        <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
        <span className="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
          {title}
        </span>
      </div>

      <div className="text-center flex items-center justify-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 text-center dark:text-neutral-200">
          <AnimatedNumbers
            includeComma
            className="text-center"
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={no}
            // fontStyle={{
            //   fontSize: 40,
            //   color: "red",
            // }}
          />
        </h3>
      </div>

      <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-neutral-800">
        <dt className="pe-3">
          <span className="text-green-600">
            <svg
              className="inline-block size-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
              />
            </svg>
            <span className="inline-block text-sm">{perc}%</span>
          </span>
          <span className="block text-sm text-gray-500 dark:text-neutral-500">
            change
          </span>
        </dt>
        <dd className="text-start ps-3">
          <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            5
          </span>
          <span className="block text-sm text-gray-500 dark:text-neutral-500">
            past decade
          </span>
        </dd>
      </dl>
    </div>
  );
}
