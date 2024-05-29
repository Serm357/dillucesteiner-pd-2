"use client";
import dynamic from "next/dynamic";
import React from "react";
import "react-multi-carousel/lib/styles.css";
const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <main className="max-w-[85rem] h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        // containerClass="carousel-container"
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <Testimonial
          imgSrc="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80"
          clientQuote="Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."
          clientName="Rwenzori rwanchungura"
          clientPosition="Medical doctor"
          clientCompany="Muhimbili"
        />
        <Testimonial
          imgSrc="/female_cutout.webp"
          clientQuote="gjfjfjewjfkdsjfkjsfhiofh mafiwio jjfiw."
          clientName="Mamito mtori"
          clientPosition="Nurse"
          clientCompany="Muhimbili"
        />
        <Testimonial
          imgSrc="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80"
          clientQuote="Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."
          clientName="Rwenzori rwanchungura"
          clientPosition="Medical doctor"
          clientCompany="Bugando Medical Center"
        />
      </Carousel>
    </main>
  );
};

export default Testimonials;

function Testimonial({
  imgSrc,
  clientQuote,
  clientName,
  clientPosition,
  clientCompany,
}: {
  imgSrc: string;
  clientQuote: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
}) {
  return (
    <>
      {/* <!-- Grid --> */}
      <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center size-full">
        <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
          <div className="relative">
            <img className="rounded-xl" src={imgSrc} alt="Image Description" />

            {/* <!-- SVG Element --> */}
            <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
              <svg
                className="max-w-40 h-auto text-gray-400 dark:text-neutral-700"
                width="696"
                height="653"
                viewBox="0 0 696 653"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
                <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
                <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
                <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
                <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
                <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
                <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
                <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
                <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
                <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
                <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
                <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
                <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
              </svg>
            </div>
            {/* <!-- End SVG Element --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          {/* <!-- Blockquote --> */}
          <blockquote className="relative">
            <svg
              className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200 dark:text-neutral-700"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>

            <div className="relative z-10">
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
                Featured client
              </p>

              <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-200">
                {clientQuote}
              </p>
            </div>

            <footer className="mt-6">
              <div className="flex items-center">
                <div className="md:hidden flex-shrink-0">
                  <img
                    className="size-12 rounded-full"
                    src={imgSrc}
                    alt="Image Description"
                  />
                </div>
                <div className="ms-4 md:ms-0">
                  <div className="text-base capitalize font-semibold text-gray-800 dark:text-neutral-200">
                    {clientName}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-neutral-400">
                    {clientPosition} | {clientCompany}
                  </div>
                </div>
              </div>
            </footer>

            <div className="mt-8 lg:mt-14">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
                href="#"
              >
                Read the story
              </a>
            </div>
          </blockquote>
          {/* <!-- End Blockquote --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </>
  );
}
