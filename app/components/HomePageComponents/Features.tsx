import Image from "next/image";
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
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active"
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex">
                    <Stars />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200">
                        Detection
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Our AI swiftly processes patient samples, identifying
                        resistance patterns within hours instead of days. This
                        quick turnaround is crucial for timely and effective
                        treatment decisions.
                      </span>
                      <Link
                        href="#"
                        className="block text-lg font-semibold hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200"
                      >
                        Learn How
                      </Link>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex">
                    <Stars />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200">
                        Density
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Our AI system integrates dense datasets from diverse
                        sources, including genetic sequences, patient health
                        records, and environmental data. This comprehensive
                        approach ensures that no critical detail is overlooked.
                      </span>
                      <Link
                        href="#"
                        className="block text-lg font-semibold hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200"
                      >
                        Learn How
                      </Link>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex">
                    <Stars/>
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200">
                        Risk
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Our AI technology analyzes a wide range of data,
                        including genetic, clinical, and environmental factors,
                        to develop a comprehensive risk profile for each
                        patient. This holistic approach ensures that all
                        potential risk factors are considered.
                      </span>
                      <Link
                        href="#"
                        className="block text-lg font-semibold hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200"
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
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
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
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
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
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* <!-- End Tab Content --> */}

                {/* <!-- SVG Element --> */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
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
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
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
    <div className="max-w-5xl mx-auto px-4 xl:px-0 ">
      <h3 className="uppercase font-semibold text-md md:text-2xl">
        our platform
      </h3>
      <h1 className="font-semibold text-primary text-5xl md:text-6xl">
        ProFound Breast Health Suite
      </h1>
      <div className="max-w-4xl">
        <p className="mt-1 dark:text-neutral-400 text-lg">
          Backed by science, clinical evidence, and proven patient outcomes; our
          suite of solutions – Detection, Density, and Risk — shine a spotlight
          on cancer, exposing its hiding place.
        </p>
      </div>
    </div>
  );
}
function Stars() {
  return (
    <svg
      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-green-600 text-gray-800 dark:hs-tab-active:text-green-500 dark:text-neutral-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
