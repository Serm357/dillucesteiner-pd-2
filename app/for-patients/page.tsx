import dynamic from "next/dynamic";
import Stats from "./Stats";

const BgCard = dynamic(() => import("@/app/components/BgCard"), {
  ssr: false,
});

const PatientsPage = () => {
  return (
    <div>
      <BgCard
        images={[
          "/bg/pictures/130.jpg",
          "/bg/pictures/131.jpg",
          "/bg/pictures/132.jpg",
          "/bg/pictures/133.jpg",
          "/bg/pictures/134.jpg",
          "/bg/pictures/135.jpg",
          "/bg/pictures/136.jpg",
          "/bg/pictures/137.jpg",
        ]}
        title="For Patients."
        subtitle="All strain can be detected."
        subtitle2="Don’t let AMR win - Understand your role."
        desc="By using our technology, patients can provide real-time data through regular health
monitoring and reporting symptoms early. When patients use at-home diagnostic kits
linked to our AI system, they can collect samples (like swabs or blood) and input
symptoms into a user-friendly app. Our AI then analyzes these samples and
symptoms for any signs of resistance.
"
      />
      <div className="mt-16">
        <FeatureCard101 />
      </div>

      <div className="ml-2 my-36">
        <h1 className="mt-14 capitalize font-bold text-3xl lg:text-4xl mx-2 text-center text-primary mb-8">
          AI are{" "}
          <span className="text-white dark:text-orange-500 mx-1">
            unique, safe
          </span>{" "}
          and
          <span className="text-white dark:text-orange-500"> faster.</span>
        </h1>
        <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 text-gray-200 text-center mx-2">
          Discover the unique, safe, and rapid AI technology at Ditekta . Our
          innovative solutions ensure faster and more accurate detection,
          providing patients with timely and effective treatment options.
        </p>
      </div>

      <div>
        <FeatureCard2 />
        <FeatureCard3 />
        <FeatureCard4 />
        <FeatureCard5 />
      </div>
    </div>
  );
};

export default PatientsPage;

