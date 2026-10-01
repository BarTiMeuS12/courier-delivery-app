import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findCourier } from '../data/users.js';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const courier = findCourier(email.trim(), password);
    if (!courier) {
      setError('Неверный email или пароль');
      return;
    }

    setError('');
    onLogin(courier);
    navigate('/orders');
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Добро пожаловать</h1>
        <p className="login-subtitle">Войдите, чтобы начать работу</p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="login-input"
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">Войти</button>
        </form>
      </div>
    </div>
  );
}