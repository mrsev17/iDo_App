import { useDispatch } from 'react-redux';
import { removeTodo, completeTodo } from '../../redux/tasks/actionCreators';
import './ToDo.scss';

interface ToDoProps {
  id: string;
  text: string;
  completed: boolean;
  responsiblePerson?: string;
}

const ToDo: React.FC<ToDoProps> = ({ id, text, completed }) => {
  // const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleCheckBox = (id: string) => {
    dispatch(completeTodo(id));
  };
  return (
    <li className='todo-item' key={id}>
      <div className='todo-text'>
        <p className={completed ? 'completed-task' : ''}>{text}</p>
      </div>

      <div className='todo-actions'>
        <div className='todo-complete'>
          <div className='todo-status'>
            {!completed ? <p>In progress</p> : <p>Completed</p>}
          </div>
          <input
            type='checkbox'
            checked={completed}
            onChange={() => handleCheckBox(id)}
          />
        </div>
        <div className='todo-remove'>
          <button onClick={() => handleRemove(id)}>X</button>
        </div>
      </div>
    </li>
  );
};
export default ToDo;
