import NewPost from "./NewPost";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col border border-gray-300">
        <header>
          <div className="px-3 py-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header>
        <main>
          <NewPost />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home