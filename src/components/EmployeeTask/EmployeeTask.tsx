import { EmployeeTaskProps } from '../../interfaces';
import { useSelector } from 'react-redux';
import './EmployeeTask.scss';

const EmployeeTask: React.FC<EmployeeTaskProps> = ({ text, completed, id }) => {
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <li className='todo__employee-task'>
      <div className='todo__employee-task-left-part'>
        <p>
          {id + 1}. {text}
        </p>
      </div>
      <div
        className={
          completed
            ? 'todo__employee-task-right-part todo__task-complete'
            : 'todo__employee-task-right-part'
        }
      >
        <div>
          <span>{getCurrentLangDB.employeesPage.statusSub}</span>
        </div>
        <div>
          <p className='todo__employee-task-status'>{`${
            completed
              ? getCurrentLangDB.employeesPage.currentStatusComplete
              : getCurrentLangDB.employeesPage.currentStatusInProgress
          }`}</p>
        </div>
      </div>
    </li>
  );
};
export default EmployeeTask;
