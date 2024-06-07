import UserCard from "./UserCard";
import { useLoaderData } from "react-router-dom";

function UserSearch() {
  const { users, following } = useLoaderData();

  return (
    <div className="flex justify-center">
      <div className="grow max-w-xl">
        <header>
          <div className="px-2 py-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Search Users</h1>
          </div>
        </header>
        <div className="grow max-w-xl px-4 sm:px-6">
          <ul role="list" className="divide-y divide-gray-100">
            {users.map(person => <UserCard
              key={person.id}
              user={person}
              isFollowing={following.includes(person.id)} />
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserSearch