import PostCard from "./PostCard";
import { useLoaderData } from "react-router-dom";

function Feed() {
  const { posts } = useLoaderData();

  return (
    <div className="grow max-w-xl">
      <div className="mt-4 flex flex-col divide-y divide-gray-300">
        {posts.map(post => <PostCard
          key={post.id}
          post={post} />
        )}
      </div>
    </div>
  )
}

export default Feed