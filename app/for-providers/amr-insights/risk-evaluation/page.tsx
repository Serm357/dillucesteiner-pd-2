import { CircleCheck } from "lucide-react";
import dynamic from "next/dynamic";

const BgCard = dynamic(() => import("@/app/components/BgCard"), {
  ssr: false,
});

const RiskEvaluation = () => {
  return (
    <div className="w-full">
      <BgCard
        images={[
          "/bg/pictures/110.jpg",
          "/bg/pictures/111.jpg",
          "/bg/pictures/112.jpg",
          "/bg/pictures/113.jpg",
          "/bg/pictures/114.jpg",
        ]}
        title="Ditekta Risk."
        subtitle="Expose resistance before it makes its move."
        desc="Exposing resistance before it makes its move is crucial because early detection allows healthcare providers to intervene promptly, preventing the spread of resistant infections. This proactive approach ensures effective treatment, reduces complications, and helps maintain the efficacy of existing antibiotics, ultimately safeguarding public health."
      />

      <div className="w-full">
        <FeatureCard />

        <div className="ml-2">
          {" "}
          <h1 className="my-9 mx-3 capitalize font-bold text-3xl md:text-4xl text-primary ">
            Good just
            <span className="text-white dark:text-orange-500 mx-1">
              {" "}
              isn’t{" "}
            </span>
            good enough.
          </h1>
        </div>

        <FeatureCard2 />
        <FeatureCard3 />
        <FeatureCard4 />
        <FeatureCard5 />
      </div>
    </div>
  );
};

export default RiskEvaluation;

function FeatureCard() {
  return (
    <div className="min-h-[37rem] w-full mt-3 mx-2 flex flex-col-reverse md:flex-row my-2">
      <div className="flex-1">
        <img
          src="/bg/pictures/115.jpg"
          className="w-full h-[37rem]  rounded-md"
          loading="lazy"
          // width={100}
          // height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-center py-3 px-8 justify-start">
        <h1 className="mt-9 capitalize font-bold text-3xl  md:text-4xl text-primary my-3">
          Know the
          <span className="text-white dark:text-orange-500 mx-1">Risk,</span>
          Protect the
          <span className="text-white dark:text-orange-500 mx-1"> Future.</span>
        </h1>
        <p className="prose md:prose-lg text-gray-200 my-4  leading-normal">
          Our algorithm identifies AMR risk by analyzing vast datasets to detect
          resistance patterns and predict future trends. By providing early,
          accurate insights, it enables timely interventions and informed
          treatment decisions, thereby preventing the spread of resistant
          infections and preserving the effectiveness of antibiotics. This
          proactive approach helps protect the future of global health by
          ensuring effective infection control and sustainable antimicrobial
          use.
        </p>
      </div>
    </div>
  );
}
function FeatureCard2() {
  return (
    <div className="min-h-[60vh] w-full  mx-2 flex flex-col md:flex-row mt-2 mb-0 bg-gray-200 dark:bg-secondary">
      <div className="flex-1 flex flex-col  gap-3 items-start py-1 px-8 justify-center">
        <h1 className="mt-5 capitalize font-bold text-xl md:text-2xl text-primary my-3">
          Our Ditekta will be more accurate compared to traditional models
        </h1>
        <p className="prose md:prose-lg text-gray-200 my-4  leading-normal">
          Traditional models of assessing AMR risk rely on manual laboratory
          tests and clinical observations, which can be time-consuming and
          subject to human error. These methods often involve culturing bacteria
          and testing their response to antibiotics, providing results that may
          take days. Additionally, traditional models may lack the ability to
          analyze large datasets or predict future trends, limiting their
          effectiveness in early detection and proactive intervention.
        </p>
      </div>

      <div className="flex-1 flex flex-col  gap-3 items-start py-3 px-8 justify-center">
        <h1 className="mt-5 capitalize font-bold text-xl md:text-2xl text-primary my-3">
          Ditekta Risk changes the game in risk assessment.
        </h1>
        <p className="prose md:prose-lg text-gray-200 my-4  leading-normal">
          Our Ditekta Risk technology revolutionizes AMR risk assessment by
          leveraging advanced AI and machine learning to analyze large datasets
          in real-time, offering rapid and precise detection of resistance
          patterns. This enables early intervention, accurate predictions of
          future trends, and informed treatment decisions, significantly
          enhancing the effectiveness of AMR management and prevention efforts.
        </p>
      </div>
    </div>
  );
}

