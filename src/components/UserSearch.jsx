import UserCard from "./UserCard";
import { useLoaderData } from "react-router-dom";

function UserSearch() {
  const { users } = useLoaderData();

  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <ul role="list" className="divide-y divide-gray-100">
        {users.map(user => <UserCard
          key={user.id}
          user={user} />
        )}
      </ul>
    </div>
  )
}

export default UserSearch