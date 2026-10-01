import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          currentUser
            ? <Navigate to="/orders" replace />
            : <Login onLogin={setCurrentUser} />
        }
      />
      <Route
        path="/orders"
        element={
          currentUser
            ? <Orders currentUser={currentUser} onLogout={() => setCurrentUser(null)} />
            : <Navigate to="/" replace />
        }
      />
    </Routes>
  );
}