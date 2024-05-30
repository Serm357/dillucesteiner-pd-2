import {  ChevronRight } from "lucide-react";
import React from "react";
import MagicButton from "./MagicButton";

const HeroFinale = () => {
  return (
    <>

    <div className="relative overflow-hidden  md:min-h-[75  before:absolute before:top-0 rounded-md before:start-1/2 before:bg-[url('/gifbg.gif')]  before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 flex flex-col items-center justify-center">
        

        {/* <!-- Title --> */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-white text-2xl md:text-3xl lg:text-4xl ">
            Here it is different <br/>
            <span className="bg-clip-text bg-gradient-to-tr from-green-100 to-green-600 text-transparent text-4xl md:text-5xl lg:text-6xl ">
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
        <a href="#about-us">
            <MagicButton
              title="Lorem ips"
              icon={<ChevronRight />}
              position="right"
            />
          </a>
         
        </div>
        {/* <!-- End Buttons --> */}
      </div>
    </div>
   
    </>
  )
};

export default HeroFinale;

