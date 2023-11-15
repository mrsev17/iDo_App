import { TodoInterface } from '../../interfaces';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import { useAppSelector } from '../../hooks';
import ToDo from '../ToDo/ToDo';
import './ListOfTasks.scss';

const ListOfTasks: React.FC = () => {
  const tasks: TodoInterface[] = useAppSelector(
    (state: any) => state.tasks.todos
  );
  const mode: boolean = useSelectMode();
  const languageState = useAppSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <div className={mode ? 'todo__list-active' : 'todo__list-active-dark'}>
      <ul>
        {tasks.length !== 0 ? (
          tasks.map((todo: TodoInterface, index: number) => {
            return (
              <ToDo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                responsiblePerson={todo.responsiblePerson}
                todo={todo}
                index={index}
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
      </ul>
    </div>
  );
};

export default ListOfTasks;
