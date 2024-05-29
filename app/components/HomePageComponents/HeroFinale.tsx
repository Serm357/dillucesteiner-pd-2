import { ChevronLeft } from "lucide-react";
import React from "react";

const HeroFinale = () => {
  return (
    // <!-- Hero -->
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/6.jpg')] dark:before:bg-[url('/1.png')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* <!-- Announcement Banner --> */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
            href="#"
          >
            Labaratory Open- Get Demo
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
              <ChevronLeft />
            </span>
          </a>
        </div>
        {/* <!-- End Announcement Banner --> */}

        {/* <!-- Title --> */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-primary text-4xl md:text-5xl lg:text-6xl ">
            Creating World where
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Cancer can't Hide
            </span>
          </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            harum tempore? Praesentium saepe laudantium magni. Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>

        {/* <!-- Buttons --> */}
        <div className="mt-8 gap-3 flex justify-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Contact Us
            <ChevronLeft />
          </a>
          <button
            type="button"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            $ npm i preline
            <ChevronLeft className="flex justify-center items-center bg-gray-200 rounded-md  dark:bg-neutral-700 dark:text-neutral-400 flex-shrink-0 size-4 group-hover:rotate-6 transition" />
          </button>
        </div>
        {/* <!-- End Buttons --> */}
      </div>
    </div>
    // <!-- End Hero -->
  );
};

export default HeroFinale;
