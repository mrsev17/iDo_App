import { useSelector } from 'react-redux';
import { StateToogle } from '../../interfaces';
import ModalSettings from '../ModalSettings/ModalSettings';
import './Footer.scss';

export const Footer: React.FC = () => {
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  return (
    <footer className={mode ? 'footer fade-in dark-footer' : 'footer fade-in'}>
      <div className='footer__wrapper'>
        <div className='footer__left-side'></div>
        <div className='footer__right-side'>
          <ModalSettings />
        </div>
      </div>
    </footer>
  );
};
