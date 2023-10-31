import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../../App.scss';

interface todoIterface {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson: string;
}

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

export default function LinearWithValueLabel() {
  const tasks = useSelector((state: any) => state.tasks.todos);
  const completeTasks = tasks.filter(
    (item: todoIterface) => item.completed !== false
  );
  const currentProgress = (completeTasks.length / tasks.length) * 100;
  const [progress, setProgress] = useState(currentProgress);

  useEffect(() => {
    setProgress(currentProgress);
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) =>
    //     prevProgress >= 100 ? 0 : prevProgress + 10
    //   );
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
  }, [currentProgress]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
