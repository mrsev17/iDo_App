import { useSelector, useDispatch } from 'react-redux';
import { TodoInterface } from '../../interfaces';
import { useSelectMode } from '../../redux/selectors/modeSelector';
//
import { Reorder, AnimatePresence } from 'framer-motion';
import { reorderTodo } from '../../redux/tasks/actionCreators';
//
import ToDo from '../ToDo/ToDo';
import './ListOfTasks.scss';

const ListOfTasks: React.FC = () => {
  const tasks: TodoInterface[] = useSelector((state: any) => state.tasks.todos);
  const mode: boolean = useSelectMode();
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const dispatch = useDispatch();
  const handleReorder = (newOrder: any) => {
    dispatch(reorderTodo(newOrder));
  };
  return (
    <div className={mode ? 'todo__list-active' : 'todo__list-active-dark'}>
      <Reorder.Group
        // as='ul'
        axis='y'
        values={tasks}
        layoutScroll
        onReorder={handleReorder}
      >
        <AnimatePresence>
          {tasks.length !== 0 ? (
            tasks.map((todo: TodoInterface) => {
              return (
                <ToDo
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  responsiblePerson={todo.responsiblePerson}
                  todo={todo}
                />
              );
            })
          ) : (
            <span
              className={
                mode
                  ? 'todo__list-active-title-dark'
                  : 'todo__list-active-title-light'
              }
            >
              {getCurrentLangDB.mainPage.infoAboutEmptyList}
            </span>
          )}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default ListOfTasks;
