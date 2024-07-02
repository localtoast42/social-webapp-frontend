import { redirect } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export async function loginAction({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  const response = await fetch(`${API_URL}/login`, { 
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user) 
  });

  if (response.status == 401) {
    return redirect('/login');
  } else {
    const responseData = await response.json();
    localStorage.setItem("jwt", responseData.token);
    return redirect('/home');
  }
}

export async function guestLoginAction() {
  const response = await fetch(`${API_URL}/login/guest`, { 
    method: 'POST',
    credentials: 'include',
  });

  if (response.status == 401) {
    return redirect('/login');
  } else {
    const responseData = await response.json();
    localStorage.setItem("jwt", responseData.token);
    return redirect('/home');
  }
}

export async function logoutAction() {
  localStorage.removeItem("jwt");
  
  return redirect('/login');
}

export async function registerAction({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  const response = await fetch(`${API_URL}/users`, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user) 
  });

  if (response.status == 201) {
    return redirect('/login');
  } else {
    return response;
  }
}

export async function userUpdateAction({ params, request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/users/${params.userId}`, { 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
    body: JSON.stringify(user) 
  });

  if (response.status == 401) {
    return redirect('/login');
  } else {
    return response;
  }
}

export async function userDeleteAction({ params }) {
  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/users/${params.userId}`, { 
    method: 'DELETE',
    headers: { 'Authorization': token },
  });

  if (response.status == 200) {
    localStorage.removeItem("jwt");
    return redirect('/login');
  } else {
    return response;
  }
}

export async function followAction({ request }) {
  const formData = await request.formData();
  const targetId = formData.get("targetId");

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/users/${targetId}/follow`, { 
    method: 'POST',
    headers: { 'Authorization': token },
  });

  if (response.status == 401) {
    return redirect('/login');
  } else {
    return response;
  }
}

export async function unfollowAction({ request }) {
  const formData = await request.formData();
  const targetId = formData.get("targetId");

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/users/${targetId}/follow`, { 
    method: 'DELETE',
    headers: { 'Authorization': token },
  });

  if (response.status == 401) {
    return redirect('/login');
  } else {
    return response;
  }
}

export async function postCreateAction({ request }) {
  const formData = await request.formData();
  const post = Object.fromEntries(formData);

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts/`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
    body: JSON.stringify(post)
  });

  return response;
}

export async function postEditAction({ params, request }) {
  const formData = await request.formData();
  const post = Object.fromEntries(formData);

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts/${params.postId}`, { 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
    body: JSON.stringify(post)
  });

  return response;
}

export async function postDeleteAction({ params }) {
  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts/${params.postId}`, { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
  });

  if (response.status == 200) {
    return redirect('/home');
  } else {
    return response;
  }
}

export async function postLikeAction({ params, request }) {
  const formData = await request.formData();
  const like = Object.fromEntries(formData);

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts/${params.postId}/like`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
    body: JSON.stringify(like)
  });

  return response;
}

export async function commentCreateAction({ params, request }) {
  const formData = await request.formData();
  const comment = Object.fromEntries(formData);

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts/${params.postId}/comments`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
    body: JSON.stringify(comment)
  });

  return response;
}

export async function commentLikeAction({ params, request }) {
  const formData = await request.formData();
  const like = Object.fromEntries(formData);

  const token = localStorage.getItem("jwt");

  const response = await fetch(`${API_URL}/posts/${params.postId}/comments/${params.commentId}/like`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token 
    },
    body: JSON.stringify(like)
  });

  return response;
}