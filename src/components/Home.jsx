import NewPost from "./NewPost";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";

function Home() {
  const user = useContext(UserContext);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col divide-y divide-gray-300 border border-gray-300">
        <header className="py-6">
          <div className="px-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
          <NewPost />
        </header>
        <main>
          {!user.hasFollows &&
            <div className="flex gap-x-4 py-3 border-b border-gray-300">
              <div className="w-12"></div>
              <div>
                <h2 className="px-3 font-semibold text-2xl">
                  Showing most recent sitewide posts...
                </h2>
                <p className="px-3 text-xl">
                  <NavLink to="/users" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Follow users{' '}
                  </NavLink>
                  to customize your feed!
                </p>
              </div>
            </div>
          }
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home