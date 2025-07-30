import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="Register">
        <h1>Register Page</h1>
        <p>This is the registration page for new users.</p>
        <form className="register-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link>.</p>
    </div>
  );
}

export default Register;