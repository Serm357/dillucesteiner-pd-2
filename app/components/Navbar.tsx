import Link from "next/link";
import { ModeToggle } from "./ModeToggler";

const Navbar = () => {
  return (
    <>
      {/* <AnnouncementBanner /> */}
      <LinksBanner />
      <header className=" flex sticky top-0 left-0 z-[100] bg-background right-0 flex-wrap sm:justify-start items-center sm:flex-nowrap w-full  text-sm py-4  border-b-[0.1px] border-[#37dd0f] dark:border-green-900 ">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between max-h-14">
            <Link
              className="flex-none text-xl font-semibold text-white"
              href="/"
            >
              <img src="/ditekta-logo.png" className="w-20 h-auto sm:ml-10" />
            </Link>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                className="hover:text-white sm:hidden  rounded"
                data-hs-overlay="#docs-sidebar"
                aria-controls="docs-sidebar"
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle Navigation</span>
                <svg
                  className="flex-shrink-0 size-8"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
              {/* <div className="sm:hidden">
                <ModeToggle />
              </div> */}
            </div>
          </div>
          <div
            id="navbar-with-mega-menu"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="flex items-center w-full text-white hover:text-white font-medium  dark:text-white/80 dark:hover:text-white text-lg "
                >
                  For Providers
                  <svg
                    className="ms-1 flex-shrink-0 size-4"
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

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-[var(--dilucttl)] sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] ">
                    <button
                      type="button"
                      className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    >
                      AMR insights
                      <svg
                        className="sm:-rotate-90 ms-2 flex-shrink-0 size-4 text-white  dark:text-white/80"
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

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-green-100 sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 !mx-[10px] top-0 end-full">
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                        href="/for-providers/amr-insights"
                      >
                        AMR Insights Page
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                        href="/for-providers/amr-insights/detection"
                      >
                        Detection
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                        href="/for-providers/amr-insights/risk-assesment"
                      >
                        Risk Assesment
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                        href="/for-providers/amr-insights/risk-evaluation"
                      >
                        Risk Evaluation
                      </Link>
                    </div>
                  </div>

                  <h4 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white ">
                    Research & Publications
                  </h4>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/for-providers/service-support"
                  >
                    Service & Support
                  </Link>
                </div>
              </div>
              <Link
                className="font-medium text-white hover:text-white  dark:text-white/80 dark:hover:text-white text-lg"
                href="/for-partners"
              >
                For Partners
              </Link>

              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="flex items-center w-full text-white hover:text-white font-medium  dark:text-white/80 dark:hover:text-white text-lg "
                >
                  For Patients
                  <svg
                    className="ms-1 flex-shrink-0 size-4"
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

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-[var(--dilucttl)] sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/for-patients"
                  >
                    AI System
                  </Link>

                  <h4 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white ">
                    Resources
                  </h4>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="flex items-center w-full text-white hover:text-white font-medium  dark:text-white/80 dark:hover:text-white text-lg "
                >
                  About Us
                  <svg
                    className="ms-1 flex-shrink-0 size-4"
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

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-[var(--dilucttl)] sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/about-us"
                  >
                    Company Overview
                  </Link>

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/about-us#science"
                  >
                    Science
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/about-us#history"
                  >
                    History
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/about-us#goals"
                  >
                    Goals
                  </Link>

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white "
                    href="/#team"
                  >
                    Team
                  </Link>

                  <h4 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-[var(--dilucbg)] focus:ring-2 focus:ring-green-500  dark:text-white/80 dark:hover:bg-neutral-700  dark:hover:text-white hover:text-white ">
                    Webinars
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <div className="hidden sm:block mr-5">
          <ModeToggle />
        </div> */}
      </header>
      <MobileSidebar />
    </>
  );
};

export default Navbar;

