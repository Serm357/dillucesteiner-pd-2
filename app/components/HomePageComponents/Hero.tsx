import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-[url('/vid2.gif')] bg-no-repeat bg-cover bg-center p-4 text-center">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex-1 mt-3 bg-primary-foreground rounded-md flex flex-col justify-center items-center">
          <h1 className="mt-5 text-center font-bold text-xl text-slate-700 dark:text-slate-200">
            Creating a world where <br className="md:idden" />{" "}
            <span className="text-5xl md:text-4xl lg:text-5xl text-primary">
              Cancer Can’t Hide.
            </span>
          </h1>
          <p className="text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            incidunt necessitatibus, doloremque ex veritatis maiores, cum dolor
            distinctio dignissimos illum nostrum minima deleniti sed quod
            architecto molestiae a facilis exercitationem.
          </p>
        </div>
        <div className="">
          <Image
            src="/female_cutout.webp"
            alt="female cutout"
            fill

            //  className="absolute left-0 bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
