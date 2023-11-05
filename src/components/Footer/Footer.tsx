import { useSelector, useDispatch } from 'react-redux';
import { StateToogle } from '../../interfaces';
import {
  clearAllTodos,
  clearCompleted,
} from '../../redux/tasks/actionCreators';
import './Footer.scss';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: StateToogle) => state.mode.toggle);
  const clearLS = (): void => {
    dispatch(clearAllTodos());
  };
  const clearCompletedToDo = () => dispatch(clearCompleted());
  return (
    <footer className={mode ? 'footer fade-in dark-footer' : 'footer fade-in'}>
      <div className='footer__wrapper'>
        <div className='footer__left-side'>
          <button className='footer__local-storage-clear-btn' onClick={clearLS}>
            Clear all data about tasks
          </button>
        </div>
        <div className='footer__right-side'>
          <button
            className='footer__completed-clear-btn'
            onClick={clearCompletedToDo}
          >
            Remove completed tasks
          </button>
        </div>
      </div>
    </footer>
  );
};
