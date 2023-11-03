import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateToogle } from '../interfaces';
import './AppRouter.scss';

import { Badge } from '@mui/material';

const badgeStyle = {
  width: '100%',
  '& .MuiBadge-badge': {
    color: 'azure',
    backgroundColor: '#6a5acd',
  },
};

export const NavigationQuiz = () => {
  const getTasksLength = useSelector((state: any) => state.tasks.todos).length;
  const getEmployeesLength = useSelector(
    (state: any) => state.tasks.employees
  ).length;
  const mode = useSelector((state: StateToogle) => state.mode.toggle);
  const location = useLocation();
  return (
    <div>
      <nav className={mode ? 'nav-wrapper-dark' : 'nav-wrapper'}>
        <Badge
          className='employee-badge'
          sx={badgeStyle}
          badgeContent={getTasksLength}
          color='default'
        >
          <Link className={location.pathname === '/' ? 'active' : ''} to='/'>
            Tasks
          </Link>
        </Badge>
        {/* <Link
          className={location.pathname === '/javascript-quiz' ? 'active' : ''}
          to='/javascript-quiz'
        >
          Active Tasks
        </Link> */}
        <Badge
          className='employee-badge'
          sx={badgeStyle}
          badgeContent={getEmployeesLength - 1}
          color='default'
        >
          <Link
            className={location.pathname === '/html-quiz' ? 'active' : ''}
            to='/html-quiz'
          >
            Performers
          </Link>
        </Badge>
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
