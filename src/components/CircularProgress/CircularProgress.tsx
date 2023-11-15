import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { TodoInterface, StateToogle } from '../../interfaces';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import '../../App.scss';
import './CircularProgress.scss';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  const mode: boolean = useSelectMode();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          width='30px'
          variant='body1'
          color={mode ? '#9896f1' : '#e6e6fa'}
          fontSize='18px'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const LinearWithValueLabel: React.FC = () => {
  const mode = useAppSelector((state: StateToogle) => state.mode.toggle);
  const tasks: TodoInterface[] = useAppSelector(
    (state: any) => state.tasks.todos
  );
  const completeTasks = () => {
    if (tasks) {
      return tasks.filter((item: TodoInterface) => item.completed !== false);
    }
    return 0;
  };
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
          backgroundColor: `${mode ? 'azure' : 'rgb(186, 190, 245)'}`,
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
