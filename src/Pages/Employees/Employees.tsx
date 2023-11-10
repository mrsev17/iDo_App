import { useSelector } from 'react-redux';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import NewEmployee from '../../components/NewEmployee/NewEmployee';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import './Employees.scss';

export const Employees: React.FC = () => {
  const mode: boolean = useSelectMode();
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <div className='employees-content'>
            <h2
              className={
                mode ? 'employees-title-dark' : 'employees-title-light'
              }
            >
              {getCurrentLangDB.employeesPage.title}
            </h2>
            <NewEmployee />
            <EmployeeList />
          </div>
        </div>
      </div>
    </div>
  );
};
