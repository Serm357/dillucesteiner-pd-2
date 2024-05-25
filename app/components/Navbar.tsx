import Link from "next/link";
import { ModeToggle } from "./ModeToggler";
import { ChevronRight, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavMenu } from "./NavMenu";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { MobileMenu } from "./MobileMenu";
const Navbar = () => {
  return (
    <>
      <AnnouncementBanner />
      <LinksBanner />
      <header className="sticky top-0 z-[50]  h-16 items-center  gap-4 border-b bg-background px-4 md:px-6  shadow-[1px] shadow-primary">
        <MaxWidthWrapper className="flex items-center">
          <h1 className="text-2xl mr-5 hidden md:block font-bold text-primary">
            Dillucesteinner
          </h1>
          <div className="hidden md:block">
            <NavMenu />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <MobileMenu />
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <h1 className="text-2xl ml-5 md:hidden font-bold text-primary">
              Dillucesteinner
            </h1>
          </div>
          <div className="w-fit">
            {" "}
            <ModeToggle />
          </div>
        </MaxWidthWrapper>
      </header>
    </>
  );
};

export default Navbar;

function AnnouncementBanner() {
  return (
    <div className="max-w-[85rem] ">
      <div className="bg-blue-600 w-full bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 text-center">
        <p className="me-2 inline-block text-white">
          New Webinar <span className="mx-1 text-yellow-300 font-bold">|</span>
          Revolutionizing Susceptibility Testing: ​The Role of AI in
          Microbiology.<span className="mx-1 text-yellow-300 font-bold">|</span>
          June 22, 2024 9:00 am PT
          <span className="mx-1 text-yellow-300 font-bold">•</span>12:00 pm EAT
        </p>
        <Link
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
          href="/webinars"
        >
          Save Your Seat
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
const links = [
  { title: "Contact Us", value: "/contact" },
  { title: "Blog", value: "/blog" },
  // { title: "Login", value: "/login" },
];
function LinksBanner() {
  return (
    <div className="block bg-gray-100  p-2 text-center transition-all duration-300 dark:bg-white/10 dark:hover:bg-white/10">
      <div className="flex justify-end pr-3 mr-3">
        <div className="me-2 inline-block text-sm text-gray-800 dark:text-neutral-200">
          {links.map((lnk) => (
            <Link
              href={lnk.title}
              key={lnk.value}
              className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-1 py-1"
            >
              {lnk.title}
            </Link>
          ))}
          <span className="mx-1 text-primary">|</span>
        </div>
        <Link
          href="/login"
          className="hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500"
        >
          Login Now
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
