import PropTypes from 'prop-types';
import { NavLink, useFetcher } from 'react-router-dom';

function Comment({ comment }) {
  const fetcher = useFetcher();

  const like = fetcher.formData 
    ? fetcher.formData.get("like") === "true"
    : comment.isLiked;
  
  const numLikes = fetcher.formData 
    ? (fetcher.formData.get("like") === "true" ? comment.numLikes + 1 : comment.numLikes - 1)
    : comment.numLikes;

  return (
    <div className="flex gap-x-4 py-2">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="" alt="" />
      <div className="flex-auto">
        <div className="flex items-baseline justify-between gap-x-4">
          <NavLink 
            to={comment.author.url}
            className="font-semibold leading-6 text-gray-900">
            {comment.author.fullName}
          </NavLink>
          <p className="flex-none text-sm text-gray-600">
            <time dateTime={comment.dateTime}>{comment.date}</time>
          </p>
        </div>
        <p className="mt-1 leading-6 text-gray-600">
          {comment.text}
        </p>
        <div className="flex mt-2 gap-x-4">
          <div className="flex items-center gap-x-1">
            <fetcher.Form method="post" action={`comments/${comment.id}/like`} className="flex items-center">
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
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment