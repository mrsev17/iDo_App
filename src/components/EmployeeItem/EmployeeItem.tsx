import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Badge,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TodoInterface, EmployeeProps } from '../../interfaces';
import { useState } from 'react';
import { deleteEmployee } from '../../redux/tasks/actionCreators';
import { badgeStyle, employeeItemStyles } from '../../utils/commonData';
import PersonalList from '../PersonalList/PersonalList';
import './EmployeeItem.scss';

const EmployeeItem: React.FC<EmployeeProps> = ({ employee, id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const getTasks = useSelector((state: any) => state.tasks.todos);
  const getTasksEmployee: TodoInterface[] = getTasks.filter(
    (task: TodoInterface) => task.responsiblePerson === employee
  );
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeEmployee = (id: number, nameEmployee: string) => {
    dispatch(deleteEmployee(id, nameEmployee));
    handleClose();
  };

  return (
    <>
      <Badge
        className='todo__employee-badge'
        sx={badgeStyle}
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
              Actions
            </button>
            <Dialog
              sx={{ width: '100%', maxWidth: '100%' }}
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle
                sx={employeeItemStyles.dialogTitle}
                id='alert-dialog-title'
              >
                {`Actions with employee ${employee}`}
              </DialogTitle>
              <DialogContent sx={{ width: '100%', maxWidth: '100%' }}>
                <PersonalList key={id} getTasksEmployee={getTasksEmployee} />
              </DialogContent>
              <DialogActions sx={employeeItemStyles.dialogActions}>
                <Button
                  sx={employeeItemStyles.buttonRemoveEmployee}
                  onClick={() => removeEmployee(id, employee)}
                >
                  Delete employee
                </Button>
                <Button
                  sx={employeeItemStyles.buttonCloseModal}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </li>
      </Badge>
    </>
  );
};

export default EmployeeItem;
