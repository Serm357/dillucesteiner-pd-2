import ButtonBackgroundShine from "@/app/components/BagroundShine";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className=" ">
      <div
        className="overflow-hidden h-[29rem] relative w-full flex items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <img
          src="/bg/12.jpg"
          className="image h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 top-32 lg:top-44 ">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="font-bold capitalize text-5xl md:text-6xl text-[#0099cc] shadow-md shadow-blue-300 shadow-b  py-4 px-4  backdrop-blur-sm border  border-emerald-500/20  mx-auto text-center rounded-full relative mt-4 text-clip inline-flex   items-center justify-center ngaringari">
              Service & Support
            </h1>
            {/* <h2 className="mx-2 text-2xl lg:text-4xl text-center text-blue-950 mt-8 font-bold ">
              Your partner to ensure community is free from AMR
            </h2> */}
          </div>
        </div>
      </div>
      {/* <CardAnimatedBorderGradient /> */}
      <div className="mx-4">
        <h2 className="mx-2 text-2xl lg:text-4xl   text-primary mt-8 font-bold ">
          Your partner to ensure community is free from AMR
        </h2>
        <p className="prose md:prose-lg lg:prose-xl max-w-none lg:mx-8 mt-8 dark:text-gray-200">
          At Diluc Steiner, we are passionate about our mission to create a
          world where AMR is not a threat. Leveraging the power of innovative
          artificial intelligence (AI) solutions, we empower providers and
          professionals to accurately, reliably, and quickly detect AMR,
          improving patient outcomes. Our commitment is to optimize every
          individual's opportunity to live better, longer lives.
        </p>
        <h1 className="mt-8 py-4 mx-2 capitalize font-bold text-3xl md:text-4xl text-primary mb-8">
          Together,{" "}
          <span className="text-black dark:text-orange-500">
            we can create a world where
          </span>{" "}
          AMR can’t hide.
        </h1>
        <p className="prose md:prose-lg lg:prose-xl max-w-none lg:mx-8 mt-8 dark:text-gray-200">
          At Diluc Steiner, customer response is invaluable in our mission to
          combat antimicrobial resistance (AMR). Your feedback helps us refine
          our AI solutions, ensuring they meet the real-world needs of
          healthcare providers. By working together, we can improve detection
          accuracy, optimize treatment plans, and ultimately create a world
          where AMR is no longer a threat. Your insights drive our innovations
          and enhance our commitment to delivering the best possible outcomes
          for patients globally
        </p>
        <h1 className="mt-8 py-4 mx-3 capitalize font-bold text-center text-3xl md:text-4xl text-primary mb-8">
          Questions? Problems?{" "}
          <span className="text-black dark:text-orange-500">Let’s talk.</span>{" "}
        </h1>
        <div className="prose md:prose-lg lg:prose-xl max-w-none lg:mx-8 mt-8 dark:text-gray-200 text-center dark:prose-h4:text-primary">
          <ul className="flex flex-col gap-0 marker:text-primary list-none">
            <li>
              <h4 className="font-bold">Phone</h4>
              Phone : +255 775 686 359
            </li>
            <li>
              <h4 className="font-bold">Email</h4>

              <Link
                className="hover:scale-105 gap-x-2 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 flex items-center justify-center"
                href="mailto:info@dilucsteiner.com"
              >
                <Mail /> info@dilucsteiner.com
              </Link>
            </li>
            <li>
              <h4 className="font-bold">Hours</h4>
              <h5 className="dark:text-gray-200 font-bold">
                Customer support:
              </h5>
              Saturday : 16 - 22 pm GMT + 3, <br />
              Sunday : 10am-18pm GMT+3.
            </li>
          </ul>
        </div>
        <h1 className="mt-8 py-4 mx-2   font-bold text-3xl md:text-4xl text-primary mb-8">
          Expert help is just a{" "}
          <span className="text-black dark:text-orange-500">call</span> or{" "}
          <span className="text-black dark:text-orange-500">email</span> away.
        </h1>
        <p className="prose md:prose-lg lg:prose-xl max-w-none lg:mx-8 mt-8 dark:text-gray-200">
          At Diluc Steiner, our dedicated team of experts is always ready to
          assist you. Whether you have questions about our innovative AI
          solutions or need support with antimicrobial resistance detection,
          we're just a call or email away. Our knowledgeable professionals are
          committed to providing prompt, reliable assistance to ensure you can
          effectively utilize our technology and improve patient outcomes. Reach
          out to us anytime – we’re here to help you combat AMR and make a
          difference in healthcare.
        </p>
        <h2 className="mx-2 text-2xl lg:text-4xl   text-primary my-8 font-bold ">
          What Do You Get :-
        </h2>
        <div className="prose md:prose-lg prose-h4:my-1 lg:prose-xl max-w-none lg:mx-8 mt-8 dark:text-gray-200 dark:prose-h4:text-primary">
          <ul className="flex flex-col gap-1 marker:text-primary">
            <li>
              <h4 className="font-bold">
                Rapid Response and Problem Resolution :
              </h4>
              Save time and money with our prompt support and effective
              solutions from our dedicated team.
            </li>
            <li>
              <h4 className="font-bold">Remote Diagnostic Connection :</h4>
              Efficiently troubleshoot issues with our advanced remote
              diagnostics and expert guidance.
            </li>
            <li>
              <h4 className="font-bold">Maximize Clinical Efficiency :</h4>
              Enhance your clinical operations through expert consultation and
              personalized support.
            </li>
            <li>
              <h4 className="font-bold">Best Practice Implementations :</h4>
              Ensure workflow efficiency with our adherence to industry best
              practices and innovative approaches.
            </li>
          </ul>
        </div>
        <p className="prose md:prose-lg lg:prose-xl max-w-none lg:mx-8 mt-8 dark:text-gray-200">
          At Diluc Steiner, our support team is committed to providing
          exceptional assistance to help you combat antimicrobial resistance
          effectively
        </p>
        <h1 className="mt-8 py-4 mx-2   font-bold text-3xl md:text-4xl text-primary text-center mb-8">
          Real world.{" "}
          <span className="text-black dark:text-orange-500">Real results</span>
        </h1>
      </div>
    </section>
  );
};

export default Page;

function CardAnimatedBorderGradient() {
  return (
    <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-card-foreground  px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl" />
    </div>
  );
}

//  <p className="text-4xl uppercase text-clip inline-flex  animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#22204e,45%,#b7e8ea,55%,#22204e)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors ">
//    djkddll fde
//  </p>;
