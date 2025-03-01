"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggler";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LinksBanner />
      <header
        className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-md bg-opacity-90" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-50">
              <img
                src="/ditekta-logo.png"
                className="h-12 w-32 sm:w-40 transition-all duration-300 hover:scale-105"
                alt="Ditekta Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <DesktopDropdown title="For Providers">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      AMR Insights
                    </h3>
                    <NavLink href="/for-providers/amr-insights">
                      Overview
                    </NavLink>
                    <NavLink href="/for-providers/amr-insights/detection">
                      Detection
                    </NavLink>
                    <NavLink href="/for-providers/amr-insights/risk-assesment">
                      Risk Assessment
                    </NavLink>
                    <NavLink href="/for-providers/amr-insights/risk-evaluation">
                      Risk Evaluation
                    </NavLink>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Resources
                    </h3>
                    <NavLink href="/for-providers/research">
                      Research & Publications
                    </NavLink>
                    <NavLink href="/for-providers/service-support">
                      Service & Support
                    </NavLink>
                  </div>
                </div>
              </DesktopDropdown>

              <NavLink href="/for-partners">For Partners</NavLink>

              <DesktopDropdown title="For Patients">
                <div className="p-4 space-y-2 min-w-[240px]">
                  <NavLink href="/for-patients">AI System</NavLink>
                  <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
                    Resources
                  </h3>
                  <NavLink href="/resources/guides">Guides</NavLink>
                  <NavLink href="/resources/faq">FAQ</NavLink>
                </div>
              </DesktopDropdown>

              <DesktopDropdown title="About Us">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="space-y-2">
                    <NavLink href="/about-us">Company Overview</NavLink>
                    <NavLink href="/about-us#science">Science</NavLink>
                    <NavLink href="/about-us#history">History</NavLink>
                  </div>
                  <div className="space-y-2">
                    <NavLink href="/about-us#team">Team</NavLink>
                    <NavLink href="/events/webinars">Webinars</NavLink>
                    <NavLink href="/events/conferences">Conferences</NavLink>
                  </div>
                </div>
              </DesktopDropdown>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <ModeToggle />
                <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white rounded-full font-medium transition-all duration-300">
                  Request Demo
                </button>
              </div>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6 overflow-y-auto h-full">
              <MobileDropdown title="For Providers">
                <div className="space-y-2 pl-4">
                  <h3 className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    AMR Insights
                  </h3>
                  <MobileNavLink href="/for-providers/amr-insights">
                    Overview
                  </MobileNavLink>
                  <MobileNavLink href="/for-providers/amr-insights/detection">
                    Detection
                  </MobileNavLink>
                  <MobileNavLink href="/for-providers/amr-insights/risk-assesment">
                    Risk Assessment
                  </MobileNavLink>
                  <MobileNavLink href="/for-providers/amr-insights/risk-evaluation">
                    Risk Evaluation
                  </MobileNavLink>
                  <h3 className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-4">
                    Resources
                  </h3>
                  <MobileNavLink href="/for-providers/research">
                    Research & Publications
                  </MobileNavLink>
                  <MobileNavLink href="/for-providers/service-support">
                    Service & Support
                  </MobileNavLink>
                </div>
              </MobileDropdown>

              <MobileNavLink href="/for-partners">For Partners</MobileNavLink>

              <MobileDropdown title="For Patients">
                <div className="pl-4 space-y-2">
                  <MobileNavLink href="/for-patients">AI System</MobileNavLink>
                  <h3 className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-2">
                    Resources
                  </h3>
                  <MobileNavLink href="/resources/guides">Guides</MobileNavLink>
                  <MobileNavLink href="/resources/faq">FAQ</MobileNavLink>
                </div>
              </MobileDropdown>

              <MobileDropdown title="About Us">
                <div className="pl-4 space-y-2">
                  <MobileNavLink href="/about-us">
                    Company Overview
                  </MobileNavLink>
                  <MobileNavLink href="/about-us#science">
                    Science
                  </MobileNavLink>
                  <MobileNavLink href="/about-us#history">
                    History
                  </MobileNavLink>
                  <MobileNavLink href="/about-us#team">Team</MobileNavLink>
                  <MobileNavLink href="/events/webinars">
                    Webinars
                  </MobileNavLink>
                  <MobileNavLink href="/events/conferences">
                    Conferences
                  </MobileNavLink>
                </div>
              </MobileDropdown>

              <div className="mt-8 flex flex-col gap-4">
                <ModeToggle />
                <button className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Reusable Components
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors font-medium"
  >
    {children}
  </Link>
);

const DesktopDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 font-medium">
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`absolute top-full pt-2 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 min-w-[320px] backdrop-blur-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-colors"
  >
    {children}
  </Link>
);

const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const LinksBanner = () => (
  <div className="bg-emerald-600 dark:bg-emerald-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex items-center justify-end gap-6 text-sm">
        <Link
          href="/blog"
          className="text-white/90 hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-white/90 hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
