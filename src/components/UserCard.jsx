import defaultAvatar from "../assets/defaultAvatar.svg";
import PropTypes from "prop-types";
import { NavLink, useFetcher } from "react-router-dom";

function UserCard({ user, isFollowing }) {
  const fetcher = useFetcher();

  const avatarUrl = user.imageUrl ? user.imageUrl : defaultAvatar;

  return (
    <li className="flex items-center justify-between gap-x-6 px-3 py-3">
      <NavLink to={user.url} className="flex min-w-0 gap-x-4">
        <img
          className="object-cover h-12 w-12 rounded-full bg-gray-100"
          src={avatarUrl}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="font-semibold leading-6 text-gray-900">
            {user.fullName}
          </p>
          <p className="mt-1 truncate leading-5 text-gray-500">{`@${user.username}`}</p>
        </div>
      </NavLink>
      <div className="flex gap-x-2">
        {!isFollowing && (
          <fetcher.Form
            method="post"
            action={`follow/${user.id}`}
            className="flex"
          >
            <button
              type="submit"
              name="targetId"
              value={user.id}
              className="whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              + Follow
            </button>
          </fetcher.Form>
        )}
        {isFollowing && (
          <fetcher.Form
            method="post"
            action={`unfollow/${user.id}`}
            className="flex"
          >
            <button
              type="submit"
              name="targetId"
              value={user.id}
              className="rounded-full bg-red-500 px-2.5 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600"
            >
              Unfollow
            </button>
          </fetcher.Form>
        )}
      </div>
    </li>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  isFollowing: PropTypes.bool,
};

export default UserCard;
