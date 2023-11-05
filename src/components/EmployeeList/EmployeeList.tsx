import { useSelector } from 'react-redux';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import './EmployeeList.scss';

const EmployeeList = () => {
  const employees = useSelector((state: any) => state.tasks.employees);
  return (
    <ul className='todo__employee-list'>
      {employees.length > 1 ? (
        employees.map((employee: string, id: number) => {
          if (employee !== 'Nobody') {
            return <EmployeeItem key={id} employee={employee} id={id} />;
          }
          return null;
        })
      ) : (
        <h2>Add employee</h2>
      )}
    </ul>
  );
};
export default EmployeeList;
