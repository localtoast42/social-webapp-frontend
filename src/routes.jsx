import App from "./App";
import Home from "./Home";
import Feed from "./components/Feed";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { userLoader, feedLoader } from "./loaders";
import { loginAction, logoutAction } from "./actions";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <Home />,
        children: [
          {
            index: true,
            element: <Feed />,
            loader: feedLoader
          },
        ]
      },
      {
        path: "/users/:userId",
        element: <UserProfile />,
        children: [
          {
            index: true,
            element: <Feed />,
            loader: feedLoader
          },
        ]
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "/logout",
        action: logoutAction
      }
    ]
  },
];

export default routes;