import dynamic from "next/dynamic";
import StatCard, { StatCardType } from "./StatsCard";

const BgCard = dynamic(() => import("@/app/components/BgCard"), {
  ssr: false,
});

const RiskAssesment = () => {
  return (
    <div>
      <BgCard
        images={["/1.png", "/2.jpg", "/3.jpg"]}
        title="Risk Assessment."
        subtitle="Reveal resistance hiding place."
        desc="Risk assessment is vital as it provides objective and consistent evaluations of resistance
          patterns, seamlessly integrating into existing workflows. This precision enables personalized
          care plans, ensuring effective treatment. Risk assessment empowers clinics to implement
          proactive interventions, curbing the spread of AMR and improving patient outcomes.
."
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

      <div className="">
        <FeatureCard />
        <FeatureCard2 />
        <FeatureCard3 />
        <FeatureCard4 />
      </div>
    </div>
  );
};

export default RiskAssesment;

function FeatureCard() {
  return (
    <div className="min-h-[32rem] max-w-[85rem] mt-3 mx-2 flex flex-col md:flex-row my-2">
      <div className="flex-1 flex flex-col  gap-3 items-start py3 px-5 justify-center">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          <span className="text-black dark:text-orange-500">Detekta®</span> Risk
          Assessment
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Our Risk Assessment solution streamlines and standardizes AMR density
          reporting by providing accurate and reliable results. By leveraging
          advanced algorithms, it simplifies the complex process of analyzing
          resistance patterns, ensuring consistency across reporting. This
          standardized approach enhances reliability and enables healthcare
          providers to stratify AMR density effectively, guiding precise
          treatment decisions and improving patient outcomes.
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

const data: StatCardType[] = [
  {
    number1: 2800000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil, quas enim iste, nisi culpa, blanditiis soluta iusto nostrum quidem ipsa voluptate quod temporibus at sequi sint molestias. Esse, ad.",
  },
  {
    number1: 2800000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil, quas enim iste, nisi culpa, blanditiis soluta iusto nostrum quidem ipsa voluptate quod temporibus at sequi sint molestias. Esse, ad.",
  },
  {
    number1: 2800000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil, quas enim iste, nisi culpa, blanditiis soluta iusto nostrum quidem ipsa voluptate quod temporibus at sequi sint molestias. Esse, ad.",
  },
  {
    number1: 2800000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil, quas enim iste, nisi culpa, blanditiis soluta iusto nostrum quidem ipsa voluptate quod temporibus at sequi sint molestias. Esse, ad.",
  },
];

function FeatureCard2() {
  return (
    <div className="min-h-[90vh]  mt-3 mx-3 bg-blue-900 rounded-md">
      <div className="flex mx-2 flex-col  gap-3 items-start py3 px-5 justify-center">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-white my-3">
          Why Risk assessment
          <span className="text-orange-500"> matters.</span>
        </h1>
        <p className="m-2 text-white">
          Risk assessment is crucial in combating antimicrobial resistance (AMR)
          as it allows for proactive measures to mitigate its impact
        </p>
      </div>
      <div className="grid m-2 grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((card) => {
          return (
            <StatCard
              key={card.number1}
              number1={card.number1}
              desc={card.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="min-h-[32rem] max-w-[85rem] mt-3 mx-2 flex flex-col md:flex-row my-2">
      <div className="flex-1 flex flex-col  gap-3 items-start py3 px-5 justify-center">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          Remove the
          <span className="text-black dark:text-orange-500">
            {" "}
            challenges
          </span>{" "}
          of subjectivity.
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Our technology transforms antimicrobial susceptibility testing (AST)
          by introducing objective, data-driven analysis, thus overcoming the
          subjectivity inherent in traditional methods. With standardized
          interpretation, results remain consistent across tests, ensuring
          reliability in diagnosis and treatment.
        </p>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Data-driven analysis employs extensive datasets to precisely identify
          resistance patterns, enhancing the accuracy of AST results. Machine
          learning algorithms, continuously refining their capabilities, promise
          even greater precision over time.
        </p>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Transparent methodology and consistent reporting uphold the integrity
          of our AST process, minimizing bias and fostering trust in treatment
          decisions and patient outcomes.
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

function FeatureCard4() {
  return (
    <div className="min-h-[32rem] max-w-[85rem] mt-3 mx-2 flex flex-col-reverse  md:flex-row my-2">
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
      <div className="flex-1 flex flex-col  gap-3 items-start py3 px-5 justify-center">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          Stay
          <span className="text-black dark:text-orange-500">
            {" "}
            informed{" "}
          </span>{" "}
          about AMR Risk
        </h1>
        <h1 className="my-3 font-bold text-xl md:text-2xl text-primary ">
          The Risk is Real. The Help is Here.
        </h1>
        <p className="prose md:prose-lg dark:text-gray-200 my-2">
          Stay informed about AMR risk to protect yourself and your community.
          Understand the latest trends, prevention strategies, and treatment
          options. Together, we can combat antimicrobial resistance and
          safeguard global health.
        </p>
      </div>
    </div>
  );
}
