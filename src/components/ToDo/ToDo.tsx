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
import './ToDo.scss';
import '../../App.scss';

const label = { 'aria-label': 'Checkbox demo' };

const ToDo: React.FC<TodoInterface> = ({
  id,
  text,
  completed,
  responsiblePerson,
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
    <li className='todo__todo-item' key={id}>
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
    </li>
  );
};
export default ToDo;
