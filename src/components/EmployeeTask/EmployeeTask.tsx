import { EmployeeTaskProps } from '../../interfaces';
import './EmployeeTask.scss';

const EmployeeTask: React.FC<EmployeeTaskProps> = ({ text, completed, id }) => {
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
          <span>Status:</span>
        </div>
        <div>
          <p>{`${completed ? 'Complete' : 'In Progress'}`}</p>
        </div>
      </div>
    </li>
  );
};
export default EmployeeTask;
