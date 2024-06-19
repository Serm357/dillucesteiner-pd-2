import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div
        className="overflow-hidden h-[29rem] relative w-full flex items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <img
          src="/bg/15.jpg"
          className="image h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 top-32 lg:top-44 ">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="font-bold capitalize text-5xl md:text-6xl text-[#0099cc] shadow-md shadow-blue-300 shadow-b  py-4 px-4  backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20  mx-auto text-center rounded-full relative mt-4">
              About Diluc Steiner
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-16">
        <div className="ml-2 mt-28">
          <h1 className="mt-16 capitalize font-bold text-3xl md:text-4xl mx-2 text-center text-primary mb-8">
            About Us
          </h1>
          <div className="mx-3">
            <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
              At Diluc Steiner, we revolutionize healthcare through AI to combat
              antimicrobial resistance (AMR), education, and awareness. Our
              advanced technology provides rapid, accurate insights, enabling
              early detection and precise treatment plans. We also believe that
              informed communities and proactive measures are key to preventing
              the spread of AMR from animals to humans, the environment to
              humans, and between humans.
            </p>
          </div>
        </div>
        <div className="ml-2 my-8">
          <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
            Our vision
          </h1>
          <div className="mx-3">
            <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
              We envision a world where antimicrobial resistance is no longer a
              threat to public health. Through cutting-edge technology,
              comprehensive education, and strong advocacy, we strive to create
              a future where AMR is effectively managed and minimized. Our
              commitment is to ensure that healthcare providers, communities,
              and policymakers work together to combat AMR, securing better
              health outcomes for all.
            </p>
          </div>
        </div>
        <div className="ml-2 my-8">
          <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
            Our mission
          </h1>
          <div className="mx-3">
            Our mission is to harness the power of innovative artificial
            intelligence (AI) solutions to accurately, reliably, and swiftly
            detect AMR, while simultaneously educating and raising awareness
            within communities. By advocating for policy changes and promoting
            responsible antibiotic use, we aim to reduce the spread of
            resistance and optimize every individual’s opportunity to live a
            healthier, longer life.
          </div>
        </div>
        <div className="ml-2 my-8" id="goals">
          <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
            goals
          </h1>
          <div className="mx-3">
            <div className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
              <ul className="marker:text-primary">
                <li className="list-disc">
                  Innovate and improve the speed and accuracy of AST
                </li>
                <li className="list-disc">
                  Contribute to the global effort to prevent and manage AMR
                </li>
                <li className="list-disc">
                  Support healthcare professionals with advanced tools for
                  better decision-making in treatment plans.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="history" className="ml-2 my-8">
          <h1 className=" mt-16 capitalize font-bold text-3xl md:text-4xl text-center mx-2 ml-7 text-primary mb-8">
            Learn more <span className="mx-1 text-orange-500"> about us.</span>
          </h1>
          <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
            Our story
          </h1>
          <div className="mx-3">
            <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
              During the COVID-19 pandemic, the world witnessed the devastating
              impact of antimicrobial resistance (AMR) alongside the virus. It
              became clear that AMR was not just a secondary issue but a
              critical threat, with many patients losing their lives due to
              resistant infections. This eye-opening experience fueled our
              determination to find a better way to combat AMR
            </p>
            <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
              In response to this urgent need, Diluc Steiner was founded in
              December 2023. Our mission is to revolutionize healthcare with
              cutting-edge AI technology designed to detect resistance patterns
              early and accurately. By empowering healthcare professionals with
              rapid, actionable insights, we aim to enhance patient outcomes and
              safeguard global health.
            </p>
            <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
              Combining the expertise of medical professionals with advanced
              machine learning, we are committed to creating next-generation
              solutions for healthcare diagnostics. Our journey began in the
              midst of a global crisis, driven by a passion for innovation and a
              commitment to preventing AMR in both human and animal health.
              Diluc Steiner stands at the forefront of this battle, dedicated to
              a future where effective treatments can preserve lives and combat
              resistance.
            </p>
          </div>
        </div>
        <Objectives />
      </div>
    </section>
  );
};

export default AboutUs;

function Objectives() {
  return (
    <div className="ml-2 my-8" id="science">
      <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
        Our objectives
      </h1>
      <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
        Our objectives at Diluc Steiner are clear and ambitious:-
      </p>
      <div className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
        <ul className="marker:text-primary list-decimal">
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Develop the Smartest AI
            </h2>
            We strive to create the most advanced AI technology, leveraging
            cutting-edge algorithms and data analytics to revolutionize
            antimicrobial resistance (AMR) detection.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Enhance AMR Detection Accuracy
            </h2>
            Our goal is to enhance the accuracy of AMR detection, ensuring
            precise identification of resistance patterns to guide effective
            treatment strategies.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Accelerate Detection
            </h2>
            Time: We aim to significantly reduce detection time compared to
            traditional methods, providing rapid insights into resistance
            patterns to enable timely intervention and better patient outcomes.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Provide Comprehensive Treatment Plans
            </h2>
            We are committed to offering comprehensive treatment plans based on
            our AI analysis, empowering healthcare professionals with actionable
            insights to combat AMR effectively and safeguard public health.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Educational Programs
            </h2>
            We provide education and awareness to students in secondary schools
            and healthcare workers on the proper handling of antibiotics.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Community Engagement
            </h2>
            We raise awareness in communities about the importance of
            responsible antibiotic use and the risks of AMR.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Advocacy
            </h2>
            We advocate for policy changes to mitigate AMR and promote best
            practices across all sectors.
          </li>
          <li>
            <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
              Prevention Strategies
            </h2>
            We focus on preventing the spread of resistance from animal to
            human, environment to human, human to human, and human to
            environment.
          </li>
        </ul>
      </div>
    </div>
  );
}
