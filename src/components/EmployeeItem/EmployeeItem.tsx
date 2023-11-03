import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Badge,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../../redux/tasks/actionCreators';
import PersonalList from '../PersonalList/PersonalList';
import './EmployeeItem.scss';
import { TodoInterface } from '../../interfaces';

interface EmployeeProps {
  employee: string;
  id: number;
}

const badgeStyle = {
  width: '100%',
  '& .MuiBadge-badge': {
    color: 'azure',
    backgroundColor: '#6a5acd',
  },
};

const EmployeeItem: React.FC<EmployeeProps> = ({ employee, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

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
        className='employee-badge'
        sx={badgeStyle}
        badgeContent={getTasksEmployee.length}
        color='default'
      >
        <li className='employee-item'>
          <div className='employee-item-part-left'>
            <p>
              {id}. {employee}
            </p>
          </div>
          <div className='employee-item-part-right'>
            <button className='employee-item-actions' onClick={handleClickOpen}>
              Actions
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle sx={{ color: 'black' }} id='alert-dialog-title'>
                {`Actions with employee ${employee}`}
              </DialogTitle>
              <DialogContent>
                <PersonalList
                  key={id}
                  employee={employee}
                  getTasksEmployee={getTasksEmployee}
                />
              </DialogContent>
              <DialogActions
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Button
                  sx={{
                    fontSize: '12px',
                    width: '100%',
                    color: 'azure',
                    backgroundColor: '#dc2f2f',
                    padding: '4px 12px 2px 12px',
                    '&:hover': {
                      backgroundColor: '#bc2525',
                    },
                  }}
                  onClick={() => removeEmployee(id, employee)}
                >
                  Delete employee
                </Button>
                <Button
                  sx={{
                    fontSize: '12px',
                    width: '100%',
                    color: 'azure',
                    backgroundColor: '#6a5acd',
                    padding: '4px 12px 2px 12px',
                    '&:hover': {
                      backgroundColor: '#8f71ff',
                    },
                  }}
                  onClick={handleClose}
                  autoFocus
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
