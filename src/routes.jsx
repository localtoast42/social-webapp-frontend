import App from "./App";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import UserProfile from "./components/UserProfile";
import { 
  userLoader, 
  homeFeedLoader,
  profileFeedLoader } from "./loaders";
import { 
  loginAction, 
  logoutAction,
  registerAction } from "./actions";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Feed />,
            loader: homeFeedLoader
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
            loader: profileFeedLoader
          },
        ]
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
    action: registerAction
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction
  },
  {
    path: "/logout",
    action: logoutAction
  }
];

export default routes;