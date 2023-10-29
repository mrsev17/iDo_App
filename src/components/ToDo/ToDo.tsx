import { useDispatch } from 'react-redux';
import { removeTodo, completeTodo } from '../../redux/tasks/actionCreators';
import './ToDo.scss';

interface ToDoProps {
  id: string;
  text: string;
  completed: boolean;
}

const ToDo: React.FC<ToDoProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleCheckBox = (id: string) => {
    dispatch(completeTodo(id));
    console.log(completed);
  };
  return (
    <li className='todo-item' key={id}>
      <div className='todo-text'>
        <p className={completed ? 'completed-task' : ''}>{text}</p>
      </div>
      {!completed ? 'In progress' : 'Completed'}
      <div className='todo-actions'>
        <div className='todo-complete'>
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
