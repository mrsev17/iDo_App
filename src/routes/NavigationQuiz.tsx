import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { stateToogle } from '../interfaces';
import './AppRouter.scss';

export const NavigationQuiz = () => {
  const mode = useSelector((state: stateToogle) => state.mode.toggle);
  const location = useLocation();
  return (
    <div>
      <nav className={mode ? 'nav-wrapper-dark' : 'nav-wrapper'}>
        <Link className={location.pathname === '/' ? 'active' : ''} to='/'>
          Create New Task
        </Link>
        <Link
          className={location.pathname === '/javascript-quiz' ? 'active' : ''}
          to='/javascript-quiz'
        >
          Active Tasks
        </Link>
        <Link
          className={location.pathname === '/html-quiz' ? 'active' : ''}
          to='/html-quiz'
        >
          Performers
        </Link>
        <Link
          className={location.pathname === '/css-quiz' ? 'active' : ''}
          to='/css-quiz'
        >
          Operations
        </Link>
      </nav>
    </div>
  );
};
