import { ParkingMeterIcon, Stars } from "lucide-react";
import Image from "next/image";

export default function Herofeatures() {
  return (
    <section>
      <Heading />
      {/* <!-- Features --> */}
      <div className=" w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          {/* <!-- Grid --> */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                Fully customizable rules to match your unique needs
              </h2>

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
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Advanced tools
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Use Preline thoroughly thought and automated libraries
                        to manage your businesses.
                      </span>
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
                    <ParkingMeterIcon />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Smart dashboards
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Quickly Preline sample components, copy-paste codes, and
                        start right off.
                      </span>
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
                    <Stars />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                        Powerful features
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                        Reduce time and effort on building modern look design
                        with Preline only.
                      </span>
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
                    <Image
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                      alt="Image Description"
                      width={987}
                      height={1220}
                    />
                  </div>

                  <div
                    id="tabs-with-card-2"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <Image
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                      alt="Image Description"
                      width={987}
                      height={1220}
                    />
                  </div>

                  <div
                    id="tabs-with-card-3"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <Image
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                      alt="Image Description"
                      width={987}
                      height={1220}
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
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800  lg:hidden"></div>
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
    <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-3">
      <h1 className="font-semibold text-white text-5xl md:text-6xl">
        <span className="text-[#ff0] ">Preline Agency:</span> Transforming ideas
        into reality
      </h1>
      <div className="max-w-4xl">
        <p className="mt-5 text-neutral-400 text-lg">
          It is a creative hub where imagination meets craftsmanship to
          transform ideas into tangible realities. At Preline Agency, we
          specialize in turning conceptual visions into concrete forms, whether
          it be through design, artistry, or technological innovation.
        </p>
      </div>
    </div>
  );
}
