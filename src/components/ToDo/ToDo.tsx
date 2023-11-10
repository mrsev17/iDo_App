import { useDispatch, useSelector } from 'react-redux';
import { TodoInterface } from '../../interfaces';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import { removeTodo, completeTodo } from '../../redux/tasks/actionCreators';
import { checkBoxStyle, checkBoxStyleLight } from '../../utils/commonData';
import { Checkbox } from '@mui/material';
import { Dispatch } from 'redux';
import removeIcon from '../../assets/icon-delete.svg';
import SelectEmployee from '../SelectEmployee/SelectEmployee';
import ToDoEditModal from '../ToDoEditModal/ToDoEditModal';
//
import { Reorder, AnimatePresence } from 'framer-motion';

//
import './ToDo.scss';
import '../../App.scss';

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: '40px',
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

const label = { 'aria-label': 'Checkbox demo' };

export interface TodoInterfaceProps {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson: string;
  todo: TodoInterface;
}

const ToDo: React.FC<TodoInterfaceProps> = ({
  id,
  text,
  completed,
  responsiblePerson,
  todo,
}) => {
  const mode: boolean = useSelectMode();
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const dispatch: Dispatch = useDispatch();
  const handleRemove = (id: string): void => {
    dispatch(removeTodo(id));
  };
  const handleCheckBox = (id: string): void => {
    dispatch(completeTodo(id));
  };

  return (
    <Reorder.Item
      as='li'
      value={todo}
      whileDrag={{ scale: 1.05, border: '1px solid #9896f1' }}
      {...variants}
      className='todo__todo-item'
      key={id}
    >
      <div className='todo__todo-text'>
        <p className={completed ? 'todo__completed-task' : ''}>{text}</p>
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
    </Reorder.Item>
  );
};
export default ToDo;
