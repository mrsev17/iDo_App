import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ProgressEmployee.scss';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        margin: '0 auto',
        backgroundColor: '#6a5acd',
        padding: '6px',
        borderRadius: '8px',
      }}
    >
      <CircularProgress
        variant='determinate'
        sx={{ color: '#e6e6fa' }}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='caption'
          component='div'
          color='#e6e6fa'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface ProgressEmployeePropse {
  currentProgressEmployee: number;
}

const ProgressEmployee: React.FC<ProgressEmployeePropse> = ({
  currentProgressEmployee,
}) => {
  return <CircularProgressWithLabel value={currentProgressEmployee} />;
};

export default ProgressEmployee;
