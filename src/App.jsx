import './App.css';
import defaultAvatar from './assets/defaultAvatar.svg';
import { UserContext } from "./contexts/UserContext";
import { 
  Form, 
  Outlet, 
  NavLink, 
  useLoaderData 
} from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const { user } = useLoaderData();
  const avatarUrl = user.imageUrl ? user.imageUrl : defaultAvatar;

  return (
    <div className="flex min-h-full flex-col">
      <nav className="sticky z-50 top-0 flex justify-center items-center bg-gray-800">
        <div className="grow max-w-xl px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex space-x-4">
                <NavLink
                  to="/home"
                  end
                  className={({ isActive }) => 
                    classNames(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/users"
                  end
                  className={({ isActive }) => 
                    classNames(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")
                  }
                >
                  Search Users
                </NavLink>
              </div>
            </div>
            <div className="flex">
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="object-cover h-10 w-10 rounded-full bg-gray-100"
                      src={avatarUrl}
                      alt=""
                    />
                  </MenuButton>
                </div>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      {({ focus }) => (
                        <NavLink 
                          to={`/users/${user.id}`}
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </NavLink>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <NavLink 
                          to="/settings"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </NavLink>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <Form method="post" action="logout" className={classNames(focus ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm text-gray-700')}>
                          <button className="grow text-left">
                            Sign out
                          </button>
                        </Form>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
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
