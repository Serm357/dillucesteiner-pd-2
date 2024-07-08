import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <main className="mx-3">
      <div className="min-h-[80vh] w-full flex flex-col md:flex-row">
        <div className="flex-[1] md:flex-[3] relative h-[450px] bg-[url('/bg/10.jpg')] bg-no-repeat bg-cover hover:cursor-pointer  group">
          <h1 className="font-bold text-4xl text-primary group-hover:hidden absolute bottom-2 left-2">
            For Providers.
          </h1>
          <div className="hidden group-hover:block absolute bottom-2 left-2 ">
            <h1 className="font-bold text-4xl text-primary">For Providers.</h1>
            <p className="font-bold text-black text-xs my-4  max-w-lg">
              At Diluc Steiner, our advanced technology is designed to uncover
              and expose antimicrobial resistance (AMR) hiding places with
              unparalleled accuracy and speed
            </p>
            <Link
              href="/for-providers/service-support"
              className="text-primary underline hover:scale-150 font-bold"
            >
              Lean How
            </Link>
          </div>
        </div>

        <div className="flex-[1] md:flex-[2] relative h-[450px] bg-[url('/bg/18.jpg')] bg-no-repeat bg-cover hover:cursor-pointer  group">
          <h1 className="font-bold text-4xl text-primary group-hover:hidden absolute bottom-2 left-2">
            For Patients.
          </h1>
          <div className="hidden group-hover:block absolute bottom-2 left-2 ">
            <h1 className="font-bold text-4xl text-primary">For Patients.</h1>
            <p className="font-bold text-black text-xs my-4  max-w-lg">
              By using our technology, patients can provide real-time data
              through regular health monitoring and reporting symptoms early.
              When patients use at-home diagnostic kits linked to our AI system,
              they can collect samples (like swabs or blood) and input symptoms
              into a user-friendly app. Our AI then analyzes these samples and
              symptoms for any signs of resistance.
            </p>
            <Link
              href="/for-patients"
              className="text-primary underline hover:scale-150 font-bold"
            >
              Lean How
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CTA;
