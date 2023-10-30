import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeTodo,
  completeTodo,
  editTask,
} from '../../redux/tasks/actionCreators';
import editIcon from '../../assets/edit-icon.png';
//
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//
import './ToDo.scss';
import '../../App.scss';

interface ToDoProps {
  id: string;
  text: string;
  completed: boolean;
  responsiblePerson?: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // bgcolor: '$color-bg-dark',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const ToDo: React.FC<ToDoProps> = ({ id, text, completed }) => {
  const [editText, setEditText] = useState<string>(text);
  const changeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };
  //
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //
  const dispatch = useDispatch();
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
    <li className='todo-item' key={id}>
      <div className='todo-text'>
        <p className={completed ? 'completed-task' : ''}>{text}</p>
      </div>

      <div className='todo-actions'>
        <div className='todo-complete'>
          <div className='todo-status'>
            {!completed ? (
              <p>In progress</p>
            ) : (
              <p className='todo-status-task-complete'>Completed</p>
            )}
          </div>
          <input
            type='checkbox'
            checked={completed}
            onChange={() => handleCheckBox(id)}
          />
        </div>
        <div className='todo-edit'>
          <button onClick={handleOpen}>
            <img className='todo-edit-icon' src={editIcon} alt='Edit Icon' />
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                align='center'
                sx={{ mb: 2.5, color: 'text.disabled' }}
              >
                Edit Todo
              </Typography>
              <TextField
                id='outlined-basic'
                label='Edit Text'
                variant='outlined'
                sx={{ width: '100%' }}
                defaultValue={text}
                // value={text}
                onChange={changeEditInput}
              />
              <Button
                onClick={() => editHandle(id, editText)}
                sx={{ mt: 2.5, width: '100%' }}
                variant='contained'
              >
                Edit
              </Button>
            </Box>
          </Modal>
        </div>
        <div className='todo-remove'>
          <button onClick={() => handleRemove(id)}>X</button>
        </div>
      </div>
    </li>
  );
};
export default ToDo;
