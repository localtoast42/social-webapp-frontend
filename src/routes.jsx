import App from "./App";
import Login from "./components/Login";
import { loginAction, logoutAction } from "./actions";

const routes = [
  {
    path: "/",
    element: <App />,
    children: []
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction
  },
  {
    path: "logout",
    action: logoutAction
  }
];

export default routes;