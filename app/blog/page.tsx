import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/app/components/HomePageComponents/getPostMetadata";

export const revalidate = 60 * 60 * 24 * 7;

const AllBlogsPage = () => {
  const postMetadata = getPostMetadata();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dive into technical explorations and cutting-edge development
            concepts.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postMetadata.map((post) => (
            <div
              key={post.slug}
              className="group relative transform transition duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              <div className="h-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30">
                <PostPreview
                  {...post}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Hungry for more knowledge?</p>
          <button className="relative inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
            <span>Explore Archive</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
