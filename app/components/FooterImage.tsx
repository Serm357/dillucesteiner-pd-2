import Link from "next/link";

const FooterImage = () => {
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
