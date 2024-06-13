import dynamic from "next/dynamic";
import PartnerFoam from "./components/PartnerFoam";

const PortalBgCard = dynamic(() => import("./components/PortalBgCard"), {
  ssr: false,
});

const PatnersPage = () => {
  return (
    <div className="w-full">
      <PortalBgCard
        images={["/1.png", "/2.jpg", "/3.jpg"]}
        title="For Partners."
        subtitle="Together, we are creating a world where AMR can’t hide."
        linkText="Become a Patner →"
      />

      <div className="w-full">
        <h1 className="px-3 ml-2 mt-8 lg:mt-16 mx-3 capitalize font-bold text-3xl md:text-4xl text-primary my-3">
          Become a
          <span className="text-black dark:text-orange-500 mx-1">
            {" "}
            Diluc partner
          </span>
        </h1>
        <p className="px-3 ml-2 prose md:prose-lg lg:prose-xl dark:text-gray-200 my-6 mx-3 leading-normal">
          We partner with industry leaders across Platforms, Research,
          Integration, and Advocacy organizations. We’d love to connect with you
          to see how our organizations can best work together to beat AMR
        </p>
        <PartnerFoam />
      </div>
    </div>
  );
};

export default PatnersPage;
