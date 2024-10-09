// "use client";

import Link from "next/link";

// import { useTheme } from "next-themes";
// import { useRouter } from "next/router";

const FooterImage = () => {
  // const { theme, systemTheme } = useTheme();

  // const { push } = useRouter();
  // const handleClick = () => {
  //   push("/");
  // }
  return (
    <Link href="/">
      <img
        src="/ditekta-logo.png"
        width={80}
        height={80}
        alt="Diluc logo"
        className="w-40 h-30  sm:ml-1 cursor-pointer"
      />
    </Link>
  );
};

export default FooterImage;
