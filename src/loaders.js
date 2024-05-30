import { redirect } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export async function userLoader() {
  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/users/self`, { 
    mode: "cors",
    headers: { 'Authorization': token }
  });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const user = await response.json();

  return { user };
}

export async function homeFeedLoader() {
  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts`, { 
    mode: "cors",
    headers: { 'Authorization': token }
  });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const posts = await response.json();

  return { posts };
}

export async function profileFeedLoader({ params }) {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}/users/${params.userId}/posts`, { 
    mode: "cors",
    headers: { 'Authorization': token }
  });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const posts = await response.json();

  return { posts };
}