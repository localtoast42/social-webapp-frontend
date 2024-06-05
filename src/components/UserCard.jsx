import PropTypes from 'prop-types';
import { Form, NavLink } from 'react-router-dom';

function UserCard({ user, isFollowing }) {

  return (
    <li className="flex items-center justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user.imageUrl} alt="" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{user.fullName}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.username}</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        {!isFollowing && 
          <Form method="post" action={`${user.url}/follow`} className="flex">
            <button
              type="submit"
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Follow
            </button>
          </Form>
        }
        {isFollowing && 
          <Form method="post" action={`${user.url}/unfollow`} className="flex">
            <button
              type="submit"
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Unfollow
            </button>
          </Form>
        }
        <NavLink
          to={user.url}
          className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View
        </NavLink>
      </div>
    </li>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  isFollowing: PropTypes.bool
}

export default UserCard