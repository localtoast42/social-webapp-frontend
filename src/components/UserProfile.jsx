import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div className="flex justify-center">
      <div className="grow max-w-48 py-8">
        <img className="h-24 w-24 flex-none rounded-full bg-gray-50" src="" alt="" />
        <p className="text-xl font-bold">{user.firstName} {user.lastName}</p>
      </div>
      <Outlet />
      <div className="grow max-w-48"></div>
    </div>
  )
}

export default UserProfile