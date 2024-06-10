import getPostMetadata from "@/components/getPostMetadata";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ArrowBigRight, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

const ImageSlider = () => {
  const blogs = getPostMetadata();
  const firstBlog = blogs[0];
  const secondBlog = blogs[1];
  const thirdBlog = blogs[2];

  return (
    <div className="px-4 md:px-6 lg:px-8 py-10">
      <div
        data-hs-carousel='{
      "loadingclassNamees": "opacity-0"
    }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* <!-- Item --> */}
            <div className="hs-carousel-slide">
              <div
                style={{
                  backgroundImage: `url(${firstBlog.blogImage})`,
                }}
                className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col  bg-cover bg-center bg-no-repeat"
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white"> {firstBlog.title}.</span>
                  <span className="block text-white text-xl md:text-3xl truncate">
                    {firstBlog.subtitle}
                  </span>
                  <div className="mt-5">
                    <Link
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href={`/blog/posts/${firstBlog.slug}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <div className="hs-carousel-slide">
              <div
                style={{
                  backgroundImage: `url(${secondBlog.blogImage})`,
                }}
                className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-cover bg-center bg-no-repeat"
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white"> {secondBlog.title}.</span>
                  <span className="block text-white text-xl md:text-3xl">
                    {secondBlog.subtitle}.
                  </span>
                  <div className="mt-5">
                    <Link
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href={`/blog/posts/${secondBlog.slug}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <div className="hs-carousel-slide">
              <div
                style={{
                  backgroundImage: `url(${thirdBlog.blogImage})`,
                }}
                className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-cover bg-center bg-no-repeat"
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">{thirdBlog.title}.</span>
                  <span className="block text-white text-xl md:text-3xl">
                    {thirdBlog.subtitle}.
                  </span>
                  <div className="mt-5">
                    <Link
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href={`/blog/posts/${thirdBlog.slug}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}
          </div>
        </div>

        {/* <!-- Arrows --> */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl font-bold  bg-opacity-70 bg-white size-12 rounded-full text-center flex items-center justify-center">
            <ChevronLeftIcon className="flex-shrink-0 size-8 md:size-12 font-bold text-orange-500" />
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span
            className="text-2xl font-bold  bg-opacity-70 bg-white size-12 rounded-full text-center flex items-center justify-center"
            aria-hidden="true"
          >
            <ChevronRightIcon className="flex-shrink-0 size-8 md:size-12 font-bold text-orange-500" />
          </span>
        </button>
        {/* <!-- End Arrows --> */}
      </div>
    </div>
    // <!-- End Slider -->
  );
};

export default ImageSlider;
