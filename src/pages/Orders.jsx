import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { couriers } from '../data/users.js';
import { initialOrders } from '../data/orders.js';

export default function Orders({ currentUser, onLogout }) {
  const [orders, setOrders] = useState(initialOrders);
  const [infoOrder, setInfoOrder] = useState(null);
  const navigate = useNavigate();

  function handleTake(id) {
    setOrders(prev =>
      prev.map(o => (o.id === id ? { ...o, courier: currentUser.name } : o))
    );
  }

  function handleHandOff(id, newCourierName) {
    if (!newCourierName) return;
    setOrders(prev =>
      prev.map(o => (o.id === id ? { ...o, courier: newCourierName } : o))
    );
  }

  function handleLogout() {
    onLogout();
    navigate('/');
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Текущие заказы</h1>
        <div>
          <span className="orders-user">Курьер: {currentUser.name}</span>
          <button type="button" className="logout-btn" onClick={handleLogout}>
            Выйти
          </button>
        </div>
      </div>

      <table id="orders-table">
        <thead>
          <tr>
            <th>Адрес</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            const isMine = order.courier === currentUser.name;
            const isFree = order.courier === null;

            return (
              <tr key={order.id}>
                <td>{order.address}</td>
                <td>
                  {isFree ? 'Свободен' : isMine ? 'У вас' : `У курьера: ${order.courier}`}
                </td>
                <td className="orders-actions">
                  {isFree && (
                    <button type="button" onClick={() => handleTake(order.id)}>
                      Взять себе
                    </button>
                  )}

                  {isMine && (
                    <select
                      defaultValue=""
                      onChange={e => handleHandOff(order.id, e.target.value)}
                    >
                      <option value="" disabled>
                        Отдать другому курьеру
                      </option>
                      {couriers
                        .filter(c => c.name !== currentUser.name)
                        .map(c => (
                          <option key={c.email} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                    </select>
                  )}

                  <button type="button" onClick={() => setInfoOrder(order)}>
                    Информация о заказе
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {infoOrder && (
        <div className="order-modal-overlay" onClick={() => setInfoOrder(null)}>
          <div className="order-modal" onClick={e => e.stopPropagation()}>
            <h2>Заказ №{infoOrder.id}</h2>
            <p><strong>Адрес:</strong> {infoOrder.address}</p>
            <p><strong>Содержимое:</strong></p>
            <ul>
              {infoOrder.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button type="button" onClick={() => setInfoOrder(null)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}