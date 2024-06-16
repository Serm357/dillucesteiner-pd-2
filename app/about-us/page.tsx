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
            <h1 className="font-bold uppercase text-5xl md:text-6xl bg-clip-text text-transparent shadow-md shadow-green-300 shadow-b bg-gradient-to-t via-gray-500 from-gray-50 to-gray-800 py-4">
              About Diluc
            </h1>
          </div>
        </div>
      </div>
      <div className="ml-2 mt-28">
        <h1 className="mt-16 capitalize font-bold text-3xl md:text-4xl mx-2 text-center text-primary mb-8">
          About Us
        </h1>
        <div className="mx-3">
          <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            At Diluc Steiner, we revolutionize healthcare through AI to combat
            antimicrobial resistance (AMR). Our advanced technology provides
            rapid, accurate insights, enabling early detection and precise
            treatment plans.
          </p>
          <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            Combining medical expertise with cutting-edge algorithms, we analyze
            comprehensive datasets to identify resistance patterns swiftly.
          </p>
          <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            Our mission is to improve patient outcomes, support ongoing AMR
            surveillance, and set new standards in healthcare diagnostics and
            treatment planning. Driven by innovation and a commitment to global
            health, we strive to preserve effective treatments and protect
            lives.
          </p>
        </div>
      </div>
      <div className="ml-2 my-8">
        <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
          Our vision
        </h1>
        <div className="mx-3">
          <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            AMR can’t beat us. To lead in the development of AI-driven
            diagnostic tools that significantly impact the fight against AMR,
            ensuring better health outcomes for both humans and animals.
          </p>
        </div>
      </div>
      <div className="ml-2 my-8">
        <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
          Our mission
        </h1>
        <div className="mx-3">
          <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            Revolutionize healthcare by leveraging cutting-edge AI technology to
            combat antimicrobial resistance (AMR).
          </p>
          <p className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            We are dedicated to empowering healthcare professionals with rapid,
            accurate, and actionable insights, enabling them to detect
            resistance patterns early and develop effective treatment plans. By
            combining the expertise of medical professionals with the power of
            machine learning, we strive to enhance patient outcomes, safeguard
            global health, and ensure a sustainable future in both human and
            animal health.
          </p>
        </div>
      </div>
      <div className="ml-2 my-8" id="goals">
        <h1 className=" mt-16 capitalize font-bold text-xl md:text-3xl mx-2 ml-7 text-primary mb-8">
          goals
        </h1>
        <div className="mx-3">
          <div className="prose max-w-none md:prose-lg lg:prose-xl my-4 dark:text-gray-200  mx-2">
            <ul>
              <li className="list-disc">
                Innovate and improve the speed and accuracy of AST
              </li>
              <li className="list-disc">
                Contribute to the global effort to prevent and manage AMR
              </li>
              <li className="list-disc">
                Support healthcare professionals with advanced tools for better
                decision-making in treatment plans.
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
            became clear that AMR was not just a secondary issue but a critical
            threat, with many patients losing their lives due to resistant
            infections. This eye-opening experience fueled our determination to
            find a better way to combat AMR
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
            solutions for healthcare diagnostics. Our journey began in the midst
            of a global crisis, driven by a passion for innovation and a
            commitment to preventing AMR in both human and animal health. Diluc
            Steiner stands at the forefront of this battle, dedicated to a
            future where effective treatments can preserve lives and combat
            resistance.
          </p>
        </div>
      </div>
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
              patterns to enable timely intervention and better patient
              outcomes.
            </li>
            <li>
              <h2 className="font-bold capitalize text-sm md:text-lg text-primary">
                Provide Comprehensive Treatment Plans
              </h2>
              We are committed to offering comprehensive treatment plans based
              on our AI analysis, empowering healthcare professionals with
              actionable insights to combat AMR effectively and safeguard public
              health.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
