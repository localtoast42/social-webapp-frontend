import './App.css';
import { UserContext } from "./contexts/UserContext";
import { Form, Outlet, NavLink, useLoaderData } from "react-router-dom";

function App() {
  const { user } = useLoaderData();

  return (
    <div className="flex min-h-full flex-col">
      <nav className="flex items-center bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink 
                    to="home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to={`/users/${user.id}`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    My Profile
                  </NavLink>
                  <Form method="post" action="logout">
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Sign out
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <UserContext.Provider value={ user }>
          <Outlet />
        </UserContext.Provider>
      </div>
    </div>
  )
}

export default App
