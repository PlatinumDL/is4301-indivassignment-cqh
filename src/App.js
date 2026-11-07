import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home';
import Academics from './Pages/Academics';
import Admission from './Pages/Admission';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/academics"
          element={
            <ProtectedRoute>
              <Academics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <Admission />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
