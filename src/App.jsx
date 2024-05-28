import './App.css';
import { Form, Outlet, NavLink, useLoaderData } from "react-router-dom";

function App() {
  const { user } = useLoaderData();

  return (
    <>
      <nav>
        <NavLink to="">Home</NavLink>
        {user ? (
          <Form method="post" action="logout">
            <button>Sign out</button>
          </Form>
        ) : (
          <NavLink to="login">Sign in</NavLink>
        )}
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
