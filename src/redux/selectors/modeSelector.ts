import { useSelector } from 'react-redux';
import { StateToogle } from '../../interfaces';

export const useSelectMode = () => {
  return useSelector((state: StateToogle) => state.mode.toggle);
};
