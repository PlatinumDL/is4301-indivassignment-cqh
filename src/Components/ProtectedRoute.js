import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <p className="page">Loading...</p>;
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: 'Please log in to access this page.' }}
      />
    );
  }
  return children;
}

export default ProtectedRoute;
