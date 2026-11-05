import { Provider, useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import store from './store/store';
import { setUser, logoutUser } from './store/action/authActions';
import { takeOrder, handOffOrder, removeOrder } from './store/action/ordersActions';

import Login from './employees/login/Login.jsx';
import Orders from './pages/Orders.jsx';
import Employees from './employees/Employees.jsx';

function AppContent() {
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.auth.user
  );

  const orders = useSelector(
    (state) => state.orders.list
  );

  // пароль в стор не кладём
  const handleLogin = ({ password, ...user }) => {
    dispatch(setUser(user));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleTake = (id) => {
    dispatch(takeOrder({ id, courier: currentUser.name }));
  };

  const handleHandOff = (id, courier) => {
    if (!courier) return;
    dispatch(handOffOrder({ id, courier }));
  };

  const handleRemove = (id) => {
    dispatch(removeOrder(id));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          currentUser
            ? <Navigate to="/orders" replace />
            : <Login onLogin={handleLogin} />
        }
      />

      <Route
        path="/orders"
        element={
          currentUser ? (
            <>
              <nav className="app-navigation">
                <Link to="/employees">Сотрудники</Link>
              </nav>

              <Orders
                currentUser={currentUser}
                orders={orders}
                onTake={handleTake}
                onHandOff={handleHandOff}
                onRemove={handleRemove}
                onLogout={handleLogout}
              />
            </>
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route
        path="/employees"
        element={
          currentUser ? (
            <main className="employees-page">
              <nav className="app-navigation">
                <Link to="/orders">Вернуться к заказам</Link>
              </nav>

              <Employees />
            </main>
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}