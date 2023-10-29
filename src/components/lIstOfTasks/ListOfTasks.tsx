import { useSelector } from 'react-redux';
import { stateToogle } from '../../interfaces';
import ToDo from '../ToDo/ToDo';
import './ListOfTasks.scss';

const ListOfTasks: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);

  return (
    <div className={mode ? 'list-active' : 'list-active-dark'}>
      <ul>
        {tasks.length !== 0 ? (
          tasks.map((item: any | undefined) => {
            return (
              <ToDo
                key={item.id}
                id={item.id}
                text={item.text}
                completed={item.completed}
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
