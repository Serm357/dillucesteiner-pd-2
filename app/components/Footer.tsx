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
      <footer className="mt-auto w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <Link
              className="flex-none text-xl font-semibold text-primary"
              href="/"
              aria-label="Brand"
            >
              Dillucesteinner
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              &copy; {new Date().getFullYear()}.
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Product
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Changelog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Docs
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Company
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Careers
                </a>{" "}
                <span className="inline text-blue-600 dark:text-blue-500">
                  — We're hiring
                </span>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Customers
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Newsroom
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Sitemap
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Resources
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Community
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Help & Support
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  eBook
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  What's New
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Status
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Developers
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Api
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Status
                </a>
              </p>
            </div>

            <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Industries
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Financial Services
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Education
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3">
              <div className="space-x-4 text-sm ms-4">
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Terms
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
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
                  Dillucesteinner
                </a>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                  © {new Date().getFullYear()} Dillucesteinner.
                </p>
              </div>

              {/* <!-- Social Brands --> */}
              <div className="space-x-4">
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                  href="#"
                >
                  <TwitterLogoIcon />
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                  href="#"
                >
                  <InstagramLogoIcon />
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
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
