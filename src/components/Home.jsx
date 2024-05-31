import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className="flex justify-center">
      <Outlet />
    </div>
  )
}

export default Home