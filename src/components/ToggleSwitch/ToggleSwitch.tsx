import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '../../redux/mode/actionCreators';
import { RootState } from '../../redux/store';
import { Dispatch } from 'redux';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './ToggleSwitch.scss';

export const ToggleSwitch: React.FC = () => {
  const isChecked: boolean = useSelector(
    (state: RootState) => state.mode.toggle
  );
  const dispatch: Dispatch = useDispatch();
  const handleToggle = (): void => {
    dispatch(switchMode(!isChecked));
  };
  return (
    <div className='todo__switch-mode-container'>
      <span className={isChecked ? 'label-text-dark' : 'label-text'}>
        {isChecked ? (
          <DarkModeOutlinedIcon sx={{ color: '#9896f1' }} />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </span>
      <div className='toggle-switch'>
        <input
          type='checkbox'
          className='checkbox'
          name='toggleTheme'
          id='toggleTheme'
          checked={isChecked}
          onChange={handleToggle}
        />
        <label className='label' htmlFor='toggleTheme'>
          <span className='inner' />
          <span className='switch' />
        </label>
      </div>
    </div>
  );
};
