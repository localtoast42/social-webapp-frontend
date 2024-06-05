import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Post({ post }) {

  return (
    <div className="flex gap-x-4 py-5">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="" alt="" />
      <div className="flex-auto">
        <div className="flex items-baseline justify-between gap-x-4">
          <NavLink 
            to={post.author.url}
            className="text-sm font-semibold leading-6 text-gray-900">
            {post.author.fullName}
          </NavLink>
          <p className="flex-none text-xs text-gray-600">
            <time dateTime={post.dateTime}>{post.date}</time>
          </p>
        </div>
        <p className="mt-1 text-sm leading-6 text-gray-600">{post.text}</p>
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post