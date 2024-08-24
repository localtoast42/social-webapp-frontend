import PostCard from "./PostCard";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Feed() {
  const { posts } = useLoaderData();

  const user = useContext(UserContext);

  return (
    <div className="grow max-w-xl">
      <div className="flex flex-col divide-y divide-gray-300">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isLiked={post.likes.includes(user.id)}
          />
        ))}
        {posts.length === 0 && (
          <div className="flex gap-x-4 py-6 px-3">
            <div>
              <h2 className="px-3 font-semibold text-2xl">
                No posts to show...
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feed;
