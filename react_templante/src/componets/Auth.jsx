// src/components/Auth.jsx
import React, { useState } from 'react';
import supabase from '../supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) setError(error.message);
    else console.log('Logged in:', user);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else console.log('Registered:', user);
  };

  return (
    <div>
      <h2>Authentication</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleRegister}>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Auth;