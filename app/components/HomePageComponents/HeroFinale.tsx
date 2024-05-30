import {  ChevronRight } from "lucide-react";
import React from "react";
import MagicButton from "./MagicButton";

const HeroFinale = () => {
  return (
    <>
    <div className="relative overflow-hidden before:absolute before:top-0 rounded-md before:start-1/2 before:bg-[url('/4.jpg')] dark:before:bg-[url('/4.jpg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* <!-- Announcement Banner --> */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
            href="#"
          >
            Labaratory Open- Get Demo
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
              <ChevronRight className="flex justify-center items-center bg-gray-200 rounded-md  dark:bg-neutral-700 dark:text-neutral-400 flex-shrink-0 size-4 group-hover:rotate-6 transition" />
            </span>
          </a>
        </div>
        {/* <!-- End Announcement Banner --> */}

        {/* <!-- Title --> */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-primary text-2xl md:text-3xl lg:text-4xl ">
            Here it is different <br/>
            <span className="bg-clip-text bg-gradient-to-tr from-orange-400 to-gray-100 text-transparent text-4xl md:text-5xl lg:text-6xl ">
            AMR can’t  beat us
            </span>
          </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-white ">
          What if we could have an advanced antimicrobial susceptibility and resistance test to detect and analyze resistance patterns? What if we could know if bacteria are resistant to specific medications immediately during diagnosis? With our cutting-edge technology, we can achieve this. By staying one step ahead, AMR can’t beat us. Our test ensures that healthcare providers can identify resistant strains on the spot, enabling timely and effective treatments. .
          </p>
        </div>

        {/* <!-- Buttons --> */}
        <div className="mt-8 gap-3 flex justify-center">
        <a href="#about-us">
            <MagicButton
              title="About Us"
              icon={<ChevronRight />}
              position="right"
            />
          </a>
          <button
            type="button"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            Lorem, ips dolor.
            <ChevronRight className="flex justify-center items-center bg-gray-200 rounded-md  dark:bg-neutral-700 dark:text-neutral-400 flex-shrink-0 size-4 group-hover:rotate-6 transition" />
          </button>
        </div>
        {/* <!-- End Buttons --> */}
      </div>
    </div>
   
    </>
  )
};

export default HeroFinale;

