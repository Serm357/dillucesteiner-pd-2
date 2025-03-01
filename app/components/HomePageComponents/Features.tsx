import {
  CandlestickChartIcon,
  FlaskRoundIcon,
  MicroscopeIcon,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Herofeatures() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 backdrop-blur-3xl"></div>
      </div>

      <Heading />

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative z-10">
        <div className="relative p-6 md:p-8 lg:p-16 backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
          {/* <!-- Grid --> */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              {/* <!-- Tab Navs --> */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-2xl blur-lg opacity-30"></div>
                <nav
                  className="relative grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="group hs-tab-active:bg-gradient-to-r hs-tab-active:from-violet-600 hs-tab-active:to-emerald-600 hs-tab-active:shadow-xl text-start 
                    transition-all duration-300 ease-in-out hover:bg-white/5 p-5 md:p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex items-start">
                      <span className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-violet-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <FlaskRoundIcon
                          className="size-6 md:size-7 hs-tab-active:text-white text-emerald-400 transition-all duration-300"
                          width="24"
                          height="24"
                        />
                      </span>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-white text-white transition-all duration-300">
                          Detection
                        </span>
                        <span className="block mt-2 text-sm leading-relaxed hs-tab-active:text-white/90 text-neutral-300 transition-all duration-300">
                          Our AI swiftly processes patient samples, identifying
                          resistance patterns within hours instead of days. This
                          quick turnaround is crucial for timely and effective
                          treatment decisions.
                        </span>
                        <Link
                          href="/for-providers/amr-insights/detection"
                          className="mt-3 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 group-hover:underline transition-all duration-300"
                        >
                          Learn How
                          <svg
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M5.5 12.5L10.5 7.5L5.5 2.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="group hs-tab-active:bg-gradient-to-r hs-tab-active:from-violet-600 hs-tab-active:to-emerald-600 hs-tab-active:shadow-xl text-start 
                    transition-all duration-300 ease-in-out hover:bg-white/5 p-5 md:p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex items-start">
                      <span className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-violet-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <CandlestickChartIcon
                          className="size-6 md:size-7 hs-tab-active:text-white text-emerald-400 transition-all duration-300"
                          width="24"
                          height="24"
                        />
                      </span>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-white text-white transition-all duration-300">
                          Risk Assessment
                        </span>
                        <span className="block mt-2 text-sm leading-relaxed hs-tab-active:text-white/90 text-neutral-300 transition-all duration-300">
                          Our AI system integrates dense datasets from diverse
                          sources, including genetic sequences, patient health
                          records, and environmental data. This comprehensive
                          approach ensures that no critical detail is
                          overlooked.
                        </span>
                        <Link
                          href="/for-providers/amr-insights/risk-assesment"
                          className="mt-3 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 group-hover:underline transition-all duration-300"
                        >
                          Learn How
                          <svg
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M5.5 12.5L10.5 7.5L5.5 2.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="group hs-tab-active:bg-gradient-to-r hs-tab-active:from-violet-600 hs-tab-active:to-emerald-600 hs-tab-active:shadow-xl text-start 
                    transition-all duration-300 ease-in-out hover:bg-white/5 p-5 md:p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex items-start">
                      <span className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-violet-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <MicroscopeIcon
                          className="size-6 md:size-7 hs-tab-active:text-white text-emerald-400 transition-all duration-300"
                          width="24"
                          height="24"
                        />
                      </span>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-white text-white transition-all duration-300">
                          Risk Evaluation
                        </span>
                        <span className="block mt-2 text-sm leading-relaxed hs-tab-active:text-white/90 text-neutral-300 transition-all duration-300">
                          Our AI technology analyzes a wide range of data,
                          including genetic, clinical, and environmental
                          factors, to develop a comprehensive risk profile for
                          each patient. This holistic approach ensures that all
                          potential risk factors are considered.
                        </span>
                        <Link
                          href="/for-providers/amr-insights/risk-evaluation"
                          className="mt-3 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 group-hover:underline transition-all duration-300"
                        >
                          Learn How
                          <svg
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M5.5 12.5L10.5 7.5L5.5 2.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>
              {/* <!-- End Tab Navs --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="lg:col-span-6">
              <div className="relative">
                {/* <!-- Tab Content --> */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-3xl blur-lg opacity-70"></div>

                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                    className="relative"
                  >
                    <img
                      className="shadow-2xl rounded-2xl border border-white/10 transition-all duration-500 hover:scale-[1.02]"
                      src="/bg/28.jpg"
                      alt="Image Description"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div
                    id="tabs-with-card-2"
                    className="hidden relative"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      className="shadow-2xl rounded-2xl border border-white/10 transition-all duration-500 hover:scale-[1.02]"
                      src="/bg/11.jpg"
                      alt="Image Description"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div
                    id="tabs-with-card-3"
                    className="hidden relative"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      className="shadow-2xl rounded-2xl border border-white/10 transition-all duration-500 hover:scale-[1.02]"
                      src="/bg/21.jpg"
                      alt="Image Description"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                {/* <!-- End Tab Content --> */}

                {/* <!-- Decorative elements --> */}
                <div className="hidden absolute -top-20 -left-20 md:block">
                  <svg
                    className="w-32 h-32 text-emerald-500/10"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="30"
                      stroke="currentColor"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="hidden absolute top-1/2 -right-16 transform -translate-y-1/2 md:block lg:-translate-x-20">
                  <svg
                    className="w-40 h-auto text-violet-600/20"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
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

                <div className="absolute -bottom-10 -right-10 hidden md:block">
                  <div className="size-20 bg-gradient-to-br from-violet-600/30 to-transparent rounded-full blur-xl"></div>
                </div>
                {/* <!-- End Decorative elements --> */}
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="max-w-5xl mx-auto pt-28 pb-10 px-4 xl:px-0 relative z-10">
      <div className="relative inline-block">
        <span className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-emerald-600/30 blur-lg"></span>
        <h3 className="uppercase my-5 font-semibold text-md md:text-2xl bg-gradient-to-r from-violet-300 to-emerald-300 text-transparent bg-clip-text relative">
          our platform
        </h3>
      </div>

      <h1 className="font-bold mb-9 text-5xl md:text-7xl bg-gradient-to-r from-white via-white to-neutral-400 text-transparent bg-clip-text">
        AMR{" "}
        <span className="relative">
          insights
          <span className="absolute -top-6 -right-6">
            <Sparkles className="size-6 text-emerald-400" />
          </span>
        </span>
      </h1>

      <div className="max-w-4xl space-y-6">
        <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
          Backed by science, clinical evidence, and proven patient outcomes.
        </p>

        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-violet-600/20 to-emerald-600/20 blur-lg opacity-30"></div>
          <div className="relative p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Our suite of solutions – Detection, Risk Assessment, and Risk
              Evaluation – shines a spotlight on AMR, exposing its nature in the
              quickest way possible.
            </p>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              Harnessing cutting-edge technology, our platform delivers
              unparalleled accuracy and efficiency, empowering healthcare
              providers with actionable insights to combat antimicrobial
              resistance.
            </p>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              Discover how our innovative approach is transforming the fight
              against AMR, ensuring better patient outcomes and a healthier
              future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <svg
      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-white text-emerald-400 dark:hs-tab-active:text-blue-500"
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
