import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <header>
          <div className="px-2 py-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home