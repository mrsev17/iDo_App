import { useSelector, useDispatch } from 'react-redux';
import { StateToogle } from '../../interfaces';
import {
  clearAllTodos,
  clearCompleted,
} from '../../redux/tasks/actionCreators';
import { Dispatch } from 'redux';
//
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
//
import { useState } from 'react';
import { IconGear } from '../IconGear';
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import BtnDefaultModal from '../BtnDefaultModal/BtnDefaultModal';
import './Footer.scss';

const settingsButton = {
  padding: '0',
  margin: '0',
  minWidth: 'auto',
};

const styleModalContent = {
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
  backgroundColor: '#404040',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

const boxSettingsContent = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch: Dispatch = useDispatch();
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const clearLS = (): void => {
    dispatch(clearAllTodos());
  };
  const clearCompletedToDo: () => void = () => dispatch(clearCompleted());
  return (
    <footer className={mode ? 'footer fade-in dark-footer' : 'footer fade-in'}>
      <div className='footer__wrapper'>
        <div className='footer__left-side'></div>
        <div className='footer__right-side'>
          <Button sx={settingsButton} onClick={handleOpen}>
            <IconGear />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='child-modal-title'
            aria-describedby='child-modal-description'
          >
            <Box sx={styleModalContent}>
              <h2>{getCurrentLangDB.footer.modalTitle}</h2>
              <Box sx={boxSettingsContent}>
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
        </div>
      </div>
    </footer>
  );
};
