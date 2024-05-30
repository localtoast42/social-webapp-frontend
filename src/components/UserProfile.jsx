import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>
        <h1>Hello, {user.firstName}!</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default UserProfile