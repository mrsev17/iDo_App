import { useSelector, useDispatch } from 'react-redux';
import { stateToogle } from '../../interfaces';
import {
  clearAllTodos,
  clearCompleted,
} from '../../redux/tasks/actionCreators';
import './Footer.scss';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: stateToogle) => state.mode.toggle);
  const clearLS = (): void => {
    dispatch(clearAllTodos());
  };
  const clearCompletedToDo = () => dispatch(clearCompleted());
  return (
    <footer className={mode ? 'fade-in dark-footer' : 'fade-in'}>
      <div className='footer-wrapper'>
        <div className='footer__left-side'>
          <button className='local-storage-clear-btn' onClick={clearLS}>
            Clear all data
          </button>
        </div>
        <div className='footer__right-side'>
          <button className='completed-clear-btn' onClick={clearCompletedToDo}>
            Remove completed
          </button>
        </div>
      </div>
    </footer>
  );
};
