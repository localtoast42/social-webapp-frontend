import './App.css';
import { UserContext } from "./contexts/UserContext";
import { Form, Outlet, NavLink, useLoaderData } from "react-router-dom";

function App() {
  const { user } = useLoaderData();

  return (
    <>
      <nav>
        <NavLink to="home">Home</NavLink>
        {user && <NavLink to={`/users/${user.id}`}>My Profile</NavLink>}
        {user ? (
          <Form method="post" action="logout">
            <button>Sign out</button>
          </Form>
        ) : (
          <NavLink to="login">Sign in</NavLink>
        )}
      </nav>
      <div>
        <UserContext.Provider value={ user }>
          <Outlet />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
