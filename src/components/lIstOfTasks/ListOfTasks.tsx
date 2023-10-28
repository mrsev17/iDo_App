import { useSelector, useDispatch } from 'react-redux';
import './ListOfTasks.scss';
import { stateToogle } from '../../interfaces';
import { removeTodo } from '../../redux/tasks/actionCreators';

const ListOfTasks: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);
  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className={mode ? 'list-active' : 'list-active-dark'}>
      <ul>
        {tasks.map((item: any | undefined) => {
          return (
            <li className='todo-item' key={item.id}>
              <p>{item.text}</p>{' '}
              <button onClick={() => handleRemove(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfTasks;
