import { useSelector } from 'react-redux';
import { stateToogle } from '../../interfaces';
import NewTodo from '../../components/NewTodo/NewTodo';
import ListOfTasks from '../../components/lIstOfTasks/ListOfTasks';
import './MainPage.scss';

interface todoIterface {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson: string;
}

export const MainPage: React.FC = () => {
  // const tasks = useSelector((state: any) => state.tasks.todos);
  // const activeTasks = tasks.filter(
  //   (item: todoIterface) => item.completed === false
  // );
  // const completeTasks = tasks.filter(
  //   (item: todoIterface) => item.completed !== false
  // );
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <h2 className='content-title'>Create task</h2>
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
