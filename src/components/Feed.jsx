import Post from "./Post";
import { useLoaderData } from "react-router-dom";

function Feed() {
  const { posts } = useLoaderData();

  return (
    <div>
      {posts.map(post => <Post 
        key={post.id}
        post={post} />
      )}
    </div>
  )
}

export default Feed