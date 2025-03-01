"use client"
import { AnimatedTestimonials } from "./AnimatedTestimonial";

export default function Testimonials() {

  const testimonials = [
    {
      quote:
        "I'm looking forward to the release of Ditekta's AI-driven technology. Its precision in identifying antimicrobial resistance at a cellular level promises to improve our ability to prescribe targeted treatments, thereby reducing antibiotic misuse. This advancement has the potential to make a significant contribution to global efforts in combating resistant infections and improving patient care",
      name: "Baraka Karamba",
      designation: "Pharmaceutical Chemist at Community Pharmacy",
      company: "Community Pharmacy",
      src: "/baraka.png",
    },
    {
      quote:
        "The innovative AI solutions being developed by Ditekta could be a game-changer in the fight against antimicrobial resistance. With its capacity to analyze extensive datasets and accurately identify resistance trends, this technology is poised to support more effective public health interventions and prevent outbreaks. I'm excited to see its impact on community health.",
      name: "Samwel Malangwa",
      designation: "pre-Undergraduate Pharmacist at Kampala University",
      company: "Kampala University",
      src: "/sam.png",
    },
    {
      quote:
        "The upcoming AI platform from Ditekta holds great promise for enhancing our healthcare systems. Its ability to integrate seamlessly with existing infrastructure and provide data-driven insights could transform our approach to managing AMR. I believe this technology will set a new benchmark in healthcare efficiency and patient care",
      name: "Hosiana Somi",
      designation: "Tech Enthusiast | AI",
      company: "AI",
      src: "/hosiana.png",
    },
    {
      quote:
        "I am eagerly anticipating the release of Ditekta's AI technology. Its potential to revolutionize how we detect and manage antimicrobial resistance is immense. By providing accurate, real-time insights into resistance patterns, this technology promises to significantly improve treatment outcomes and reduce the spread of resistant infections.",
      name: "Emmanuel Kessy",
      designation: "pre-undergraduate Microbiologist at Kampala University",
      company: "Kampala University",
      src: "/ema.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
