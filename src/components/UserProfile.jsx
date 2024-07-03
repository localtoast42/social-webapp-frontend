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
      <div className="min-w-0 grow max-w-xl divide-y divide-gray-300 border border-gray-300">
        <header className="py-6">
          <div className="flex items-center px-6 gap-x-4">
            <img className="object-cover h-16 w-16 sm:h-24 sm:w-24 flex-none rounded-full bg-gray-100" src={avatarUrl} alt="" />
            <div className="grow sm:flex sm:justify-between items-center gap-x-4">
              <div>
                <p className="mt-2 text-xl leading-6 font-bold">{profile.fullName}</p>
                <p className="mt-1 truncate leading-5 text-gray-500">{`@${profile.username}`}</p>
              </div>
              {!userOwnedPage && (
                profile.followedByMe
                  ? <fetcher.Form 
                      method="post" 
                      action={`/users/unfollow/${profile.id}`} 
                      className=""
                    >
                      <button
                        type="submit"
                        name="targetId"
                        value={profile.id}
                        className="mt-2 rounded-full bg-red-500 px-2.5 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600"
                      >
                        Unfollow
                      </button>
                    </fetcher.Form>
                  : <fetcher.Form 
                      method="post" 
                      action={`/users/follow/${profile.id}`} 
                      className=""
                    >
                      <button
                        type="submit"
                        name="targetId"
                        value={profile.id}
                        className="whitespace-nowrap mt-2 rounded-full bg-white px-2.5 py-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        + Follow
                      </button>
                    </fetcher.Form>
                )
              }
            </div>
          </div>
          <div className="mt-6 px-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{`${profile.firstName}'s Posts`}</h1>
          </div>
          {userOwnedPage && 
            <div className="mt-6">
              <NewPost />
            </div>
          }
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default UserProfile