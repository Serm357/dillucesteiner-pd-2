import Link from "next/link";

export default function CTA() {
  return (
    <div className="m-0">
      <div className=" py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate -full  overflow-hidden bg-[url('https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80')] bg-no-repeat bg-cover bg-center px-6 p-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h1 className="text-4xl capitalize text-primary font-bold tracking-tight  md:text-5xl">
              Susceptibility testing has finally met its match.
              <br />
            </h1>
            <h3 className="text-lg sm:text-2xl">
              Know where cancer may be hiding and when it might make its move.
            </h3>
            <p className="mt-6 text-2xl leading-8 ">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/clients"
                className="rounded-md bg-blue-400 px-3.5 py-2.5 text-xl font-bold  shadow-primary-foreground hover:bg-blue-500 transition-colors shadow-md "
              >
                For Clients <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/providers"
                className="rounded-md bg-primary px-3.5 py-2.5 text-xl font-bold  shadow-primary-foreground hover:opacity-70 transition-colors shadow-md "
              >
                For Providers<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
