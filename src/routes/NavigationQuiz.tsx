import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateToogle } from '../interfaces';
import { badgeStyle } from '../utils/commonData';
import { Badge } from '@mui/material';
import './AppRouter.scss';

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
        <Badge
          className='employee-badge'
          sx={badgeStyle}
          badgeContent={getEmployeesLength - 1}
          color='default'
        >
          <Link
            className={location.pathname === '/employees' ? 'active' : ''}
            to='/employees'
          >
            Employees
          </Link>
        </Badge>
        <Link
          className={location.pathname === '/operations' ? 'active' : ''}
          to='/operations'
        >
          Operations
        </Link>
      </nav>
    </div>
  );
};
