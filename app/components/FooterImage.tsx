"use client";

import { useTheme } from "next-themes";

const FooterImage = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme == "dark" && (
        <img src="/logos/steiner-2.png" className="w-20 h-auto ml-5" />
      )}
      {theme == "light" && (
        <img src="/logos/steiner-1.png" className="w-20 h-auto ml-5" />
      )}
    </>
  );
};

export default FooterImage;