function MobileSidebar() {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        id="docs-sidebar"
        className="hs-overlay md:hidden lg:hidden [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[1000] w-64  border-e border-gray-200 pt-7 pb-10 overflow-y-auto  lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 bg-background dark:border-neutral-700 font-semibold"
      >
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold dark:text-white max-h-14"
            href="/"
            aria-label="Brand"
          >
            <img src="/ditekta-logo.png" className="w-20 h-auto ml-5" />
          </Link>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li className="hs-accordion" id="users-accordion">
              <button
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-green-600  w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-lg  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)]  dark:hs-accordion-active:text-white text-black"
              >
                For Providers
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4 text-black group-hover:text-gray-500  dark:text-white/80"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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
              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group ps-3 pt-2 flex flex-col gap-2"
                  data-hs-accordion-always-open
                >
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-green-600  w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg  hover:bg-muted-foreground   dark:hs-accordion-active:text-white"
                    >
                      AMR Insights
                      <svg
                        className="hs-accordion-active:block ms-auto hidden size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ms-auto block size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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

                    <div
                      id="users-accordion-sub-1"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="pt-2 ps-2 flex flex-col gap-2">
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)] "
                            href="/for-providers/amr-insights"
                          >
                            AMR insights Page
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)] "
                            href="/for-providers/amr-insights/detection"
                          >
                            Detection
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)]"
                            href="/for-providers/amr-insights/risk-assesment"
                          >
                            Risk assesment
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg  hover:bg-muted-foreground bg-muted "
                            href="/for-providers/amr-insights/risk-evaluation"
                          >
                            Risk evaluation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <div>
                    <h4 className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  ">
                      Research & Publications
                    </h4>
                  </div>
                  <li>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  "
                      href="/for-providers/service-support"
                    >
                      Services & Support
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-lg  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)] text-black "
                href="/for-partners"
              >
                For Partners
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <button
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-green-600  w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-lg  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)]  dark:hs-accordion-active:text-white text-black"
              >
                For Patients
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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

              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group ps-3 pt-2 flex flex-col gap-2"
                  data-hs-accordion-always-open
                >
                  <li>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  "
                      href="/for-patients"
                    >
                      AI System
                    </Link>
                  </li>{" "}
                  <div>
                    <h4 className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  ">
                      Resources
                    </h4>
                  </div>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <button
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-green-600  w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-lg  rounded-lg  hover:bg-muted-foreground bg-[var(--dilucttl)]  dark:hs-accordion-active:text-white text-black"
              >
                About Us
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4 text-white group-hover:text-gray-500  dark:text-white/80"
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

              <div
                id="users-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group ps-3 pt-2 flex flex-col gap-2"
                  data-hs-accordion-always-open
                >
                  <li>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  "
                      href="/about-us#company-overview"
                    >
                      Company overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  "
                      href="/about-us#science"
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  "
                      href="/about-us#team"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  "
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <div>
                    <h4 className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg  hover:bg-muted-foreground bg-muted  ">
                      Webinars
                    </h4>
                  </div>
                </ul>
              </div>
            </li>
            <li>
              {/* <div className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-[var(--dilucbg)] dark:hover:bg-neutral-700  dark:text-white/80  dark:hover:text-white hover:text-white "> */}

              {/* Theme */}
              {/* </div> */}
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  );
}

function LinksBanner() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-end gap-x-5 w-full py-2 sm:pt-2 sm:pb-0">
        <Link
          className="inline-flex justify-center items-center gap-2 font-medium text-white hover:text-neutral-500 text-sm dark:text-neutral-400 dark:hover:text-white"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="inline-flex justify-center items-center gap-2 font-medium text-white hover:text-neutral-500 text-sm dark:text-neutral-400 dark:hover:text-white"
          href="/for-partners#partner-form"
        >
          Contact Us
        </Link>
        <button
          className=" disabled:opacity-50 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-green-600 text-green-600 hover:border-green-500 hover:text-green-500  disabled:pointer-events-none dark:border-green-500 dark:text-green-500 dark:hover:text-green-400 dark:hover:border-green-400"
          disabled={true}
        >
          Request Demo
        </button>
      </div>
    </div>
  );
}
function AnnouncementBanner() {
  return (
    <div
      id="ab-full-width-with-dismiss-button-on-green-bg"
      className="hs-removing:-translate-y-full bg-green-600"
    >
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex">
          <p className="text-white font-bold capitalize">
            Ditekta is now live but under ongoing development 😊.{" "}
            <br className="md:hidden" />
            let us know if you encouter any difficulies{" "}
            <Link href="/for-partners#partner-form" className="mx-2 underline">
              here
            </Link>
          </p>

          <div className="ps-3 ms-auto">
            <button
              type="button"
              className="inline-flex rounded-lg p-1.5 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
              data-hs-remove-element="#ab-full-width-with-dismiss-button-on-green-bg"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="flex-shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
