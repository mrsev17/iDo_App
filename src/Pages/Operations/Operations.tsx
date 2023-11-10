import { useSelector } from 'react-redux';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import './Operations.scss';

export const Operations: React.FC = () => {
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const mode: boolean = useSelectMode();
  const actions = useSelector((state: any) => state.tasks.actions);
  const currentLangActions = languageState.currentLanguage;
  const getCurrentActionsByLanguage = (language: string): string[] => {
    if (language === 'English') {
      return actions.english;
    }
    if (language === 'Ukrainian') {
      return actions.ukranian;
    }
    return [''];
  };
  const actionsData: string[] | undefined =
    getCurrentActionsByLanguage(currentLangActions);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <h2
            className={
              mode
                ? 'content-title-operations-dark'
                : 'content-title-operations-light'
            }
          >
            {getCurrentLangDB.operationsPage.title}
          </h2>
          <ul className='todo-app__list-actions'>
            {actionsData.length === 0 ? (
              <li>{getCurrentLangDB.operationsPage.titleEmptyList}</li>
            ) : (
              actionsData.map((action: string, id: number) => (
                <li key={id}>
                  <p>
                    {id + 1}. {action}
                  </p>
                  <div className='todo-app__user-actions-line'></div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
