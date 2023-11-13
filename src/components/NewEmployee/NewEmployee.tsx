import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { newEmployee } from '../../redux/tasks/tasksSlice';
import './NewEmployee.scss';

const NewEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<string>('');
  const employeeInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setEmployee(e.target.value);
  };
  const dispatch = useAppDispatch();
  const newemployeeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (employee.length > 2) {
      dispatch(newEmployee(employee));
      setEmployee('');
    }
  };
  const languageState = useAppSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  return (
    <div className='todo__new-employee-form'>
      <form className='todo__form-new-employee' onSubmit={newemployeeSubmit}>
        <input
          type='text'
          value={employee}
          onChange={employeeInputHandle}
          placeholder={getCurrentLangDB.employeesPage.placeholderNewEmployee}
          maxLength={28}
        />
        <button>{getCurrentLangDB.employeesPage.submitNewEmployee}</button>
      </form>
    </div>
  );
};

export default NewEmployee;
