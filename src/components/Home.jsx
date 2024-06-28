import NewPost from "./NewPost";
import { Outlet, NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Home() {
  const tabs = [
    { name: 'Recent', href: 'recent' },
    { name: 'Following', href: 'following' },
  ]

  return (
    <div className="flex justify-center">
      <div className="grow max-w-xl flex flex-col divide-y divide-gray-300 border border-gray-300">
        <header>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px px-3 flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                  <NavLink
                    key={tab.name}
                    to={tab.href}
                    className={({ isActive }) => 
                      classNames(
                        isActive
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 px-1 py-4 text-md font-medium',
                      )}
                  >
                    {tab.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </header>
        <main>
          <div className="py-6 border-b border-gray-300">
            <NewPost />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home