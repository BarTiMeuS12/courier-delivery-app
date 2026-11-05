import { useEffect, useState } from 'react';

import { couriers } from '../data/users.js';
import ShowEmployee from './components/ShowEmployee.jsx';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const list = couriers.map(({ password, ...courier }) => ({
      ...courier,
      id: courier.email,
      position: 'Курьер'
    }));

    setEmployees(list);
  }, []);

  return (
    <section className="employees-section">
      <h1>Сотрудники</h1>

      <ShowEmployee employees={employees} />
    </section>
  );
}