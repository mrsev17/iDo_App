import { useSelector } from 'react-redux';
import { StateToogle } from '../../interfaces';
import NewTodo from '../../components/NewTodo/NewTodo';
import ListOfTasks from '../../components/lIstOfTasks/ListOfTasks';
import CircularWithValueLabel from '../../components/CircularProgress/CircularProgress';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const tasks = useSelector((state: any) => state.tasks.todos);
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <div className='content-title-wrapper'>
            <h2
              className={
                mode
                  ? 'main-page-content-title-dark'
                  : 'main-page-content-title'
              }
            >
              {tasks.length === 0 ? (
                `${getCurrentLangDB.mainPage.title}`
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
      </div>
    </div>
  );
};
