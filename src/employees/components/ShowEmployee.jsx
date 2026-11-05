import { useSelector } from 'react-redux';

export default function ShowEmployee() {
  const employees = useSelector(
    (state) => state.employee.employees
  );

  if (employees.length === 0) {
    return <p>Сотрудники не найдены.</p>;
  }

  return (
    <div className="employees-list">
      {employees.map((employee) => (
        <article
          className="employee-card"
          key={employee.id}
        >
          <h2>{employee.name}</h2>

          <p>
            <strong>Email:</strong> {employee.email}
          </p>

          <p>
            <strong>Должность:</strong> {employee.position}
          </p>
        </article>
      ))}
    </div>
  );
}
