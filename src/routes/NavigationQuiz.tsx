import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSelectMode } from '../redux/selectors/modeSelector';
import { Badge } from '@mui/material';
import './AppRouter.scss';

export const NavigationQuiz: React.FC = () => {
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const getTasksLength: number = useSelector(
    (state: any) => state.tasks.todos
  ).length;
  const mode: boolean = useSelectMode();
  const location = useLocation();
  const getEmployeesLength: number = useSelector(
    (state: any) => state.tasks.employees
  ).length;
  const getOperationsLength: number = useSelector(
    (state: any) => state.tasks.actions
  ).length;

  const badgeStyle = {
    width: '100%',
    maxWidth: '380px',
    margin: '0 auto',
    '& .MuiBadge-badge': {
      color: 'azure',
      backgroundColor: mode ? '#6a5acd' : '#363b4e',
    },
  };

  return (
    <div className='todo__navigation'>
      <nav className={mode ? 'nav-wrapper-dark' : 'nav-wrapper'}>
        <>
          <Badge
            className='employee-badge'
            sx={badgeStyle}
            badgeContent={getTasksLength}
            color='default'
          >
            <Link
              className={location.pathname === '/' ? 'active' : 'notActive'}
              to='/'
            >
              {getCurrentLangDB.navigation.tasks}
            </Link>
          </Badge>
        </>

        <Badge
          className='employee-badge'
          sx={badgeStyle}
          badgeContent={getEmployeesLength - 1}
          color='default'
        >
          <Link
            className={
              location.pathname === '/employees' ? 'active' : 'notActive'
            }
            to='/employees'
          >
            {getCurrentLangDB.navigation.employees}
          </Link>
        </Badge>
        <Badge
          className='employee-badge'
          sx={badgeStyle}
          badgeContent={getOperationsLength}
          color='default'
        >
          <Link
            className={
              location.pathname === '/operations' ? 'active' : 'notActive'
            }
            to='/operations'
          >
            {getCurrentLangDB.navigation.operations}
          </Link>
        </Badge>
      </nav>
    </div>
  );
};
