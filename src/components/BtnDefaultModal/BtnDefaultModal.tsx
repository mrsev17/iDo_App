import Button from '@mui/material/Button';

const settingsButtons = {
  margin: '0 auto !important',
  fontSize: '14px',
  backgroundColor: 'azure',
  color: '#9896f1',
  maxWidth: '320px',
  width: '100%',
  height: '36px',
  border: '1px solid #9896f1',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'whiteSmoke',
  },
};

interface BtnDefaultModalProps {
  onClick: () => void;
  content: string;
}

const BtnDefaultModal: React.FC<BtnDefaultModalProps> = ({
  onClick,
  content,
}) => {
  return (
    <Button sx={settingsButtons} onClick={onClick}>
      {content}
    </Button>
  );
};

export default BtnDefaultModal;
