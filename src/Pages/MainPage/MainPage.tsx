import { useSelector } from 'react-redux';
import { stateToogle } from '../../interfaces';
import NewTodo from '../../components/NewTodo/NewTodo';
import ListOfTasks from '../../components/lIstOfTasks/ListOfTasks';
import CircularWithValueLabel from '../../components/CircularProgress/CircularProgress';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.todos);
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <div className='content-title-wrapper'>
            <h2 className='content-title'>
              {tasks.length === 0 ? (
                'Create new task'
              ) : (
                <div className='fade-in'>
                  <CircularWithValueLabel />
                </div>
              )}
            </h2>
          </div>

          <div className='main-content-page-todo'>
            <NewTodo />
            <ListOfTasks />
          </div>
        </div>
        <div className={mode ? 'back-dark' : 'back'}></div>
      </div>
    </div>
  );
};
