"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const testimonialsArray: {
    imgSrc: string;
    clientQuote: string;
    clientName: string;
    clientPosition: string;
    clientCompany?: string;
  }[] = [
    {
      imgSrc: "/baraka.png",
      clientQuote:
        "I'm looking forward to the release of Ditekta 's AI-driven technology. Its precision in identifying antimicrobial resistance at a cellular level promises to improve our ability to prescribe targeted treatments, thereby reducing antibiotic misuse. This advancement has the potential to make a significant contribution to global efforts in combating resistant infections and improving patient care",
      clientName: "Baraka Karamba ",
      clientPosition: "Pharmaceutical Chemist",
      clientCompany: "Community Pharmacy",
    },
    {
      imgSrc: "/sam.png",
      clientQuote:
        " The innovative AI solutions being developed by Ditekta  could be a game-changer in the fight against antimicrobial resistance. With its capacity to analyze extensive datasets and accurately identify resistance trends, this technology is poised to support more effective public health interventions and prevent outbreaks. I'm excited to see its impact on community health.",
      clientName: "Samwel Malangwa",
      clientPosition: "pre-Undergraduate Pharmacist",
      clientCompany: "Kampala University",
    },
    {
      imgSrc: "/hosiana.png",
      clientQuote:
        "The upcoming AI platform from Ditekta  holds great promise for enhancing our healthcare systems. Its ability to integrate seamlessly with existing infrastructure and provide data-driven insights could transform our approach to managing AMR. I believe this technology will set a new benchmark in healthcare efficiency and patient care",
      clientName: "Hosiana Somi",
      clientPosition: "Tech Enthusiast",
      clientCompany: "AI",
    },
    {
      imgSrc: "/ema.png",
      clientQuote:
        " I am eagerly anticipating the release of Ditekta 's AI technology. Its potential to revolutionize how we detect and manage antimicrobial resistance is immense. By providing accurate, real-time insights into resistance patterns, this technology promises to significantly improve treatment outcomes and reduce the spread of resistant infections.",
      clientName: "Emmanuel Kessy",
      clientPosition: "pre-undergraduate Microbiologist",
      clientCompany: "Kampala University",
    },
  ];

  return (
    <section
      id="#testimonial"
      className="min-h-screen flex flex-col gap-3 items-center justify-center"
    >
      <h1 className="font-bold capitalize m-3 text-center lg:my-6 md:text-6xl text-4xl bg-clip-text text-[var(--dilucttl)] py-2">
        here is what our colleagues say
      </h1>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full max-w-[23rem] mx-2 md:max-w-md lg:max-w-4xl  "
      >
        <CarouselContent>
          {testimonialsArray.map((singleTestimonial) => (
            <CarouselItem key={singleTestimonial.clientName}>
              <Card className="border-none border-0  ">
                <CardContent className="lg:aspect-video aspect-square  ">
                  <Testimonial
                    imgSrc={singleTestimonial.imgSrc}
                    clientQuote={singleTestimonial.clientQuote}
                    clientName={singleTestimonial.clientName}
                    clientPosition={singleTestimonial.clientPosition}
                    clientCompany={singleTestimonial.clientCompany}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-[var(--dilucttl)]" />
        <CarouselNext className="border border-[var(--dilucttl)]" />
      </Carousel>
      <div className="pb-2 pt-0 text-center text-sm text-muted-foreground">
        <span className="text-primary">{current}</span> / {count}
      </div>
    </section>
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
  clientCompany?: string;
}) {
  return (
    <>
      {/* <!-- Grid --> */}
      <div className="lg:grid h-fit lg:grid-cols-2 mt-6 md:mt-12 flex flex-col items-center justify-center lg:gap-16 lg:items-center size-full">
        <div className="hidden lg:block mb-24 md:mb-0 sm:px-6">
          <div className="relative">
            <img
              className="rounded-full"
              src={imgSrc}
              alt="Image Description"
            />

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
              className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-[var(--dilucttl)] dark:text-orange-700"
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
              <p className=" prose max-sm:text-sm lg:text-lg prose-sm md:prose-md text-white my-2">
                {clientQuote}
              </p>
            </div>
            <svg
              className="absolute lg:bottom-0 bottom-11 lg:right-5 right-3 rotate-180 transform -translate-x-8 -translate-y-4 size-24 text-[var(--dilucttl)] dark:text-orange-700"
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
            <footer className="mt-6">
              <div className="flex items-center">
                <div className="lg:hidden flex-shrink-0">
                  <img
                    className="size-20 rounded-full"
                    src={imgSrc}
                    alt="Image Description"
                  />
                </div>
                <div className="ms-4 md:ms-2">
                  <div className="text-base capitalize font-semibold text-primary">
                    {clientName}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {clientPosition} | {clientCompany}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
          {/* <!-- End Blockquote --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </>
  );
}
