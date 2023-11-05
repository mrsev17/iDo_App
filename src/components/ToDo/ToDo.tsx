import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoInterface, StateToogle } from '../../interfaces';
import editIcon from '../../assets/edit-icon.png';
import removeIcon from '../../assets/icon-delete.svg';
import SelectEmployee from '../SelectEmployee/SelectEmployee';
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  Checkbox,
} from '@mui/material';
import {
  removeTodo,
  completeTodo,
  editTask,
} from '../../redux/tasks/actionCreators';
import {
  checkBoxStyle,
  checkBoxStyleLight,
  editTaskStyles,
} from '../../utils/commonData';
import './ToDo.scss';
import '../../App.scss';

const label = { 'aria-label': 'Checkbox demo' };

const ToDo: React.FC<TodoInterface> = ({
  id,
  text,
  completed,
  responsiblePerson,
}) => {
  const [editText, setEditText] = useState<string>(text);
  const [open, setOpen] = useState<boolean>(false);
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  const dispatch = useDispatch();
  const changeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleCheckBox = (id: string) => {
    dispatch(completeTodo(id));
  };
  const editHandle = (id: string, newText: string) => {
    dispatch(editTask(id, newText));
    handleClose();
  };

  return (
    <li className='todo__todo-item' key={id}>
      <div className='-todo__todo-text'>
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
              <p>In progress</p>
            ) : (
              <p className='todo__todo-status-task-complete'>Completed</p>
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
        <div className='todo__todo-edit'>
          <button onClick={handleOpen}>
            <img
              className='todo__todo-edit-icon'
              src={editIcon}
              alt='Edit Icon'
            />
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={editTaskStyles.editBoxStyles}>
              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                align='center'
                sx={editTaskStyles.titleEdit}
              >
                Edit Todo
              </Typography>
              <TextField
                id='outlined-basic'
                label='Edit Task'
                variant='outlined'
                sx={editTaskStyles.textFieldEdit}
                defaultValue={text}
                onChange={changeEditInput}
              />
              <Button
                onClick={() => editHandle(id, editText)}
                sx={editTaskStyles.editSubmit}
                variant='contained'
              >
                Edit
              </Button>
            </Box>
          </Modal>
        </div>
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
