import { CircleCheck } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const BgCard = dynamic(() => import("@/app/components/BgCard"), {
  ssr: false,
});

const BreastHealth = () => {
  return (
    <div>
      <BgCard />
      <div className="ml-2 my-3">
        <h1 className="uppercase font-semibold text-xl text-gray-400 my-3">
          PROFOUND AMR HEALTH SUITE
        </h1>
        <h1 className="capitalize font-bold text-4xl md:text-5xl text-primary my-3 ">
          Together, we can <span className="text-yellow-300">save</span> more{" "}
          <span className="text-yellow-300">lives</span>.
        </h1>
        <p className="prose max-w-none md:prose-lg lg:prose-xl my- dark:text-gray-200">
          Our AI technology saves lives by quickly identifying resistant strains
          and providing tailored treatment plans. Early detection and precise
          interventions prevent severe infections and complications, improving
          patient outcomes and combating the global threat of antimicrobial
          resistance.
        </p>
      </div>
      {/* //icons */}
      <div className="flex gap-4 md:gap-6 lg:gap-8  justify-around items-center my-5 py-5">
        <div className="flex flex-col gap-2 items-center justify-center">
          <CircleCheck
            color="white"
            size={100}
            className="bg-primary rounded-full"
          />
          <h1 className="text-2xl lg:text-3xl font-semibold uppercase">
            Faster
          </h1>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <CircleCheck
            color="white"
            size={100}
            className="bg-primary rounded-full"
          />{" "}
          <h1 className="text-2xl lg:text-3xl font-semibold uppercase">
            Accurate
          </h1>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <CircleCheck
            color="white"
            size={100}
            className="bg-primary rounded-full"
          />{" "}
          <h1 className="text-2xl lg:text-3xl font-semibold uppercase">
            Data Driven
          </h1>
        </div>
      </div>
      {/* features  */}
      <div className="mt-11 flex flex-col items-center justify-center gap-2 ">
        <FeatureCard />
        <FeatureCard2 />
        <FeatureCard3 />
        <Quote />
      </div>
    </div>
  );
};

export default BreastHealth;

function FeatureCard() {
  return (
    <div className="min-h-[32rem] w-full mx-2 flex flex-col-reverse md:flex-row my-2">
      <div className="flex-1 flex flex-col gap-3 items-start py3 px-5 justify-center">
        <h1
          className="font-semibold my-2 text-3xl text-primary
      "
        >
          Detection
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Our AI technology works by rapidly analyzing patient samples to detect
          resistance patterns. It integrates genetic, clinical, and
          environmental data to identify resistant strains early. This
          comprehensive analysis ensures precise detection, allowing for timely
          and effective treatment interventions to combat antimicrobial
          resistance.
        </p>
        <Link
          href="/for-providers/detection"
          className="capitalize py-2 px-3 font-bold my-2 bg-primary text-xl text-white rounded-md"
        >
          Learn how
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src="/1.png"
          className="size-full rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="image description"
        />
      </div>
    </div>
  );
}
function FeatureCard2() {
  return (
    <div className="min-h-[32rem] w-full mx-2 flex flex-col md:flex-row my-2">
      <div className="flex-1">
        <Image
          src="/1.png"
          className="size-full rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="image description"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 items-start py3 px-5 justify-center">
        <h1
          className="font-semibold my-2 text-3xl text-primary
      "
        >
          Density
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Our technology measures the density of resistance by analyzing the
          number of drugs a pathogen resists and determining the resistance
          level—whether partial or full. This detailed quantification enables
          healthcare providers to develop targeted and effective treatment
          plans, ensuring optimal patient outcomes.
        </p>
        <Link
          href="/for-providers/density"
          className="capitalize py-2 px-3 font-bold my-2 bg-primary text-xl text-white rounded-md"
        >
          Learn how
        </Link>
      </div>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="min-h-[32rem] w-full mx-2 flex flex-col md:flex-row my-2">
      <div className="flex-1 flex flex-col gap-3 items-start py3 px-5 justify-center">
        <h1
          className="font-semibold my-2 text-3xl text-primary
      "
        >
          Risk
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Our risk assessment solutions are highly accurate, utilizing advanced
          AI algorithms to analyze comprehensive datasets, including genetic,
          clinical, and environmental factors. This precision enables us to
          predict future resistance patterns, allowing healthcare providers to
          take proactive measures. By identifying potential resistance trends
          early, our technology supports timely interventions, preventing the
          spread of resistant infections and ensuring more effective treatment
          strategies.
        </p>
        <Link
          href="/for-providers/risk"
          className="capitalize py-2 px-3 font-bold my-2 bg-primary text-xl text-white rounded-md"
        >
          Learn how
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src="/1.png"
          className="size-full rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="image description"
        />
      </div>
    </div>
  );
}
function Quote() {
  return (
    <div className="min-h-[12rem] py-5 bg-[url('/2.jpg')] bg-no-repeat bg-cover my-3 w-full mx-2 flex flex-col items-center justify-centergap-3">
      <h1 className="prose md:prose-lg text-center text-2xl lg:text-3xl text-white/90 font-bold  ">
        "If we fail to act, we are looking at an almost unthinkable scenario
        where antibiotics no longer work and we are cast back into the dark ages
        of medicine"
      </h1>
      <h2 className="text-white text-lg md:text-2xl">David Cameron</h2>
      <h3 className="text-white/90 text-sm md:text-lg">
        former UK Prime Minister.
      </h3>
    </div>
  );
}
