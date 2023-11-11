import { useState } from 'react';
import { StateToogle } from '../../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Box, Modal, Button } from '@mui/material';
import { IconGear } from '../IconGear';
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import BtnDefaultModal from '../BtnDefaultModal/BtnDefaultModal';
import {
  clearAllTodos,
  clearCompleted,
} from '../../redux/tasks/actionCreators';
import './ModalSettings.scss';

const ModalSettings = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  const styleModalSettings = {
    mainContainer: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
      width: '96%',
      backgroundColor: mode ? '#363b4e' : '#c4bbf0',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    boxSettingsContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    settingsButtonGear: {
      padding: '0',
      margin: '8px auto',
      minWidth: 'auto',
    },
  };
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const dispatch: Dispatch = useDispatch();
  const clearLS = (): void => {
    dispatch(clearAllTodos());
  };
  const clearCompletedToDo: () => void = () => dispatch(clearCompleted());
  return (
    <>
      <Button sx={styleModalSettings.settingsButtonGear} onClick={handleOpen}>
        <IconGear />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={styleModalSettings.mainContainer}>
          <h2
            className={
              mode ? 'todo__settings-title-dark' : 'todo__settings-title-light'
            }
          >
            {getCurrentLangDB.footer.modalTitle}
          </h2>
          <Box sx={styleModalSettings.boxSettingsContent}>
            <LanguageOptions />
            <BtnDefaultModal
              onClick={clearCompletedToDo}
              content={getCurrentLangDB.footer.removeCompleted}
            />
            <BtnDefaultModal
              onClick={clearLS}
              content={getCurrentLangDB.footer.clearAllData}
            />
            <BtnDefaultModal
              onClick={handleClose}
              content={getCurrentLangDB.footer.modalCloseBtn}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalSettings;
