import { useSelector } from 'react-redux';
import { ToggleSwitch } from '../ToggleSwitch';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import { IconCat } from '../IconCat/IconCat';
import './Header.scss';

export const Header: React.FC = () => {
  const mode: boolean = useSelectMode();
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <header className={mode ? 'header fade-in dark-header' : 'header fade-in'}>
      <div className='header__left-side'>
        <IconCat />
        <h2 className={mode ? 'header__name-app-dark' : 'header__name-app'}>
          {getCurrentLangDB.header.title}
        </h2>
      </div>
      <div className='header__right-side'>
        <ToggleSwitch />
      </div>
    </header>
  );
};
