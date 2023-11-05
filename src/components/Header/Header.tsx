import { useSelector } from 'react-redux';
import { ToggleSwitch } from '../ToggleSwitch';
import { StateToogle } from '../../interfaces';
import { IconCat } from '../IconCat/IconCat';
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import './Header.scss';

export const Header: React.FC = () => {
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <header className={mode ? 'header fade-in dark-header' : 'header fade-in'}>
      <div className='header__right-side'>
        <h2>{getCurrentLangDB.header.title}</h2>
        <IconCat />
      </div>
      <div className='header__laguage-options'>
        <LanguageOptions />
      </div>
      <div className='header__left-side'>
        <ToggleSwitch />
      </div>
    </header>
  );
};
