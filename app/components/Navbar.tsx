import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <LinksBanner />
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b border-gray-200 text-lg    dark:border-neutral-700">
        <nav
          className="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="md:ml-3 lg:ml-7 ">
            <Link className="" href="/" aria-label="Brand">
              <Image
                src="/logos/steiner-1.png"
                className="w-36 h-28 bg-cover"
                alt="diluc logo"
                width={144}
                height={112}
              />
            </Link>
          </div>

          <div className="flex items-center ms-auto sm:ms-0 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#navbar-offcanvas-example"
                aria-controls="navbar-offcanvas-example"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="ps-3 sm:ps-6 sm:my-3 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-neutral-700">
              <ModeToggle />
            </div>
          </div>

          <div
            id="navbar-offcanvas-example"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60]  border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto  dark:border-r-gray-700 sm:dark:border-r-transparent hidden"
            // tabIndex={-1}
            data-hs-overlay-close-on-resize
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] px-6 py-3 sm:px-3">
                <button
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-primary font-medium dark:text-neutral-400 dark:hover:text-primary"
                >
                  For Providers
                  <svg
                    className="flex-shrink-0 ms-2 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg py-2 px-3 sm:px-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] relative">
                    <Link
                      href="/for-providers/breast-health"
                      className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 md:hover:text-primary focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700  dark:hover:text-primary"
                    >
                      ProFound Breast Health Suite
                      <svg
                        className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Link>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 !mx-[10px] top-0 end-full">
                      <Link
                        className="flex md:hidden items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                        href="/for-providers/breast-health"
                      >
                        ProFound Breast Health Suite
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                        href="/for-providers/breast-health/detection"
                      >
                        Detection
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                        href="/for-providers/density"
                      >
                        Density Assesment
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                        href="/for-providers/breast-health/risk"
                      >
                        Risk Evaluation
                      </Link>
                    </div>
                  </div>

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 hover:text-primary focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/for-providers/research"
                  >
                    Research & Publications
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 hover:text-primary focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/for-providers/services"
                  >
                    Services & Support
                  </Link>
                </div>
              </div>
              <Link
                className="px-6 py-3 sm:px-3 font-medium text-gray-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
                href="/for-partners"
              >
                For Patners
              </Link>

              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] px-6 py-3 sm:px-3">
                <button
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-primary font-medium dark:text-neutral-400 dark:hover:text-primary"
                >
                  For Patients
                  <svg
                    className="flex-shrink-0 ms-2 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg py-2 px-3 sm:px-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/for-patients/ai-powered-mammogram"
                  >
                    AI powered Mammogram
                  </Link>

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/for-patients/resources"
                  >
                    Resources
                  </Link>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] px-6 py-3 sm:px-3">
                <button
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-primary font-medium dark:text-neutral-400 dark:hover:text-primary"
                >
                  About Us
                  <svg
                    className="flex-shrink-0 ms-2 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg py-2 px-3 sm:px-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/about-us/#company-overview"
                  >
                    Company Overview
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/about-us/#science"
                  >
                    Science
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/about-us/#history"
                  >
                    History
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-primary hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/#team"
                  >
                    Team
                  </Link>

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/about-us/#webinars"
                  >
                    Webinars
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-primary"
                    href="/about-us/#careers"
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

function LinksBanner() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-end gap-x-5 w-full py-2 sm:pt-2 sm:pb-0">
        <Link
          className="inline-flex justify-center items-center gap-2 font-medium text-gray-600 hover:text-neutral-500 text-sm dark:text-neutral-400 dark:hover:text-primary"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="inline-flex justify-center items-center gap-2 font-medium text-gray-600 hover:text-neutral-500 text-sm dark:text-neutral-400 dark:hover:text-primary"
          href="/contact-us"
        >
          Contact Us
        </Link>
        <button
          className=" disabled:opacity-50 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500  disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
          disabled={true}
        >
          Request Demo
        </button>
      </div>
    </div>
  );
}
