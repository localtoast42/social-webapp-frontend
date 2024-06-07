import Comment from './Comment';
import NewComment from './NewComment';
import { NavLink, useLoaderData, useFetcher } from 'react-router-dom';

function Post() {
  const { post } = useLoaderData();
  const comments = post.comments;
  const fetcher = useFetcher();

  const like = fetcher.formData 
    ? fetcher.formData.get("like") === "true"
    : post.isLiked;
  
  const numLikes = fetcher.formData 
    ? (fetcher.formData.get("like") === "true" ? post.numLikes + 1 : post.numLikes - 1)
    : post.numLikes;

  return (
    <div className="flex justify-center">
      <div className="grow max-w-xl py-8">
        <div className="flex gap-x-4 py-2">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="" alt="" />
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <div className="flex flex-col">
                <NavLink
                  to={post.author.url}
                  className="font-semibold leading-6 text-gray-900"
                >
                  {post.author.fullName}
                </NavLink>
                <NavLink
                  to={post.author.url}
                  className="leading-6 text-gray-700"
                >
                  {`@${post.author.username}`}
                </NavLink>
              </div>
              <p className="flex-none text-sm text-gray-600">
                <time dateTime={post.dateTime}>{post.date}</time>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-1 leading-6 text-gray-600">{post.text}</p>
          <div className="flex mt-2 gap-x-4">
            <div className="flex items-center gap-x-1">
              <fetcher.Form method="post" action={`/posts/${post.id}/like`} className="flex items-center">
                <button
                  name="like"
                  value={like ? "false" : "true"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill={like ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </fetcher.Form>
              <p className="text-gray-900">{numLikes}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </button>
              <p className="text-gray-900">{post.numComments}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <NewComment postId={post.id}></NewComment>
          </div>
          <div className="mt-4 flex flex-col divide-y divide-gray-300">
            {comments.map(comment => <Comment
              key={comment.id}
              comment={comment} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post