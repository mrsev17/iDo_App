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
import './Footer.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //
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
        <div className='footer__left-side'>
          {/* <button className='footer__local-storage-clear-btn' onClick={clearLS}>
            {getCurrentLangDB.footer.clearAllData}
          </button> */}
        </div>
        <div className='footer__right-side'>
          {/* <button
            className='footer__completed-clear-btn'
            onClick={clearCompletedToDo}
          >
            {getCurrentLangDB.footer.removeCompleted}
          </button> */}
          <Button onClick={handleOpen}>
            <IconGear />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='child-modal-title'
            aria-describedby='child-modal-description'
          >
            <Box
              sx={{
                ...style,
                width: 400,
                backgroundColor: '#404040',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <h2 className='footer__modal-title' id='child-modal-title'>
                Actions with data
              </h2>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <LanguageOptions />
                <Button
                  sx={{
                    fontSize: '14px',
                    backgroundColor: 'azure',
                    color: 'red',
                    '&:hover': {
                      backgroundColor: 'whiteSmoke',
                    },
                  }}
                  className='footer__completed-clear-btn'
                  onClick={clearCompletedToDo}
                >
                  {getCurrentLangDB.footer.removeCompleted}
                </Button>
                <Button
                  sx={{
                    fontSize: '14px',
                    backgroundColor: 'azure',
                    color: 'red',
                    '&:hover': {
                      backgroundColor: 'whiteSmoke',
                    },
                  }}
                  className='footer__local-storage-clear-btn'
                  onClick={clearLS}
                >
                  {getCurrentLangDB.footer.clearAllData}
                </Button>
              </Box>
              <Button
                className='footer__close-modal-btn'
                sx={{
                  margin: '0 auto',
                  backgroundColor: 'azure',
                  color: '#9896f1',
                  maxWidth: '160px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: 'whiteSmoke',
                  },
                }}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Modal>
        </div>
      </div>
    </footer>
  );
};
