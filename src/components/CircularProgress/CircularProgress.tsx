import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TodoInterface } from '../../interfaces';
import '../../App.scss';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant='body2'
          color='text.secondary'
          fontSize='18px'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const LinearWithValueLabel: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.todos);
  const completeTasks = tasks.filter(
    (item: TodoInterface) => item.completed !== false
  );
  const currentProgress: number = (completeTasks.length / tasks.length) * 100;
  const [progress, setProgress] = useState<number>(currentProgress);

  useEffect(() => {
    setProgress(currentProgress);
  }, [currentProgress]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel
        sx={{
          borderRadius: '6px',
          backgroundColor: 'white',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#9896f1',
          },
        }}
        value={progress}
      />
    </Box>
  );
};

export default LinearWithValueLabel;
