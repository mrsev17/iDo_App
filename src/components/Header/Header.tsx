import { useSelector } from 'react-redux';
import { ToggleSwitch } from '../ToggleSwitch';
import { StateToogle } from '../../interfaces';
import { IconCat } from '../IconCat/IconCat';
import './Header.scss';

export const Header: React.FC = () => {
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  return (
    <header className={mode ? 'header fade-in dark-header' : 'header fade-in'}>
      <div className='header__right-side'>
        <h2>ToDo App</h2>
        <IconCat />
      </div>
      <div className='header__left-side'>
        <ToggleSwitch />
      </div>
    </header>
  );
};
