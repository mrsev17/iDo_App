import { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { putOnTaskEmployee } from '../../redux/tasks/actionCreators';
import { SelectProps } from '../../interfaces';
import './SelectEmployee.scss';

const SelectEmployee: React.FC<SelectProps> = ({ responsiblePerson, id }) => {
  const getListEmployees = useSelector((state: any) => state.tasks.employees);
  const [selectedOption, setSelectedOption] =
    useState<string>(responsiblePerson);
  const dispatch = useDispatch();
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    dispatch(putOnTaskEmployee(e.target.value, id));
  };
  return (
    <div className='select-employee'>
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
