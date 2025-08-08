import { Link } from 'react-router-dom';
import useLoginForm from '../hooks/useLoginForm.js';

function Login() {
  const {
    username, setUsername,
    password, setPassword,
    handleSubmit
  } = useLoginForm();

  return (
    <div className="Login">
      <h1>Login Page</h1>
      <p>This is where users will log in to access their family records.</p>
        <form className="login-form" onSubmit={handleSubmit} autoComplete='on'>
          <label htmlFor="username">Login (username or email):</label>
          <input 
            type="text" id="username" name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username or email"
            required 
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" id="password" name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
            required 
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </div>
  );
}

export default Login;