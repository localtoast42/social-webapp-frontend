import UserCard from "./UserCard";
import { useLoaderData } from "react-router-dom";

function UserSearch() {
  const { users, following } = useLoaderData();

  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <ul role="list" className="divide-y divide-gray-100">
        {users.map(person => <UserCard
          key={person.id}
          user={person}
          isFollowing={following.includes(person.id)} />
        )}
      </ul>
    </div>
  )
}

export default UserSearch