export const badgeStyle = {
  width: '100%',
  '& .MuiBadge-badge': {
    color: 'azure',
    backgroundColor: '#6a5acd',
  },
};

export const checkBoxStyle = {
  transform: 'scale(1.25)',
  marginTop: '1px',
  padding: 0,
  color: 'azure',
  '&.Mui-checked': {
    color: '#9896f1',
  },
};

export const checkBoxStyleLight = {
  transform: 'scale(1.25)',
  marginTop: '1px',
  padding: 0,
  color: 'azure',
  '&.Mui-checked': {
    color: 'azure',
  },
};

export const textFieldEdit = {
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
};

export const editTaskStyles = {
  editBoxStyles: {
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
  },
  titleEdit: {
    mb: 2.5,
    color: '#6a5acd',
  },
  textFieldEdit: {
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
  },
  editSubmit: {
    mt: 2.5,
    width: '100%',
    backgroundColor: '#6a5acd',
    '&:hover': {
      backgroundColor: '#9896f1',
    },
  },
};

export const employeeItemStyles = {
  dialogTitle: {
    color: 'black',
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: '100%',
    maxWidth: '94%',
  },
  buttonRemoveEmployee: {
    fontSize: '12px',
    width: '100%',
    color: 'azure',
    backgroundColor: '#dc2f2f',
    padding: '4px 12px 2px 12px',
    '&:hover': {
      backgroundColor: '#bc2525',
    },
  },
  buttonCloseModal: {
    fontSize: '12px',
    width: '100%',
    color: 'azure',
    backgroundColor: '#6a5acd',
    padding: '4px 12px 2px 12px',
    '&:hover': {
      backgroundColor: '#8f71ff',
    },
  },
};
