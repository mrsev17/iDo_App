import { useState, ChangeEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { SelectProps } from '../../interfaces';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import { useAppDispatch } from '../../hooks';
import { putTaskOnSomebody } from '../../redux/tasks/tasksSlice';
import './SelectEmployee.scss';

const SelectEmployee: React.FC<SelectProps> = ({
  responsiblePerson,
  id,
  text,
}) => {
  const [selectedOption, setSelectedOption] =
    useState<string>(responsiblePerson);
  const getListEmployees: string[] = useAppSelector(
    (state: any) => state.tasks.employees
  );
  const dispatch = useAppDispatch();
  const mode: boolean = useSelectMode();
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const employee = e.target.value;
    setSelectedOption(e.target.value);
    dispatch(putTaskOnSomebody({ employee, id, text }));
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
