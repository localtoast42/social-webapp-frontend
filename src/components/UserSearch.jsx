import magnify from '../assets/magnify.svg';
import UserCard from "./UserCard";
import { useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";

function UserSearch() {
  const { users, following, q } = useLoaderData();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <div className="flex justify-center">
      <div className="grow max-w-xl divide-y divide-gray-300 border border-gray-300">
        <header className="py-6">
          <div className="px-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Search Users</h1>
          </div>
          <Form className="mt-3 px-6">
            <div className="relative mt-2 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src={magnify} alt="" className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="search"
                  name="q"
                  id="q"
                  className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search for a user..."
                  defaultValue={q}
                />
              </div>
              <button
                type="submit"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Search
              </button>
            </div>
          </Form>
        </header>
        <div className="grow max-w-xl px-3">
          <ul role="list" className="divide-y divide-gray-300">
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