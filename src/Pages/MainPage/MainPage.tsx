import { useSelector } from 'react-redux';
import { stateToogle } from '../../interfaces';
import NewTodo from '../../components/NewTodo/NewTodo';
import ListOfTasks from '../../components/lIstOfTasks/ListOfTasks';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <h2 className='content-title'>Create new task</h2>
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
