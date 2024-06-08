import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link
      className="group relative block rounded-xl"
      href={`/blog/posts/${props.slug}`}
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-[200px] before:bg-gradient-to-t before:from-gray-900/70">
        <Image
          width={350}
          height={350}
          // loading="lazy"
          className="size-full absolute top-0 start-0 object-cover"
          src={props.blogImage}
          alt="Blog Image"
        />
      </div>

      <div className="absolute top-0 inset-x-0 z-10">
        <div className="p-4 flex flex-col h-full sm:p-6">
          {/* <!-- Avatar --> */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                width={46}
                height={46}
                loading="lazy"
                alt="Blog Author"
                className="size-[46px] border-2 border-white rounded-full"
                src="/2.jpg"
              />
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">Yohana Laurent</h4>
              <p className="text-xs text-white/80">{props.date}</p>
            </div>
          </div>
          {/* <!-- End Avatar --> */}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
            {props.title}
          </h3>
          <p className="mt-2 text-white/80">{props.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
