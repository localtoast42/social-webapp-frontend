import { redirect } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export async function userLoader() {
  const response = await fetch(`${API_URL}/users/self`, { mode: "cors" });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const user = await response.json();

  return { user };
}

export async function homeFeedLoader() {
  const response = await fetch(`${API_URL}/posts`, { mode: "cors" });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const posts = await response.json();

  return { posts };
}

export async function profileFeedLoader({ params }) {
  const response = await fetch(`${API_URL}/users/${params.userId}/posts`, { mode: "cors" });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const posts = await response.json();

  return { posts };
}