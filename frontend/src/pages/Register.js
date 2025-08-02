import { Link } from 'react-router-dom';
import useRegisterForm from '../hooks/useRegisterForm';

function Register() {
  const {
    username, setUsername,
    email, setEmail,
    password, setPassword,
    repPassword, setRepPassword,
    handleSubmit
  } = useRegisterForm();

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