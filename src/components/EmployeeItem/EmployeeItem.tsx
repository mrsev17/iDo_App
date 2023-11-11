import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Badge,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoInterface, EmployeeProps } from '../../interfaces';
import { useState } from 'react';
import { deleteEmployee } from '../../redux/tasks/actionCreators';
import { employeeItemStyles } from '../../utils/commonData';
import PersonalList from '../PersonalList/PersonalList';
import BtnDefaultModal from '../BtnDefaultModal/BtnDefaultModal';
import ProgressEmployee from '../ProgressEmployee/ProgressEmployee';
import { useSelectMode } from '../../redux/selectors/modeSelector';
import './EmployeeItem.scss';

const EmployeeItem: React.FC<EmployeeProps> = ({ employee, id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const languageState = useSelector((state: any) => state.tasks.languages);
  const getCurrentLangDB = languageState.currentDataBase;
  const dispatch: Dispatch = useDispatch();
  const getTasks: TodoInterface[] = useSelector(
    (state: any) => state.tasks.todos
  );
  const getTasksEmployee: TodoInterface[] = getTasks.filter(
    (task: TodoInterface) => task.responsiblePerson === employee
  );
  const getCompletedTasks = getTasksEmployee.filter(
    (task) => task.completed === true
  );
  const currentProgressEmployeeCalc = () => {
    if (getCompletedTasks.length) {
      return (getCompletedTasks.length / getTasksEmployee.length) * 100;
    }
    return 0;
  };
  const currentProgressEmployee = currentProgressEmployeeCalc();
  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const removeEmployee = (id: number, nameEmployee: string): void => {
    dispatch(deleteEmployee(id, nameEmployee));
    handleClose();
  };
  const mode: boolean = useSelectMode();
  const badgeStyleEmployee = {
    width: '100%',
    margin: '0 auto',

    '& .MuiBadge-badge': {
      color: 'azure',
      backgroundColor: mode ? '#6a5acd' : '#363b4e',
    },
  };
  return (
    <>
      <Badge
        className='todo__employee-badge'
        sx={badgeStyleEmployee}
        badgeContent={getTasksEmployee.length}
        color='default'
      >
        <li className='todo__employee-item'>
          <div className='todo__employee-item-part-left'>
            <p>
              {id}. {employee}
            </p>
          </div>
          <div className='todo__employee-item-part-right'>
            <button
              className='todo__employee-item-actions'
              onClick={handleClickOpen}
            >
              {getCurrentLangDB.employeesPage.actionsBtn}
            </button>
            <Dialog
              sx={{ width: '100%', maxWidth: '100%', textAlign: 'center' }}
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle
                sx={employeeItemStyles.dialogTitle}
                id='alert-dialog-title'
              >
                {`${getCurrentLangDB.employeesPage.titleCardActions} ${employee}`}
              </DialogTitle>
              {getTasksEmployee.length === 0 ? (
                <span className='todo__employee-empty-list-sub'>
                  Employee don't have active tasks
                </span>
              ) : (
                <ProgressEmployee
                  currentProgressEmployee={currentProgressEmployee}
                />
              )}
              <DialogContent sx={{ width: '100%', maxWidth: '100%' }}>
                <PersonalList key={id} getTasksEmployee={getTasksEmployee} />
              </DialogContent>
              <DialogActions sx={employeeItemStyles.dialogActions}>
                <BtnDefaultModal
                  content={getCurrentLangDB.employeesPage.deleteBtn}
                  onClick={() => removeEmployee(id, employee)}
                />
                <BtnDefaultModal
                  content={getCurrentLangDB.employeesPage.closeModalBtn}
                  onClick={handleClose}
                />
              </DialogActions>
            </Dialog>
          </div>
        </li>
      </Badge>
    </>
  );
};

export default EmployeeItem;
