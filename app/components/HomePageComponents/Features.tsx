import {
  CandlestickChartIcon,
  FlaskRoundIcon,
  MicroscopeIcon,
} from "lucide-react";
import Link from "next/link";

export default function Herofeatures() {
  return (
    <section>
      <Heading />
      {/* <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          {/* <!-- Grid --> */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              {/* <!-- Tab Navs --> */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-dilucttl hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-green-500 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active"
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex">
                    <FlaskRoundIcon
                      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                      width="24"
                      height="24"
                    />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Detection
                      </span>
                      <span className="block mt-1 hs-tab-active:text-dilucbg text-neutral-200">
                        Our AI swiftly processes patient samples, identifying
                        resistance patterns within hours instead of days. This
                        quick turnaround is crucial for timely and effective
                        treatment decisions.
                      </span>
                      <Link
                        href="/for-providers/amr-insights/detection"
                        className="block text-lg font-semibold hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                      >
                        Learn How
                      </Link>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-dilucttl hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-green-500 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 "
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex">
                    <CandlestickChartIcon
                      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                      width="24"
                      height="24"
                    />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Risk Assesment
                      </span>
                      <span className="block mt-1  hs-tab-active:text-dilucbg text-neutral-200">
                        Our AI system integrates dense datasets from diverse
                        sources, including genetic sequences, patient health
                        records, and environmental data. This comprehensive
                        approach ensures that no critical detail is overlooked.
                      </span>
                      <Link
                        href="/for-providers/amr-insights/risk-assesment"
                        className="block text-lg font-semibold hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                      >
                        Learn How
                      </Link>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-dilucttl hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-green-500 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 "
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex">
                    <MicroscopeIcon
                      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                      width="24"
                      height="24"
                    />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Risk Evaluation
                      </span>
                      <span className="block mt-1  hs-tab-active:text-dilucbg text-neutral-200">
                        Our AI technology analyzes a wide range of data,
                        including genetic, clinical, and environmental factors,
                        to develop a comprehensive risk profile for each
                        patient. This holistic approach ensures that all
                        potential risk factors are considered.
                      </span>
                      <Link
                        href="/for-providers/amr-insights/risk-evaluation"
                        className="block text-lg font-semibold hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                      >
                        Learn How
                      </Link>
                    </span>
                  </span>
                </button>
              </nav>
              {/* <!-- End Tab Navs --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="lg:col-span-6">
              <div className="relative">
                {/* <!-- Tab Content --> */}
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-dilucttl rounded-xl dark:shadow-gray-900/20"
                      src="/bg/28.jpg"
                      alt="Image Description"
                    />
                  </div>

                  <div
                    id="tabs-with-card-2"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      className="shadow-xl shadow-dilucttl rounded-xl dark:shadow-gray-900/20"
                      src="/bg/11.jpg"
                      alt="Image Description"
                    />
                  </div>

                  <div
                    id="tabs-with-card-3"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      className="shadow-xl shadow-dilucttl rounded-xl dark:shadow-gray-900/20"
                      src="/bg/21.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* <!-- End Tab Content --> */}

                {/* <!-- SVG Element --> */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-dilucttl"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* <!-- End SVG Element --> */}
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- Background Color --> */}
          <div className="absolute inset-0 grid grid-cols-12 size-full md:hidden">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-neutral-900 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
          </div>
          {/* <!-- End Background Color --> */}
        </div>
      </div>
      {/* <!-- End Features --> */}
    </section>
  );
}

function Heading() {
  return (
    <div className="max-w-5xl mx-auto mt-28 px-4 xl:px-0 ">
      <h3 className="uppercase my-5 font-semibold text-md md:text-2xl">
        our platform
      </h3>
      <h1 className="font-semibold mb-9 text-primary text-5xl md:text-6xl">
        AMR insights
      </h1>
      <div className="max-w-4xl">
        <p className="mt-1 dark:text-neutral-400 text-lg">
          Backed by science, clinical evidence, and proven patient outcomes.
        </p>
        <p className="mt-1 dark:text-neutral-400 text-lg">
          Our suite of solutions – Detection, Risk Assessment, and Risk
          Evaluation – shines a spotlight on AMR, exposing its nature in the
          quickest way possible. <br />
          Harnessing cutting-edge technology, our platform delivers unparalleled
          accuracy and efficiency, empowering healthcare providers with
          actionable insights to combat antimicrobial resistance.
          <br /> Discover how our innovative approach is transforming the fight
          against AMR, ensuring better patient outcomes and a healthier future
          for all.
        </p>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <svg
      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-white text-dilucttl dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
