"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const FooterImage = () => {
  const { theme, systemTheme } = useTheme();

  const { push } = useRouter();
  const handleClick = () => {
    push("/");
  };
  return (
    <>
      {theme == "light" && (
        <img
          src="/logos/steiner-1.png"
          width={80}
          height={80}
          alt="Diluc logo"
          onClick={handleClick}
          className="size-20  ml-1 cursor-pointer"
        />
      )}

      {theme == "dark" && (
        <img
          src="/logos/steiner-2.png"
          width={80}
          height={80}
          alt="Diluc logo"
          onClick={handleClick}
          className="size-20  ml-1 cursor-pointer"
        />
      )}
      {theme == "system" && systemTheme == "light" ? (
        <img
          src="/logos/steiner-1.png"
          width={80}
          height={80}
          alt="Diluc logo"
          onClick={handleClick}
          className="size-20  ml-1 cursor-pointer"
        />
      ) : theme == "system" && systemTheme == "dark" ? (
        <img
          src="/logos/steiner-2.png"
          width={80}
          height={80}
          alt="Diluc logo"
          onClick={handleClick}
          className="size-20  ml-1 cursor-pointer"
        />
      ) : (
        theme == "system" &&
        systemTheme == undefined && (
          <img
            src="/logos/steiner-1.png"
            width={80}
            height={80}
            alt="Diluc logo"
            onClick={handleClick}
            className="size-20  ml-1 cursor-pointer"
          />
        )
      )}
    </>
  );
};

export default FooterImage;
