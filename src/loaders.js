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

export async function userProfileLoader({ params }) {
  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/users/${params.userId}`, { 
    mode: "cors",
    headers: { 'Authorization': token }
  });

  if (response.status == 401) {
    return redirect('/login')
  }
  
  const profile = await response.json();

  return { profile };
}

export async function userSearchLoader() {
  const token = localStorage.getItem("jwt");

  const [usersResponse, followingResponse] = await Promise.all([
    fetch(`${API_URL}/users`, { 
      mode: "cors",
      headers: { 'Authorization': token }
    }),
    fetch(`${API_URL}/users/following`, { 
      mode: "cors",
      headers: { 'Authorization': token }
    })
  ])

  if (usersResponse.status == 401 || followingResponse == 401) {
    return redirect('/login')
  }
  
  const users = await usersResponse.json();
  const following = await followingResponse.json();

  return { users, following };
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