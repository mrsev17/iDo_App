import { useAppSelector } from '../../hooks';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import './EmployeeList.scss';

const EmployeeList: React.FC = () => {
  const employees: string[] = useAppSelector(
    (state: any) => state.tasks.employees
  );
  const languageState = useAppSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <div className='todo__employee-list-wrapper'>
      <ul className='todo__employee-list'>
        {employees.length > 1 ? (
          employees.map((employee: string, id: number) => {
            if (employee !== 'Nobody' && employee !== 'Ніхто') {
              return <EmployeeItem key={id} employee={employee} id={id} />;
            }
            return null;
          })
        ) : (
          <h2>{getCurrentLangDB.employeesPage.titleListEmployee}</h2>
        )}
      </ul>
    </div>
  );
};
export default EmployeeList;
