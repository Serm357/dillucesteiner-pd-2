import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-6 w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="col-span-full hidden md:col-span-1 md:block ">
            <Link
              className="flex-none text-xl font-semibold text-primary"
              href="/"
              aria-label="Brand"
            >
              Diluc steinner
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              &copy; {new Date().getFullYear()}.
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-primary uppercase ">
              For Providers
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-providers/amr-insights"
                >
                  AMR insights
                </Link>
              </p>
              <div>
                <p className="inline-flex gap-x-2 text-gray-600   dark:text-neutral-400">
                  Research
                </p>
              </div>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-providers/services"
                >
                  Services
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <Link
              href="/for-patients"
              className="text-xs font-semibold text-primary uppercase "
            >
              For Patients
            </Link>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-patients/ai-powered-system"
                >
                  AI powered system
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-patients/resources"
                >
                  Resources
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <Link
              href="/about-us"
              className="text-xs font-semibold text-primary uppercase "
            >
              About US
            </Link>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/#team"
                >
                  Team
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/about-us#history"
                >
                  History
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/about-us/#science"
                >
                  Science
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3">
              <div className="space-x-4 text-sm ms-4">
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/privacy"
                >
                  Terms & Privacy
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="mt-3 sm:hidden">
                <Link
                  className="flex-none text-xl font-semibold dark:text-white"
                  href="/"
                  aria-label="Brand"
                >
                  Diluc steinner
                </Link>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                  © {new Date().getFullYear()} Diluc steinner.
                </p>
              </div>

              {/* <!-- Social Brands --> */}
              <div className="space-x-4">
                <Link
                  className="inline-block text-xs size-xs text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="https://www.facebook.com/dilucsteiner/"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  className="inline-block text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="https://x.com/dilucsteiner"
                >
                  <TwitterLogoIcon />
                </Link>
                <Link
                  className="inline-block text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="https://www.instagram.com/dilucsteiner"
                >
                  <InstagramLogoIcon />
                </Link>
                <Link
                  className="inline-block text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="http://linkedin.com/company/dilucsteiner"
                >
                  <LinkedInLogoIcon />
                </Link>
              </div>
              {/* <!-- End Social Brands --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
        </div>
      </footer>
      {/* <!-- ========== END FOOTER ========== --> */}
    </section>
  );
}
