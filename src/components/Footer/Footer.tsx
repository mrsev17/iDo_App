import { useSelector, useDispatch } from 'react-redux';
import { stateToogle } from '../../interfaces';
import { clearAllTodos } from '../../redux/tasks/actionCreators';
import './Footer.scss';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: stateToogle) => state.mode.toggle);
  const clearLS = (): void => {
    dispatch(clearAllTodos());
  };
  return (
    <footer className={mode ? 'fade-in dark-footer' : 'fade-in'}>
      <div className='footer-wrapper'>
        <div className='footer__right-side'>
          <button className='local-storage-clear-btn' onClick={clearLS}>
            Clear all data
          </button>
        </div>
        <div className='footer__left-side'></div>
      </div>
    </footer>
  );
};
