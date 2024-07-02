import App from "./App";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import UserSearch from "./components/UserSearch";
import UserProfile from "./components/UserProfile";
import UserSettings from "./components/UserSettings";
import { 
  userLoader, 
  userProfileLoader,
  userSearchLoader,
  recentFeedLoader,
  followingFeedLoader,
  postLoader,
  profileFeedLoader } from "./loaders";
import { 
  loginAction,
  guestLoginAction, 
  logoutAction,
  registerAction,
  userUpdateAction,
  userDeleteAction,
  postCreateAction,
  postEditAction,
  postDeleteAction,
  postLikeAction,
  commentCreateAction,
  commentLikeAction,
  followAction,
  unfollowAction } from "./actions";

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
            loader: recentFeedLoader
          },
          {
            path: "following",
            element: <Feed />,
            loader: followingFeedLoader
          },
        ]
      },
      {
        path: "/settings",
        element: <UserSettings />,
        loader: userLoader
      },
      {
        path: "/users",
        element: <UserSearch />,
        loader: userSearchLoader
      },
      {
        path: "/users/:userId",
        element: <UserProfile />,
        loader: userProfileLoader,
        children: [
          {
            index: true,
            element: <Feed />,
            loader: profileFeedLoader
          },
        ]
      },
      {
        path: "/users/:userId/update",
        action: userUpdateAction
      },
      {
        path: "/users/:userId/delete",
        action: userDeleteAction
      },
      {
        path: "/users/follow/:userId",
        action: followAction
      },
      {
        path: "/users/unfollow/:userId",
        action: unfollowAction
      },
      {
        path: "/posts/:postId",
        element: <Post />,
        loader: postLoader
      },
      {
        path: "/posts/create",
        action: postCreateAction
      },
      {
        path: "/posts/:postId/edit",
        action: postEditAction
      },
      {
        path: "/posts/:postId/delete",
        action: postDeleteAction
      },
      {
        path: "/posts/:postId/like",
        action: postLikeAction
      },
      {
        path: "/posts/:postId/comment",
        action: commentCreateAction
      },
      {
        path: "/posts/:postId/comments/:commentId/like",
        action: commentLikeAction
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
    path: "/login/guest",
    action: guestLoginAction
  },
  {
    path: "/logout",
    action: logoutAction
  }
];

export default routes;