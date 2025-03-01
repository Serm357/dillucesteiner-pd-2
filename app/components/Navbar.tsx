"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Type definitions for component props
interface MainMenuLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

interface DesktopMenuItemProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

interface MobileMenuItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

interface MobileMenuLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = () => {
    setIsMobileOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      <TopBanner />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
            : "bg-gray-900 dark:bg-gray-900 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0 z-50 relative">
              <img
                src="/ditekta-logo.png"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-28 w-24 sm:w-32" : "h-28 w-24 sm:w-40"
                }`}
                alt="Ditekta Logo"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <DesktopMenuItem
                title="For Providers"
                isActive={activeSubmenu === "providers"}
                onMouseEnter={() => setActiveSubmenu("providers")}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="grid grid-cols-2 gap-6 p-6">
                  <div>
                    <h3 className="text-sm font-bold text-emerald-400 dark:text-emerald-400 mb-3">
                      AMR Insights
                    </h3>
                    <MenuLink
                      href="/for-providers/amr-insights"
                      onClick={handleNavigation}
                    >
                      Overview
                    </MenuLink>
                    <MenuLink
                      href="/for-providers/amr-insights/detection"
                      onClick={handleNavigation}
                    >
                      Detection
                    </MenuLink>
                    <MenuLink
                      href="/for-providers/amr-insights/risk-assesment"
                      onClick={handleNavigation}
                    >
                      Risk Assessment
                    </MenuLink>
                    <MenuLink
                      href="/for-providers/amr-insights/risk-evaluation"
                      onClick={handleNavigation}
                    >
                      Risk Evaluation
                    </MenuLink>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                      Resources
                    </h3>
                    {/* <MenuLink
                      href="/for-providers/research"
                      onClick={handleNavigation}
                    >
                      Research & Publications
                    </MenuLink> */}
                    <MenuLink
                      href="/for-providers/service-support"
                      onClick={handleNavigation}
                    >
                      Service & Support
                    </MenuLink>
                  </div>
                </div>
              </DesktopMenuItem>

              <MainMenuLink href="/for-partners" onClick={handleNavigation}>
                For Partners
              </MainMenuLink>

              <DesktopMenuItem
                title="For Patients"
                isActive={activeSubmenu === "patients"}
                onMouseEnter={() => setActiveSubmenu("patients")}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="p-6 space-y-3 min-w-[280px]">
                  <MenuLink href="/for-patients" onClick={handleNavigation}>
                    AI System
                  </MenuLink>
                  {/* <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-4 mb-3">
                    Resources
                  </h3>
                  <MenuLink href="/resources/guides" onClick={handleNavigation}>
                    Guides
                  </MenuLink>
                  <MenuLink href="/resources/faq" onClick={handleNavigation}>
                    FAQ
                  </MenuLink> */}
                </div>
              </DesktopMenuItem>

              <DesktopMenuItem
                title="About Us"
                isActive={activeSubmenu === "about"}
                onMouseEnter={() => setActiveSubmenu("about")}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="grid grid-cols-2 gap-6 p-6">
                  <div>
                    <MenuLink href="/about-us" onClick={handleNavigation}>
                      Company Overview
                    </MenuLink>
                    <MenuLink
                      href="/about-us#science"
                      onClick={handleNavigation}
                    >
                      Science
                    </MenuLink>
                    <MenuLink
                      href="/about-us#history"
                      onClick={handleNavigation}
                    >
                      History
                    </MenuLink>
                  </div>
                  <div>
                    <MenuLink href="/#team" onClick={handleNavigation}>
                      Team
                    </MenuLink>
                    <MenuLink href="#" onClick={handleNavigation}>
                      Webinars
                    </MenuLink>
                    <MenuLink href="#" onClick={handleNavigation}>
                      Conferences
                    </MenuLink>
                  </div>
                </div>
              </DesktopMenuItem>
            </nav>

            <div className="flex items-center">
              <button className="hidden lg:flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                Request Demo
              </button>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 ml-4 text-emerald-400 dark:text-emerald-400"
                aria-label="Toggle menu"
                aria-expanded={isMobileOpen}
              >
                <motion.div
                  animate={isMobileOpen ? "open" : "closed"}
                  className="w-7 h-7 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className="w-6 h-0.5 bg-current mb-1.5 block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current mb-1.5 block"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-gray-900 dark:bg-gray-900 shadow-xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 space-y-6">
                  <MobileMenuItem
                    title="For Providers"
                    isOpen={activeSubmenu === "providers-mobile"}
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === "providers-mobile"
                          ? null
                          : "providers-mobile"
                      )
                    }
                  >
                    <div className="pl-4 py-2 space-y-4">
                      <h3 className="font-semibold text-emerald-400 dark:text-emerald-400">
                        AMR Insights
                      </h3>
                      <MobileMenuLink
                        href="/for-providers/amr-insights"
                        onClick={handleNavigation}
                      >
                        Overview
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/for-providers/amr-insights/detection"
                        onClick={handleNavigation}
                      >
                        Detection
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/for-providers/amr-insights/risk-assesment"
                        onClick={handleNavigation}
                      >
                        Risk Assessment
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/for-providers/amr-insights/risk-evaluation"
                        onClick={handleNavigation}
                      >
                        Risk Evaluation
                      </MobileMenuLink>

                      <h3 className="font-semibold text-emerald-400 dark:text-emerald-400 mt-6">
                        Resources
                      </h3>
                      <MobileMenuLink
                        href="/for-providers/research"
                        onClick={handleNavigation}
                      >
                        Research & Publications
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/for-providers/service-support"
                        onClick={handleNavigation}
                      >
                        Service & Support
                      </MobileMenuLink>
                    </div>
                  </MobileMenuItem>

                  <MobileMenuLink
                    href="/for-partners"
                    onClick={handleNavigation}
                  >
                    For Partners
                  </MobileMenuLink>

                  <MobileMenuItem
                    title="For Patients"
                    isOpen={activeSubmenu === "patients-mobile"}
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === "patients-mobile"
                          ? null
                          : "patients-mobile"
                      )
                    }
                  >
                    <div className="pl-4 py-2 space-y-4">
                      <MobileMenuLink
                        href="/for-patients"
                        onClick={handleNavigation}
                      >
                        AI System
                      </MobileMenuLink>
                      {/* <h3 className="font-semibold text-emerald-400 dark:text-emerald-400 mt-4">
                        Resources
                      </h3>
                      <MobileMenuLink
                        href=""
                        onClick={handleNavigation}
                      >
                        Guides
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/resources/faq"
                        onClick={handleNavigation}
                      >
                        FAQ
                      </MobileMenuLink> */}
                    </div>
                  </MobileMenuItem>

                  <MobileMenuItem
                    title="About Us"
                    isOpen={activeSubmenu === "about-mobile"}
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === "about-mobile" ? null : "about-mobile"
                      )
                    }
                  >
                    <div className="pl-4 py-2 space-y-4">
                      <MobileMenuLink
                        href="/about-us"
                        onClick={handleNavigation}
                      >
                        Company Overview
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/about-us#science"
                        onClick={handleNavigation}
                      >
                        Science
                      </MobileMenuLink>
                      <MobileMenuLink
                        href="/about-us#history"
                        onClick={handleNavigation}
                      >
                        History
                      </MobileMenuLink>
                      <MobileMenuLink href="/#team" onClick={handleNavigation}>
                        Team
                      </MobileMenuLink>
                      <MobileMenuLink href="#" onClick={handleNavigation}>
                        Webinars
                      </MobileMenuLink>
                      <MobileMenuLink href="#" onClick={handleNavigation}>
                        Conferences
                      </MobileMenuLink>
                    </div>
                  </MobileMenuItem>

                  <button className="w-full px-6 py-3 mt-6 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-full font-medium transition-all duration-300 shadow-md">
                    Request Demo
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

const MainMenuLink: React.FC<MainMenuLinkProps> = ({
  href,
  children,
  onClick,
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative text-gray-200 dark:text-gray-200 font-medium hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors py-2 overflow-hidden group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const DesktopMenuItem: React.FC<DesktopMenuItemProps> = ({
  title,
  children,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="relative text-gray-200 dark:text-gray-200 font-medium hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 py-2 overflow-hidden group">
        {title}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isActive ? "rotate-180 text-emerald-500" : ""
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
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4 z-50"
          >
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-xl border border-gray-700 dark:border-gray-700 overflow-hidden min-w-[320px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-2 text-gray-300 dark:text-gray-300 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors"
  >
    <div className="flex items-center group">
      <span className="w-0 h-0.5 bg-emerald-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
      {children}
    </div>
  </Link>
);

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-800 dark:border-gray-800 pb-4">
      <button
        className="w-full flex justify-between items-center py-3 text-gray-200 dark:text-gray-200 font-medium"
        onClick={onClick}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-5 h-5 text-emerald-500"
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
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({
  href,
  children,
  onClick,
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-2 pl-4 text-gray-300 dark:text-gray-300 hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors"
  >
    <div className="flex items-center">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 opacity-0 group-hover:opacity-100"></span>
      {children}
    </div>
  </Link>
);

const TopBanner = () => (
  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex items-center justify-between">
        <span className="text-white/90 text-sm hidden sm:block">
          Leading in antimicrobial resistance detection
        </span>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/blog"
            className="text-white/90 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link href={"/for-partners"} className="text-white/90 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
