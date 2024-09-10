import PostCard from "./PostCard";
import { useContext, useEffect, useState } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Feed() {
  const fetcher = useFetcher();
  const loaderData = useLoaderData();

  const user = useContext(UserContext);

  const limit = 10;
  const initialPage = 1;
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.getElementById("skip").value = page * limit;
  }, [page]);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      setPage((prevPage) => prevPage + 1);
      setHasMore(fetcher.data.posts.length === limit);
      setPosts((prevPosts) => [...prevPosts, ...fetcher.data.posts]);
    }
  }, [fetcher]);

  useEffect(() => {
    setPage(initialPage);
    setHasMore(loaderData.posts.length === limit);
    setPosts(loaderData.posts);
  }, [loaderData]);

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
        <fetcher.Form method="GET" className="flex justify-center">
          <input
            name="limit"
            id="limit"
            defaultValue={limit}
            readOnly
            className="hidden"
          />
          <input
            name="skip"
            id="skip"
            defaultValue={initialPage}
            readOnly
            className="hidden"
          />
          {hasMore ? (
            <button
              type="submit"
              className="flex-1 py-6 font-semibold bg-gray-100 hover:bg-gray-200"
            >
              Load more posts...
            </button>
          ) : (
            <div className="flex-1 flex justify-center py-6 bg-gray-50">
              No more posts to load
            </div>
          )}
        </fetcher.Form>
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
