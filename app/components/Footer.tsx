import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FacebookIcon, Mail } from "lucide-react";
import Link from "next/link";
import FooterImage from "./FooterImage";

export default function Footer() {
  return (
    <section>
      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-6 w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden md:col-span-1  md:flex flex-col items-center justify-center">
            <div
              // className="flex-none text-xl font-semibold text-primary"
              // href="/"
              aria-label="Brand"
            >
              <FooterImage />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-white dark:text-neutral-400">
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
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-providers/amr-insights"
                >
                  AMR insights
                </Link>
              </p>
              <div>
                <p className="inline-flex gap-x-2 text-white   dark:text-neutral-400">
                  Research{" "}
                  <span className=" text-xs text-primary">- coming soon</span>
                </p>
              </div>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-providers/service-support"
                >
                  Services & Support
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
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/for-patients"
                >
                  AI system
                </Link>
              </p>
              <div>
                <h4 className="inline-flex gap-x-2 text-white dark:text-neutral-400 ">
                  Resources{" "}
                  <span className=" text-xs text-primary">- coming soon</span>
                </h4>
              </div>
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
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/#team"
                >
                  Team
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/about-us#history"
                >
                  History
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/about-us/#science"
                >
                  Science
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}
          {/* <!-- End Col --> */}

          <div>
            <p className="text-xs font-semibold text-primary uppercase ">
              LOCATION
            </p>

            <div className="mt-3 grid space-y-2 text-sm">
              <div>
                <p className="inline-flex gap-x-2 text-white   dark:text-neutral-400 ">
                  Ditekta ,
                </p>
              </div>
              <div>
                <p className="inline-flex gap-x-2 text-white   dark:text-neutral-400 ">
                  Pugu road, Ilala Dar es Saalam,
                </p>
              </div>
              <div>
                <p className="inline-flex gap-x-2 text-white  dark:text-neutral-400 ">
                  United Republic of Tanzania.
                </p>
              </div>
              <p>
                <Link
                  className="hover:scale-105 gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-500 flex items-center justify-start"
                  href="mailto:info@dilucsteiner.com"
                >
                  <Mail className="size-4" /> info@dilucsteiner.com
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="pt-5 mt-5 border-t border-green-200 dark:border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3">
              <div className="space-x-4 text-sm ms-4">
                <Link
                  className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="/privacy"
                >
                  Terms & Privacy
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="mt-3 sm:hidden flex gap-1 items-center justify-center">
                <div
                  className="flex-none text-xl font-semibold dark:text-white"
                  // href="/"
                  aria-label="Brand"
                >
                  <FooterImage />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-white dark:text-neutral-400">
                  © {new Date().getFullYear()} Ditekta .
                </p>
              </div>

              {/* <!-- Social Brands --> */}
              <div className="space-x-4">
                <Link
                  className="inline-block text-xs size-xs text-gray-500 hover:text-green-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="https://www.facebook.com/dilucsteiner/"
                  target="_blank"
                >
                  <FacebookIcon className="size-4" />
                </Link>
                <Link
                  className="inline-block text-gray-500 hover:text-green-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="https://x.com/dilucsteiner"
                  target="_blank"
                >
                  <TwitterLogoIcon />
                </Link>
                <Link
                  className="inline-block text-gray-500 hover:text-green-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="https://www.instagram.com/dilucsteiner"
                  target="_blank"
                >
                  <InstagramLogoIcon />
                </Link>
                <Link
                  className="inline-block text-gray-500 hover:text-green-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="http://linkedin.com/company/dilucsteiner"
                  target="_blank"
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
