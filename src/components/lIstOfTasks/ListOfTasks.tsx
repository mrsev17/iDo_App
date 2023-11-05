import { useSelector } from 'react-redux';
import { StateToogle, TodoInterface } from '../../interfaces';
import ToDo from '../ToDo/ToDo';
import './ListOfTasks.scss';

const ListOfTasks: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.todos);
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);

  return (
    <div className={mode ? 'todo__list-active' : 'todo__list-active-dark'}>
      <ul>
        {tasks.length !== 0 ? (
          tasks.map((item: TodoInterface) => {
            return (
              <ToDo
                key={item.id}
                id={item.id}
                text={item.text}
                completed={item.completed}
                responsiblePerson={item.responsiblePerson}
              />
            );
          })
        ) : (
          <h2>List is empty</h2>
        )}
      </ul>
    </div>
  );
};

export default ListOfTasks;
