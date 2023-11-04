import { EmployeeTaskProps } from '../../interfaces';
import './EmployeeTask.scss';

const EmployeeTask: React.FC<EmployeeTaskProps> = ({ text, completed, id }) => {
  return (
    <li className='employee-task'>
      <div className='employee-task-left-part'>
        <p>
          {id + 1}. {text}
        </p>
      </div>
      <div
        className={
          completed
            ? 'employee-task-right-part task-complete'
            : 'employee-task-right-part'
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
