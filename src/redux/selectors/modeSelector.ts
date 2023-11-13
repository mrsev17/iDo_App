import { useAppSelector } from '../../hooks';
import { StateToogle } from '../../interfaces';

export const useSelectMode = () => {
  return useAppSelector((state: StateToogle) => state.mode.toggle);
};
