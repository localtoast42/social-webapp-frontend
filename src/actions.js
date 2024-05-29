import { redirect } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export async function loginAction({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  const response = await fetch(`${API_URL}/login`, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user) 
  });

  if (response.status == 401) {
    return redirect('/login');
  } else {
    return redirect('/');
  }
}

export async function logoutAction() {
  await fetch(`${API_URL}/logout`, { method: 'POST' });
  
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
    return redirect('/register');
  }
}