import { NavLink } from "react-router-dom"; /* NavLink allows to style active link using isActive prop */
import '../styles/Navbar.css';

function Navbar() {
    
    return (
        <nav className="Navbar">            
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Register</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        </nav>  
  );
}

export default Navbar;