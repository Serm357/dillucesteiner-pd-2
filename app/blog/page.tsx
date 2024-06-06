import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

const AllBlogsPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">{postPreviews}</div>
    </div>
  );
};

export default AllBlogsPage;
