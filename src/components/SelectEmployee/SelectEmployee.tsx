import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putOnTaskEmployee } from '../../redux/tasks/actionCreators';
import { SelectProps, StateToogle } from '../../interfaces';
import { Dispatch } from 'redux';
import './SelectEmployee.scss';

const SelectEmployee: React.FC<SelectProps> = ({
  responsiblePerson,
  id,
  text,
}) => {
  const [selectedOption, setSelectedOption] =
    useState<string>(responsiblePerson);
  const getListEmployees: string[] = useSelector(
    (state: any) => state.tasks.employees
  );
  const dispatch: Dispatch = useDispatch();
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    dispatch(putOnTaskEmployee(e.target.value, id, text));
  };
  return (
    <div
      className={mode ? 'todo__select-employee' : 'todo__select-employee-dark'}
    >
      <select value={selectedOption} onChange={handleSelectChange}>
        {getListEmployees.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectEmployee;
