import './EmployeeTask.scss';

interface EmployeeTaskProps {
  text: string;
  completed: boolean;
}

const EmployeeTask: React.FC<EmployeeTaskProps> = ({ text, completed }) => {
  return (
    <li className='employee-task'>
      <div className='employee-task-left-part'>
        <p>{text}</p>
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
