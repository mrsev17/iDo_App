import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateToogle } from '../../interfaces';

export const JavaScriptCard = () => {
  const mode = useSelector((state: StateToogle) => state.mode.toggle);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <h2 className='content-title'>Active Tasks</h2>
        </div>
        <div className={mode ? 'back-dark' : 'back'}></div>
      </div>
    </div>
  );
};
