import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewTask } from '../../redux/tasks/tasksSlice';
import './NewTodo.scss';

const NewTodo: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const languageState = useAppSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const dispatch = useAppDispatch();
  const changeNewTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  const newTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask) {
      dispatch(addNewTask(newTask));
      setNewTask('');
    }
  };
  return (
    <>
      <form className='todo__form-new-task' onSubmit={newTaskSubmit}>
        <input
          className='todo__form-new-task-input'
          type='text'
          value={newTask}
          onChange={changeNewTaskInput}
          placeholder={getCurrentLangDB.mainPage.placeHolderNewTodo}
          maxLength={50}
        />
        <button className='todo__form-new-task-submit'>
          {getCurrentLangDB.mainPage.submitNewTodo}
        </button>
      </form>
    </>
  );
};

export default NewTodo;
