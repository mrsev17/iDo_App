import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { newEmployee } from '../../redux/tasks/actionCreators';
import './NewEmployee.scss';

const NewEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<string>('');
  const employeeInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setEmployee(e.target.value);
  };
  const dispatch = useDispatch();
  const newemployeeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (employee.length > 2) {
      dispatch(newEmployee(employee));
      setEmployee('');
    }
  };
  return (
    <div className='new-employee-form'>
      <form className='form-new-employee' onSubmit={newemployeeSubmit}>
        <input
          type='text'
          value={employee}
          onChange={employeeInputHandle}
          placeholder='Write new Employee'
          maxLength={28}
        />
        <button>Add new employee</button>
      </form>
    </div>
  );
};

export default NewEmployee;