const data2: {
  title: string;
  desc: string;
}[] = [
  {
    title: "Accuracy and Reliability",
    desc: " Our Profound Risk solution will provides precise and consistent risk assessments using validated methodologies and robust data analysis, crucial for making informed decisions.",
  },

  {
    title: "Real-time Monitoring ",
    desc: "It will offer real-time data analysis and immediate reporting of risk levels, enabling timely interventions and effective management of emerging threats.",
  },

  {
    title: "Predictive Analytics",
    desc: "a solution with advanced predictive analytics to anticipate future trends and potential risks, allowing proactive measures to mitigate the impact of antimicrobial resistance.",
  },
];

function FeatureCard3() {
  return (
    <div className="min-h-screen w-full mt-0 mx-2 bg-green-800 ">
      <div className="flex mx-2 flex-col  gap-3 items-start py-3 px-8 justify-center">
        <h1 className=" font-bold text-3xl md:text-4xl text-white my-6">
          What to look for in a
          <span className="text-dilucttl mx-1"> Risk Evaluation </span>
          solution.
        </h1>
      </div>
      <div className="grid m-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data2.map((card) => {
          return (
            <StatCard key={card.title} title={card.title} desc={card.desc} />
          );
        })}
      </div>
    </div>
  );
}

function StatCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center md:w-full">
      <h1 className="text-4xl font-bold lg:text-5xl  mt-5 lg:mt-14   text-center ">
        <CircleCheck
          color="white"
          size={100}
          className="bg-primary rounded-full"
        />
      </h1>
      <h1 className="text-lg font-bold lg:text-xl mt-5 lg:mt-14 text-dilucttl my-3 mb-0 text-center ">
        {title}
      </h1>
      <p className="m-3 mt-0 text-white text-center">{desc}</p>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="min-h-[37rem] w-full  mx-2 flex flex-col-reverse md:flex-row mb-2">
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/bg/pictures/116.jpg"
          className="w-full h-[37rem]"
          loading="lazy"
          // width={100}
          // height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-center mt-3 py-3 px-8 justify-start">
        <h1 className="mt-5 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          <span className="text-white dark:text-orange-500 mx-1">
            Diversity
          </span>
          and
          <span className="text-white dark:text-orange-500 mx-1">
            inclusivity
          </span>
          matters
        </h1>
        <h1 className="mt-5 capitalize self-start ml-3 font-bold text-xl md:text-2xl text-primary my-3">
          Commitment to Ensuring Screening Equality.
        </h1>
        <p className="prose md:prose-lg text-gray-200 my-4  leading-normal">
          Diversity matters within AI training and testing datasets. The
          ProFound Risk AMR Solution's deep learning dataset includes racial,
          ethnic, and geographic diversity within its AI research and training.
          This diversity not only increases our unique algorithm's
          generalizability but also ensures clinical effectiveness across varied
          populations and environments. By encompassing a wide range of genetic
          backgrounds and healthcare practices, our technology provides accurate
          and equitable AMR risk assessments, leading to better-informed
          treatment decisions and improved health outcomes for all communities.
        </p>
        <h1 className="mt-5 capitalize font-bold self-start ml-3 text-xl md:text-2xl text-primary my-3">
          Did you know?
        </h1>

        <div className="prose md:prose-lg text-start text-gray-200 my-2">
          <ul className="flex flex-col gap-2 marker:text-primary">
            <li>
              Genetic differences among populations can influence the
              susceptibility to specific infections and the effectiveness of
              certain antibiotics.
            </li>
            <li>
              Socioeconomic conditions and environmental factors, such as access
              to clean water, sanitation, and healthcare, significantly affect
              AMR patterns. In low-income regions with limited healthcare
              infrastructure, the overuse and misuse of antibiotics are more
              common, leading to higher rates of resistance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FeatureCard5() {
  return (
    <div className="min-h-[95vh] w-full  mx-2 flex flex-col md:flex-row mb-3">
      <div className="flex-1 flex flex-col  gap-3 items-center mt-3 py-3 px-8 justify-start">
        <h1 className="mt-5 capitalize self-start ml-3 font-bold text-xl md:text-2xl text-primary my-3">
          Clinical study tells the story
        </h1>
        <p className="prose md:prose-lg text-gray-200 my-4  leading-normal">
          Using a US nationwide survey, disparities in antimicrobial drug
          acquisition by race/ethnicity for 2014–2015 was measured. White
          persons reported twice as many antimicrobial drug prescription fills
          per capita as persons of other race/ethnicities. Characterizing
          antimicrobial drug use by demographic might improve antimicrobial drug
          stewardship and help address antimicrobial drug resistance.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/bg/pictures/117.jpg"
          className="w-full h-[32rem] "
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
    </div>
  );
}
