import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {
  auth,
  getAuthErrorMessage,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase';
import './Pages.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Firebase signs the user in after registration, so this also redirects new accounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate('/');
    });
    return unsubscribe;
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerWithEmailAndPassword(name, email, password);
    } catch (err) {
      setError(getAuthErrorMessage(err.code));
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(getAuthErrorMessage(err.code));
    }
  };

  return (
    <main className="page auth">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (at least 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <button className="google-button" onClick={handleGoogle}>
        Sign up with Google
      </button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  );
}

export default Signup;
