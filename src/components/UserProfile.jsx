import { Outlet, useLoaderData } from "react-router-dom";

function UserProfile() {
  const { profile } = useLoaderData();

  return (
    <div className="flex justify-center">
      <div className="grow max-w-48 py-8">
        <img className="h-24 w-24 flex-none rounded-full bg-gray-50" src="" alt="" />
        <p className="text-xl font-bold">{profile.firstName} {profile.lastName}</p>
      </div>
      <Outlet />
      <div className="grow max-w-48"></div>
    </div>
  )
}

export default UserProfile