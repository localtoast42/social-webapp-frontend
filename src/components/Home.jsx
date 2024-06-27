import NewPost from "./NewPost";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col divide-y divide-gray-300 border border-gray-300">
        <header className="py-3">
          <div className="px-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
          <NewPost />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home