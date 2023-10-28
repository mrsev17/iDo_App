import { useSelector } from 'react-redux';
import { ToggleSwitch } from '../ToggleSwitch';
import { stateToogle } from '../../interfaces';
import './Header.scss';

export const Header = () => {
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);
  return (
    <header className={mode ? 'fade-in dark-header' : 'fade-in'}>
      <div className='header__right-side'>
        <h2>ToDo App</h2>
      </div>
      <div className='header__left-side'>
        <ToggleSwitch />
      </div>
    </header>
  );
};
