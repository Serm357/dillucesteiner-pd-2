"use client";

import { useTheme } from "next-themes";

const FooterImage = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme == "dark" && (
        <img
          src="/logos/steiner-2.png"
          width={80}
          height={80}
          alt="Diluc logo"
          className="size-20  ml-1"
        />
      )}
      {theme == "light" && (
        <img
          src="/logos/steiner-1.png"
          width={80}
          height={80}
          alt="Diluc logo"
          className="size-20  ml-1"
        />
      )}
    </>
  );
};

export default FooterImage;
