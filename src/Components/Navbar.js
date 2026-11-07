import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logout } from '../firebase';
import './Navbar.css';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/academics">Academics</NavLink>
      <NavLink to="/admission">Admission</NavLink>
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">{user.email}</span>
            <button className="navbar-logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
