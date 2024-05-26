import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[78vh] overflow-hidden bg-[url('/vid2.gif')] bg-no-repeat bg-cover bg-center p-4 text-center">
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <div className="hidden min-w-[230px] md:block h-full">
          <Image
            src="/female_cutout.webp"
            alt="female cutout"
            width={150}
            height={150}
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 py-2 pb-2 mt-3  bg-primary-foreground rounded-md flex flex-col justify-center items-center md:min-w-[400px]">
          <h1 className="mt-5 text-center font-bold text-xl text-slate-700 dark:text-slate-200">
            Creating a world where <br className="md:idden" />{" "}
            <span className="text-5xl md:text-4xl lg:text-5xl text-primary">
              Cancer Can’t Hide.
            </span>
          </h1>
          <p className="text-md text-center text-sm font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            incidunt necessitatibus, doloremque ex veritatis maiores, cum dolor
            distinctio dignissimos illum nostrum minima deleniti sed quod
            architecto molestiae a facilis exercitationem.
          </p>
          <button className="uppercase px-2 py-3 bg-blue-600 rounded-lg font-bold my-2">
            learn how dillucesteinner finds cancer
          </button>
        </div>
        <div className="w-[200px] h-[200px] md:w-[270px] md:h-[300px]  flex flex-col items-center justify-center">
          <Image
            src="/female_cutout.webp"
            alt="female cutout"
            width={150}
            height={150}
            className="w-full md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
