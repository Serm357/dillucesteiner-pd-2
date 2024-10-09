// "use client";

// import { useTheme } from "next-themes";
// import { useRouter } from "next/router";

const FooterImage = () => {
  // const { theme, systemTheme } = useTheme();

  // const { push } = useRouter();
  // const handleClick = () => {
  //   push("/");
  // };
  return (
    <a href="/">
      <img
        src="/ditekta-logo.png"
        width={80}
        height={80}
        alt="Diluc logo"
        className="size-20  ml-1 cursor-pointer"
      />
    </a>
  );
};

export default FooterImage;
