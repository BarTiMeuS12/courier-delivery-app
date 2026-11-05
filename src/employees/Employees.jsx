import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { couriers } from '../data/users.js';
import { setEmployees } from '../store/action/employeeAction.js';
import ShowEmployee from './components/ShowEmployee.jsx';

export default function Employees() {
  const dispatch = useDispatch();

  useEffect(() => {
    const employees = couriers.map(({ password, ...courier }) => ({
      ...courier,
      id: courier.email,
      position: 'Курьер'
    }));

    dispatch(setEmployees(employees));
  }, [dispatch]);

  return (
    <section className="employees-section">
      <h1>Сотрудники</h1>

      <ShowEmployee />
    </section>
  );
}
