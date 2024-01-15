import { useAppSelector } from '../../hooks';
import {
  LanguageSelect,
  TodoInterface,
  LanguageTranslations,
} from '../../interfaces';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import { checkBoxStyle, checkBoxStyleLight } from '../../utils/commonData';
import { Checkbox } from '@mui/material';
import removeIcon from '../../assets/icon-delete.svg';
import SelectEmployee from '../SelectEmployee/SelectEmployee';
import ToDoEditModal from '../ToDoEditModal/ToDoEditModal';
import { useAppDispatch } from '../../hooks';
import {
  removeTask,
  completeTask,
  reorderTodos,
} from '../../redux/tasks/tasksSlice';
import './ToDo.scss';
import '../../App.scss';
import { useState } from 'react';

const label = { 'aria-label': 'Checkbox demo' };

export interface TodoInterfaceProps {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson: string;
  todo: TodoInterface;
  index: number;
}

const ToDo: React.FC<TodoInterfaceProps> = ({
  id,
  text,
  completed,
  responsiblePerson,
  todo,
  index,
}) => {
  const mode: boolean = useSelectMode();
  const languageState = useAppSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB: LanguageTranslations = languageState.currentDataBase;
  const dispatch = useAppDispatch();
  const handleRemove = (id: string): void => {
    dispatch(removeTask(id));
  };
  const handleCheckBox = (id: string): void => {
    dispatch(completeTask(id));
  };

  const todos: TodoInterface[] = useAppSelector((state) => state.tasks.todos);

  const dragStartHandler = (e: React.DragEvent, index: number): void => {
    e.dataTransfer.setData('text/plain', index.toString());
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number): void => {
    e.preventDefault();
    e.stopPropagation();
    const enterData: TodoInterface[] = [...todos];
    const draggedIndex: number = Number(e.dataTransfer.getData('text/plain'));
    const swapElements = (
      enterData: TodoInterface[],
      indexDraged: number,
      indexTarget: number
    ): TodoInterface[] => {
      const temp: TodoInterface = enterData[indexDraged - 1];
      enterData[indexDraged - 1] = enterData[indexTarget - 1];
      enterData[indexTarget - 1] = temp;
      return enterData;
    };
    const swapTodos: TodoInterface[] = [
      ...swapElements(enterData, draggedIndex, targetIndex),
    ];
    dispatch(reorderTodos(swapTodos));
  };
  const dragEndHandler = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Touch screen events

  const [touchStartIndex, setTouchStartIndex] = useState<number | null>(null);

  const touchStartHandler = (e: React.TouchEvent, index: number): void => {
    e.stopPropagation();
    setTouchStartIndex(index);
  };

  const touchMoveHandler = (e: React.TouchEvent, targetIndex: number): void => {
    e.preventDefault();
    e.stopPropagation();
    if (touchStartIndex !== null) {
      const enterData: TodoInterface[] = [...todos];
      const draggedIndex: number = touchStartIndex;
      const swapElements = (
        enterData: TodoInterface[],
        indexDraged: number,
        indexTarget: number
      ): TodoInterface[] => {
        const temp: TodoInterface = enterData[indexDraged - 1];
        enterData[indexDraged - 1] = enterData[indexTarget - 1];
        enterData[indexTarget - 1] = temp;
        return enterData;
      };
      const swapTodos: TodoInterface[] = [
        ...swapElements(enterData, draggedIndex, targetIndex),
      ];
      dispatch(reorderTodos(swapTodos));
      setTouchStartIndex(null);
    }
  };

  const touchEndHandler = () => {
    setTouchStartIndex(null);
  };

  return (
    <li
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, index)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => handleDrop(e, index)}
      onDragOver={allowDrop}
      onTouchStart={(e) => touchStartHandler(e, index)}
      onTouchMove={(e) => touchMoveHandler(e, index)}
      onTouchEnd={touchEndHandler}
      className='todo__todo-item'
      key={id}
    >
      <div className='todo__todo-text'>
        <p className={completed ? 'todo__completed-task' : ''}>
          {++index}. {text}
        </p>
      </div>
      <div className='todo__todo-actions'>
        <div className='todo__todo-employee'>
          <SelectEmployee
            responsiblePerson={responsiblePerson}
            text={text}
            id={id}
          />
        </div>
        <div className='todo__todo-complete'>
          <div className='todo__todo-status'>
            {!completed ? (
              <p>{getCurrentLangDB.mainPage.statusInProgress}</p>
            ) : (
              <p className='todo__todo-status-task-complete'>
                {getCurrentLangDB.mainPage.statusComplete}
              </p>
            )}
          </div>
          <Checkbox
            checked={completed}
            onChange={() => handleCheckBox(id)}
            color='secondary'
            {...label}
            sx={mode ? checkBoxStyle : checkBoxStyleLight}
          />
        </div>
        <ToDoEditModal text={text} id={id} />
        <div className='todo__todo-remove'>
          <button onClick={() => handleRemove(id)}>
            <img
              className='todo__remove-icon'
              src={removeIcon}
              alt='Remove Icon'
            />
          </button>
        </div>
      </div>
    </li>
  );
};
export default ToDo;
