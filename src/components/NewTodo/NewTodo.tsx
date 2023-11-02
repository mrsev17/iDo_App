import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTaskTodo } from '../../redux/tasks/actionCreators';
import './NewTodo.scss';

const NewTodo: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const dispatch = useDispatch();
  const changeNewTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  const newTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask) {
      dispatch(newTaskTodo(newTask));
      setNewTask('');
    }
  };
  return (
    <>
      <form className='form-new-task' onSubmit={newTaskSubmit}>
        <input
          type='text'
          value={newTask}
          onChange={changeNewTaskInput}
          placeholder='Write new Task'
          maxLength={28}
        />
        <button>Create Task</button>
      </form>
    </>
  );
};

export default NewTodo;