function FeatureCard101() {
  return (
    <div className="min-h-screen w-full mt-3 mx-2 flex flex-col-reverse lg:flex-row my-2">
      <div className="flex-1">
        <img
          src="/bg/pictures/140.jpg"
          className="size-full rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-center py-3 px-8 justify-start">
        <h1 className="my-5 capitalize font-bold text-3xl lg:text-4xl text-primary ">
          Early detection is
          <span className="text-white dark:text-orange-500"> critical!</span>
        </h1>
        <h1 className="mt-5 text-center capitalize font-bold text-3xl lg:text-4xl text-primary my-3">
          <Stats no={5000000} />
        </h1>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          Over a million people are now dying each year due to infections such
          as lower respiratory, bloodstream, and intra-abdominal infections
          because bacteria have become resistant to treatment.
          <br /> 5,000,000 Death are people who suffered from AMR related
          illness.
        </p>
        <h1 className="mt-4 self-start capitalize font-bold text-xl lg:text-2xl text-primary my-3">
          With AI, even earlier detection is possible!
        </h1>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          Our advanced AI technology promises a breakthroughs in the fight
          against antimicrobial resistance (AMR). By analyzing resistance
          patterns, our AI can detect drug-resistant infections much earlier
          than traditional methods. This early detection enables healthcare
          providers to identify resistant strains immediately during diagnosis,
          ensuring that effective treatments are administered promptly.
        </p>
      </div>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div
      id="#ai-system"
      className="min-h-[32rem] w-full mt-3 mx-2 flex flex-col-reverse lg:flex-row my-2"
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/bg/pictures/142.jpg"
          className="w-full h-[32rem] rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-center py-3 px-8 justify-start">
        <h1 className="mt-4 self-start capitalize font-bold text-xl lg:text-2xl text-primary my-3">
          Why It Is Important to Monitor Your Resistance Pattern
        </h1>

        <p className="prose lg:prose-lg text-gray-200 my-2">
          Understanding and monitoring your antimicrobial resistance (AMR)
          pattern is crucial for ensuring effective treatment and safeguarding
          your health. Personalized treatment becomes possible when doctors are
          aware of your specific resistance pattern, increasing the likelihood
          of a successful recovery and reducing the risk of complications.
        </p>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          Early detection of resistant infections allows for timely
          intervention, preventing the spread of resistant bacteria and avoiding
          severe health issues that can arise from ineffective treatments.
          Monitoring resistance patterns also plays a vital role in protecting
          public health by reducing the overall burden of AMR in the community,
          thus maintaining the effectiveness of antibiotics for everyone. By
          being informed about your resistance pattern, you can make proactive
          healthcare decisions and work closely with your healthcare providers
          to manage your health effectively
        </p>
      </div>
    </div>
  );
}
function FeatureCard3() {
  return (
    <div
      id="#ai-system"
      className="min-h-[32rem] w-full mt-3 mx-2 flex flex-col-reverse lg:flex-row-reverse my-2"
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/bg/pictures/0101.gif"
          className="w-full h-[29rem] rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-center py-3 px-8 justify-start">
        <h1 className="mt-4 self-start capitalize font-bold text-xl lg:text-2xl text-primary my-3">
          How Our AI Will Help in Reducing and Combating AMR
        </h1>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          Antimicrobial resistance (AMR) is a growing threat, but our advanced
          AI technology offers a powerful solution. Our AI technology rapidly
          analyses patient samples to identify resistance patterns within hours,
          significantly faster than traditional methods. This rapid detection
          enables timely and accurate treatment decisions.
        </p>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          By providing detailed insights into the specific resistance mechanisms
          of pathogens, our AI guides doctors in selecting the most effective
          antibiotics, minimising the use of broad-spectrum drugs and reducing
          the development of resistance.
        </p>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          Additionally, our AI continuously learns from vast amounts of data,
          improving its accuracy and predictive capabilities, helping healthcare
          providers stay ahead of emerging resistance trends and implement
          targeted interventions. Furthermore, our technology supports ongoing
          surveillance of AMR, tracking resistance patterns across populations
          and regions, providing vital information for public health initiatives
          and global efforts to combat AMR. By leveraging the power of AI, we
          can reduce the impact of AMR, improve patient outcomes, and protect
          the future of antibiotics.
        </p>
      </div>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div
      id="#ai-system"
      className="min-h-[32rem] w-full mt-3 mx-2 flex flex-col-reverse lg:flex-row my-2"
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/bg/pictures/143.jpg"
          className="w-full h-[32rem] rounded-md"
          loading="lazy"
          width={100}
          height={100}
          alt="img description"
        />
      </div>
      <div className="flex-1 flex flex-col  gap-3 items-center py-3 px-8 justify-start">
        <h1 className="mt-4 self-start capitalize font-bold text-xl lg:text-2xl text-primary my-3">
          Why It Is Important to Adhere to Doctors' and Pharmacists'
          Instructions on Handling Antibiotics
        </h1>

        <p className="prose lg:prose-lg text-gray-200 my-2">
          Adhering to doctors' and pharmacists' instructions on handling
          antibiotics is essential for combating antimicrobial resistance (AMR)
          and ensuring effective treatment. Proper use of antibiotics as
          prescribed helps to ensure that the entire course of the medication is
          taken, which is crucial for fully eradicating the infection and
          preventing the development of resistant bacteria.
        </p>
        <p className="prose lg:prose-lg text-gray-200 my-2">
          Misuse or overuse of antibiotics can lead to the survival of resistant
          bacteria, which can then multiply and spread, making infections harder
          to treat in the future. By following healthcare professionals'
          guidelines, you help maintain the effectiveness of existing
          antibiotics, reduce the spread of resistance, and contribute to global
          efforts in preserving these vital medications for future generations.
          Compliance with these instructions not only protects your health but
          also supports the broader fight against AMR.
        </p>
      </div>
    </div>
  );
}
function FeatureCard5() {
  return (
    <div className="min-h-screen bg-green-900 text-white w-full mt-3 mx-0 flex flex-col items-center justify-start my-2">
      <h2 className="uppercase text-sm lg:text-lg font-bold my-2">
        THE DIFFERENCE IS PROFOUND.
      </h2>
      <h1 className="capitalize text-center text-2xl lg:text-5xl font-bold mx-1 my-4">
        Artificial intelligence is changing health care.
      </h1>
      <p className="prose text-white text-center">
        AI-driven predictive modelling helps anticipate emerging resistance
        trends, enabling proactive measures and better resource allocation.
      </p>
      <div className="mt-5">
        <div className="flex flex-col gap-3">
          {/* first */}
          <div className="1 flex flex-col lg:flex-row mx-5">
            <div className="flex-1 p-3 px-5">
              <h1 className="capitalize  text-lg lg:text-xl font-bold my-4">
                Find resistance earlier, even when normal screenings would miss
                the signs.
              </h1>
              <p className="prose text-white ">
                Our AI technology detects antimicrobial resistance patterns
                swiftly and accurately, even before conventional screenings can.
                By identifying resistance early, we enable timely, targeted
                interventions, ensuring effective treatment and preventing the
                spread
              </p>
            </div>
            <div className="flex-1 bg-dilucttl rounded-md py-3 px-4">
              <h1 className="capitalize  text-lg lg:text-xl font-bold mx-1 my-4">
                The result:
              </h1>
              <p className="prose text-white ">
                Our AI technology reduces patient stress and waiting time by
                quickly analysing samples and providing resistance results
                within hours instead of days. This rapid turnaround allows for
                immediate, accurate treatment decisions, minimising uncertainty
                and ensuring prompt care, thereby enhancing patient experience
                and outcomes.
              </p>
            </div>
          </div>
          {/* second */}
          <div className="1 flex flex-col lg:flex-row mx-5 my-5">
            <div className="flex-1 p-3 px-5">
              <h1 className="capitalize  text-lg lg:text-xl font-bold my-4">
                Know Your Personalized Risk Assessment Results.
              </h1>
              <p className="prose text-white ">
                Our AI technology provides personalized risk assessment results
                by analyzing your unique health data and resistance patterns.
                This tailored approach ensures accurate, individualized insights
                into your antimicrobial resistance risk, enabling your
                healthcare provider to make precise treatment decisions and
                optimize your care plan effectively.
              </p>
            </div>
            <div className="flex-1 bg-dilucttl rounded-md py-3 px-4">
              <h1 className="capitalize  text-lg lg:text-xl font-bold mx-1 my-4">
                The result:
              </h1>
              <p className="prose text-white ">
                Our technology leverages advanced AI and machine learning
                algorithms to analyze extensive datasets, including genetic,
                clinical, and environmental factors. By integrating this
                comprehensive data, ProFound can identify subtle resistance
                patterns and trends that traditional methods might miss. This
                precision ensures a more accurate determination of your risk of
                developing antimicrobial resistance, enabling timely and
                targeted interventions to protect your health.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="prose text-white lg:max-w-none mx-5 text-center">
          Your peace of mind increases, knowing your physician is providing you
          a personalized plan, not just conforming to generalized standards
        </p>
      </div>
      <div className="my-5">
        <h1 className="capitalize text-center text-sm lg:text-2xl font-bold mx-1 my-2">
          With Lab scientists, doctors, Pharmacist and AI technology joining
          forces, <span className="text-dilucttl">AMR can't beat us!.</span>
        </h1>
      </div>
    </div>
  );
}
