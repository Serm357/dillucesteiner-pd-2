import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
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
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Profound Breast
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Research
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Publications
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-primary uppercase ">
              For Patients
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  AI powered Mammogram
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Resources
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-primary uppercase ">
              About US
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Team
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  History
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Science
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Webinars
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Careers
                </a>
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
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Status
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none text-xl font-semibold dark:text-white"
                  href="#"
                  aria-label="Brand"
                >
                  Diluc steinner
                </a>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                  © {new Date().getFullYear()} Diluc steinner.
                </p>
              </div>

              {/* <!-- Social Brands --> */}
              <div className="space-x-4">
                <a
                  className="inline-block text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="#"
                >
                  <TwitterLogoIcon />
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="#"
                >
                  <InstagramLogoIcon />
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  href="#"
                >
                  <LinkedInLogoIcon />
                </a>
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
