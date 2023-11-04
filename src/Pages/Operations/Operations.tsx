import { useSelector } from 'react-redux';
import { StateToogle } from '../../interfaces';
import './Operations.scss';

export const Operations: React.FC = () => {
  const mode = useSelector((state: StateToogle) => state.mode.toggle);
  const actions = useSelector((state: any) => state.tasks.actions);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <h2 className='content-title'>This page for OPERATIONS</h2>
          <ul className='todo-app__list-actions'>
            {actions.length === 0 ? (
              <li>
                Make some actions in app and list will be filled with actions
              </li>
            ) : (
              actions.map((action: string, id: number) => (
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