import { TodoInterface, PersonalListProps } from '../../interfaces';
import EmployeeTask from '../EmployeeTask/EmployeeTask';
import './PersonalList.scss';

const PersonalList: React.FC<PersonalListProps> = ({ getTasksEmployee }) => {
  return (
    <ul className='employee-personal-list'>
      {getTasksEmployee.length > 0
        ? getTasksEmployee.map((task: TodoInterface, id: number) => (
            <EmployeeTask
              key={id}
              id={id}
              text={task.text}
              completed={task.completed}
            />
          ))
        : ''}
    </ul>
  );
};
export default PersonalList;
