import { useSelector } from 'react-redux';
import { stateToogle } from '../../interfaces';
import NewEmployee from '../../components/NewEmployee/NewEmployee';
import './Employees.scss';

export const HtmlCard = () => {
  const mode = useSelector((state: stateToogle) => state.mode.toggle);
  return (
    <div className='content-page flip-container'>
      <div className='flipper'>
        <div className={mode ? 'front-dark' : 'front'}>
          <div className='employees-content'>
            <h2>Employees</h2>
            <NewEmployee />
          </div>
        </div>
        <div className={mode ? 'back-dark' : 'back'}></div>
      </div>
    </div>
  );
};
