import NewPost from "./NewPost";
import defaultAvatar from '../assets/defaultAvatar.svg';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Outlet, useLoaderData, useFetcher } from "react-router-dom";

function UserProfile() {
  const user = useContext(UserContext)
  const { profile } = useLoaderData();
  const fetcher = useFetcher();

  const userOwnedPage = user.id === profile.id;
  const avatarUrl = profile.imageUrl ? profile.imageUrl : defaultAvatar;

  return (
    <div className="flex justify-center">
      <div className="grow max-w-48 py-6">
        <img className="object-cover h-24 w-24 flex-none rounded-full bg-gray-100" src={avatarUrl} alt="" />
        <p className="mt-2 text-xl leading-6 font-bold">{profile.fullName}</p>
        <p className="mt-1 truncate leading-5 text-gray-500">{`@${profile.username}`}</p>
        {!userOwnedPage && (
          profile.followedByMe 
            ? <fetcher.Form method="post" action={`/users/unfollow/${profile.id}`} className="flex">
                <button
                  type="submit"
                  name="targetId"
                  value={profile.id}
                  className="mt-2 rounded-full bg-red-500 px-2.5 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600"
                >
                  Unfollow
                </button>
              </fetcher.Form>
            : <fetcher.Form method="post" action={`/users/follow/${profile.id}`} className="flex">
                <button
                  type="submit"
                  name="targetId"
                  value={profile.id}
                  className="mt-2 rounded-full bg-white px-2.5 py-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  + Follow
                </button>
              </fetcher.Form>
          )
        }
      </div>
      <div className="grow max-w-xl divide-y divide-gray-300 border border-gray-300">
        <header className="py-6">
          <div className="px-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{`${profile.firstName}'s Posts`}</h1>
          </div>
          {userOwnedPage && <NewPost />}
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <div className="grow max-w-48"></div>
    </div>
  )
}

export default UserProfile