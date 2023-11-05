import { Box, TextField, Button, Typography, Modal } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { editTaskStyles } from '../../utils/commonData';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../../redux/tasks/actionCreators';
import { Dispatch } from 'redux';
import { ToDoEditModalProps } from '../../interfaces';
import editIcon from '../../assets/edit-icon.png';
import './ToDoEditModal.scss';

const ToDoEditModal: React.FC<ToDoEditModalProps> = ({ text, id }) => {
  const [editText, setEditText] = useState<string>(text);
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const changeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };
  const [open, setOpen] = useState<boolean>(false);
  const dispatch: Dispatch = useDispatch();
  const handleOpen: () => void = () => setOpen(true);
  const handleClose: () => void = () => setOpen(false);
  const editHandle = (id: string, newText: string): void => {
    dispatch(editTask(id, newText));
    handleClose();
  };
  return (
    <div className='todo__todo-edit'>
      <button onClick={handleOpen}>
        <img className='todo__todo-edit-icon' src={editIcon} alt='Edit Icon' />
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
            {getCurrentLangDB.mainPage.editTaskTitle}
          </Typography>
          <TextField
            id='outlined-basic'
            label={getCurrentLangDB.mainPage.editTaskLabel}
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
            {getCurrentLangDB.mainPage.editTaskSubmit}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ToDoEditModal;
