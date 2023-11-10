import Button from '@mui/material/Button';
import { useSelectMode } from '../../redux/selectors/modeSelector';

interface BtnDefaultModalProps {
  onClick: () => void;
  content: string;
}

const BtnDefaultModal: React.FC<BtnDefaultModalProps> = ({
  onClick,
  content,
}) => {
  const mode: boolean = useSelectMode();
  const settingsButtonsLight = {
    margin: '0 auto !important',
    fontSize: '14px',
    backgroundColor: '#6a5acd',
    color: 'azure',
    maxWidth: '320px',
    width: '100%',
    height: '36px',
    border: '1px solid #6a5acd',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#9896f1',
      color: 'azure',
    },
  };
  const settingsButtonsDark = {
    margin: '0 auto !important',
    fontSize: '14px',
    backgroundColor: '#6a5acd',
    color: 'azure',
    maxWidth: '320px',
    width: '100%',
    height: '36px',
    border: '1px solid #6a5acd',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#9896f1',
      color: 'azure1',
    },
  };
  return (
    <Button
      sx={mode ? settingsButtonsDark : settingsButtonsLight}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default BtnDefaultModal;
