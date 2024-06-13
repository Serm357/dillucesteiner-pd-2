import dynamic from "next/dynamic";

const BgCard = dynamic(() => import("@/app/components/BgCard"), {
  ssr: false,
});

const Detection = () => {
  return (
    <div>
      <BgCard
        images={["/1.png", "/2.jpg", "/3.jpg"]}
        title="Resistance suite site."
        subtitle=" Resistance finally met its match."
        desc="Our AI-powered technology revolutionizes the fight against AMR by
          precisely analyzing resistance patterns, enabling early detection of
          resistant strains. 
          It provides tailored treatment plans based on comprehensive analysis,
          ensuring precise, effective, and timely interventions to combat
          antimicrobial resistance."
        btnText="See it in Action →"
      />
      <div className="ml-2 my-3">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          A screening{" "}
          <span className="text-black dark:text-orange-500">revolution</span>{" "}
          has arrived. The difference is
          <span className="text-black dark:text-orange-500"> Ditekta.</span>
        </h1>
        <p className="prose max-w-none md:prose-lg lg:prose-xl my- dark:text-gray-200">
          Diluc Steiner's AI model, is built using advanced machine learning
          algorithms and vast datasets of genetic, clinical, and environmental
          information. It swiftly and accurately detects antimicrobial
          resistance patterns, enabling early intervention and personalized
          treatment plans to combat AMR effectively and improve patient
          outcomes.
        </p>
      </div>

      <div>
        <FeatureCard />
        <FeatureCard2 />
      </div>
    </div>
  );
};

export default Detection;

function FeatureCard() {
  return (
    <div className="min-h-[32rem] w-full mt-3 mx-2 flex flex-col md:flex-row my-2">
      <div className="flex-1 flex flex-col  gap-3 items-start py-3 px-8 justify-center">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          <span className="text-black dark:text-orange-500">Detector AI®</span>{" "}
          for Digital Resistance detection
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Detector AI® stands at the forefront of digital resistance detection,
          offering unmatched efficiency. By harnessing advanced algorithms, it
          swiftly processes vast datasets to identify resistance patterns
          accurately. This efficiency enables timely interventions and
          personalized treatment strategies, optimizing patient care and
          effectively combating antimicrobial resistance.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/6.jpg"
          className="size-full rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="min-h-[32rem] w-full mt-3 mx-2 flex flex-col-reverse md:flex-row my-2">
      <div className="flex-1">
        <img
          src="/6.jpg"
          className="size-full rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-start py-3 px-8 justify-center">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          Why early detection
          <span className="text-black dark:text-orange-500"> matters.</span>
        </h1>
        <div className="prose md:prose-lg dark:text-gray-200 my-2">
          <ul className="flex flex-col gap-2">
            <li>Timely intervention prevents AMR spread.</li>
            <li>Improves patient outcomes.</li>
            <li>Preserves antibiotic effectiveness</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
