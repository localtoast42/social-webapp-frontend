import NewPost from "./NewPost";
import defaultAvatar from '../assets/defaultAvatar.svg';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

function UserProfile() {
  const user = useContext(UserContext)
  const { profile } = useLoaderData();

  const userOwnedPage = user.id === profile.id;
  const avatarUrl = user.imageUrl ? user.imageUrl : defaultAvatar;

  return (
    <div className="flex justify-center">
      <div className="grow max-w-48 py-8">
        <img className="h-24 w-24 flex-none rounded-full bg-gray-100" src={avatarUrl} alt="" />
        <p className="mt-2 text-xl leading-6 font-bold">{profile.fullName}</p>
        <p className="mt-1 truncate leading-5 text-gray-500">{`@${profile.username}`}</p>
      </div>
      <div className="grow max-w-xl">
        <header>
          <div className="px-2 py-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{`${profile.firstName}'s Posts`}</h1>
          </div>
        </header>
        <main>
          {userOwnedPage && <NewPost />}
          <Outlet />
        </main>
      </div>
      <div className="grow max-w-48"></div>
    </div>
  )
}

export default UserProfile