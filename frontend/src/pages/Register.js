import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repPassword) {
      alert("Passwords do not match!");
      return;
    }

    // const response = await fetch('http://php/api/register.php', {
    const response = await fetch('http://localhost:80/api/register.php', { // testing in navigator needs to be localhost, not php (docker service name 'php' should be used in production)
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, repPassword }),  
      });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Registration successful:', result);
    alert('Registration successful! You can now log in.');

    // Optionally redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className="Register">
        <h1>Register Page</h1>
        <p>This is the registration page for new users.</p>
        <form className="register-form" onSubmit={handleSubmit} autoComplete='on'>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" id="username" name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username" 
            required 
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="email" id="email" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            required 
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" id="password" name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
            autoComplete='new-password'
            required 
          />
          <label htmlFor="rep-password">Confirm password:</label>
          <input 
            type="password" id="rep-password" name="rep-password" 
            value={repPassword}
            onChange={(e) => setRepPassword(e.target.value)}
            placeholder="Repeat your password"
            autoComplete='new-password' 
            required 
          />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link>.</p>
    </div>
  );
}

export default Register;