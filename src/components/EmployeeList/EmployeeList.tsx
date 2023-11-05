import { useSelector } from 'react-redux';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import './EmployeeList.scss';

const EmployeeList: React.FC = () => {
  const employees: string[] = useSelector(
    (state: any) => state.tasks.employees
  );
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
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
        <h2>{getCurrentLangDB.employeesPage.titleListEmployee}</h2>
      )}
    </ul>
  );
};
export default EmployeeList;
