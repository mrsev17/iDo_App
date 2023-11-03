import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoInterface } from '../../interfaces';
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
import './ToDo.scss';
import '../../App.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#e7eaf6',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const ToDo: React.FC<TodoInterface> = ({
  id,
  text,
  completed,
  responsiblePerson,
}) => {
  const [editText, setEditText] = useState<string>(text);
  const [open, setOpen] = useState<boolean>(false);
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
    <li className='todo-item' key={id}>
      <div className='todo-text'>
        <p className={completed ? 'completed-task' : ''}>{text}</p>
      </div>

      <div className='todo-actions'>
        <div className='todo-employee'>
          <SelectEmployee responsiblePerson={responsiblePerson} id={id} />
        </div>
        <div className='todo-complete'>
          <div className='todo-status'>
            {!completed ? (
              <p>In progress</p>
            ) : (
              <p className='todo-status-task-complete'>Completed</p>
            )}
          </div>
          <Checkbox
            checked={completed}
            onChange={() => handleCheckBox(id)}
            color='secondary'
            {...label}
            sx={{
              transform: 'scale(1.25)',
              marginTop: '1px',
              padding: 0,
              color: 'azure',
              '&.Mui-checked': {
                color: '#9896f1',
              },
            }}
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
                sx={{ mb: 2.5, color: '#6a5acd' }}
              >
                Edit Todo
              </Typography>
              <TextField
                id='outlined-basic'
                label='Edit Task'
                variant='outlined'
                sx={{
                  width: '100%',
                  color: 'azure',
                  '& label': {
                    color: '#6a5acd',
                  },
                  '& input:focus + label': {
                    color: '#6a5acd',
                    borderColor: '#6a5acd',
                  },
                  '& input': {
                    color: '#6a5acd',
                    '&:focus': {
                      borderColor: '#6a5acd',
                    },
                  },
                  '& fieldset': {
                    borderColor: '#6a5acd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6a5acd',
                  },
                  '&:focus fieldset': {
                    borderColor: '#6a5acd',
                  },
                }}
                defaultValue={text}
                onChange={changeEditInput}
              />
              <Button
                onClick={() => editHandle(id, editText)}
                sx={{
                  mt: 2.5,
                  width: '100%',
                  backgroundColor: '#6a5acd',
                  '&:hover': {
                    backgroundColor: '#9896f1',
                  },
                }}
                variant='contained'
              >
                Edit
              </Button>
            </Box>
          </Modal>
        </div>
        <div className='todo-remove'>
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
