import { TodoInterface } from '../../interfaces';
import EmployeeTask from '../EmployeeTask/EmployeeTask';
import './PersonalList.scss';

interface PersonalListProps {
  employee: string;
  getTasksEmployee: TodoInterface[];
}

const PersonalList: React.FC<PersonalListProps> = ({
  employee,
  getTasksEmployee,
}) => {
  return (
    <ul className='employee-personal-list'>
      {getTasksEmployee.length > 0
        ? getTasksEmployee.map((task: TodoInterface, id: number) => (
            <EmployeeTask
              key={id}
              text={task.text}
              completed={task.completed}
            />
          ))
        : ''}
    </ul>
  );
};
export default PersonalList;
