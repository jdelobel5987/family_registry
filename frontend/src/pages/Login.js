import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <h1>Login Page</h1>
      <p>This is where users will log in to access their family records.</p>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </div>
  );
}

export default Login;