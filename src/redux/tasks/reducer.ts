import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';
import { getFormattedDateAndTime } from '../../utils/currentTime';
import { InitState, TodoInterface } from '../../interfaces';
import { languageDataEngUkr } from '../../utils/languages';
import { engLangData, ukrLangData } from '../../utils/languages';

const initialState: InitState = {
  actions: [],
  todos: [],
  employees: ['Nobody'],
  languages: languageDataEngUkr,
};

const todoReducer = (state: InitState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      if (action.payload === 'English') {
        const updateEmployeesDefault = state.employees.map((item) => {
          if (item === 'Ніхто') {
            return 'Nobody';
          }
          return item;
        });
        return {
          ...state,
          employees: updateEmployeesDefault,
          languages: {
            currentDataBase: engLangData,
            currentLanguage: 'English',
          },
        };
      }
      if (action.payload === 'Ukrainian') {
        const updateEmployeesDefault = state.employees.map((item) => {
          if (item === 'Nobody') {
            return 'Ніхто';
          }
          return item;
        });
        return {
          ...state,
          employees: updateEmployeesDefault,
          languages: {
            currentDataBase: ukrLangData,
            currentLanguage: 'Ukrainian',
          },
        };
      }
      return state;
    case actionTypes.PUT_ON_TASK_EMPLOYEE:
      const timeSelectEmployee: string = getFormattedDateAndTime();
      const textPutOnTaskEmployeeEng = `Task ${action.payload.text} now on ${action.payload.employee} - ${timeSelectEmployee}`;
      const textPutOnTaskEmployeeUkr = `Завдання ${action.payload.text} зараз на ${action.payload.employee} - ${timeSelectEmployee}`;
      let putOnEmployeeTaskFinal = '';
      if (state.languages.currentLanguage === 'English') {
        putOnEmployeeTaskFinal = textPutOnTaskEmployeeEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        putOnEmployeeTaskFinal = textPutOnTaskEmployeeUkr;
      }
      const updatedActionsResponsible: string[] = [
        ...state.actions,
        putOnEmployeeTaskFinal,
      ];
      const updatedTodos: TodoInterface[] = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, responsiblePerson: action.payload.employee };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
        actions: updatedActionsResponsible,
      };
    case actionTypes.NEW_EMPLOYEE:
      const timeNewEmployee: string = getFormattedDateAndTime();
      const textNewEmployeeEng = `Employee ${action.payload} added to database - ${timeNewEmployee}`;
      const textNewEmployeeUkr = `Співробітника ${action.payload} додано до бази даних - ${timeNewEmployee}`;
      let newEmployeeTextFinal = '';
      if (state.languages.currentLanguage === 'English') {
        newEmployeeTextFinal = textNewEmployeeEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        newEmployeeTextFinal = textNewEmployeeUkr;
      }
      const updatedActionsNewEmployee: string[] = [
        ...state.actions,
        newEmployeeTextFinal,
      ];
      return {
        ...state,
        employees: [...state.employees, action.payload],
        actions: updatedActionsNewEmployee,
      };

    // This action for delete employee

    case actionTypes.DELETE_EMPLOYEE:
      const timeDeleteEmployee: string = getFormattedDateAndTime();
      const textDeleteEmployeeEng = `Employee ${action.payload.nameEmployee} removed from database - ${timeDeleteEmployee}`;
      const textDeleteemployeeUkr = `Співробітника ${action.payload.nameEmployee} видалено з бази даних - ${timeDeleteEmployee}`;
      let deleteEmployeeTextFinal = '';
      if (state.languages.currentLanguage === 'English') {
        deleteEmployeeTextFinal = textDeleteEmployeeEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        deleteEmployeeTextFinal = textDeleteemployeeUkr;
      }
      const updatedActionsRemoveEmployee: string[] = [
        ...state.actions,
        deleteEmployeeTextFinal,
      ];
      const getAllTasksWithEmployee: TodoInterface[] = state.todos.map(
        (todo) => {
          if (todo.responsiblePerson === action.payload.nameEmployee) {
            return {
              ...todo,
              responsiblePerson:
                state.languages.currentLanguage !== 'English'
                  ? 'Ніхто'
                  : 'Nobody',
            };
          }
          return todo;
        }
      );
      const filterEmployees: string[] = state.employees.filter(
        (employee) => employee !== action.payload.nameEmployee
      );
      return {
        ...state,
        todos: getAllTasksWithEmployee,
        employees: filterEmployees,
        actions: updatedActionsRemoveEmployee,
      };
    //
    case actionTypes.NEW_TASK:
      const timeNewTask: string = getFormattedDateAndTime();
      const textNewTaskEng = `Task (${action.payload}) added to database - ${timeNewTask}`;
      const textNewTaskUkr = `Завдання (${action.payload}) додано до бази даних - ${timeNewTask}`;
      let newTaskTextFinal = '';
      if (state.languages.currentLanguage === 'English') {
        newTaskTextFinal = textNewTaskEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        newTaskTextFinal = textNewTaskUkr;
      }
      const updatedActions: string[] = [...state.actions, newTaskTextFinal];
      const newTask: TodoInterface = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        responsiblePerson: 'Nobody',
      };
      const newToDoState: TodoInterface[] = [...state.todos, newTask];
      return {
        ...state,
        actions: updatedActions,
        todos: newToDoState,
      };
    //
    case actionTypes.REMOVE_TASK:
      const findNameForRemove: string = state.todos.filter(
        (task) => task.id === action.payload
      )[0].text;
      const timeRemoveTask: string = getFormattedDateAndTime();
      const textRemoveTaskEng = `Task (${findNameForRemove}) was deleted - ${timeRemoveTask}`;
      const textRemoveTaskUkr = `Завдання (${findNameForRemove}) видалено - ${timeRemoveTask}`;
      let removeTaskTextFinal = '';
      if (state.languages.currentLanguage === 'English') {
        removeTaskTextFinal = textRemoveTaskEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        removeTaskTextFinal = textRemoveTaskUkr;
      }
      const updatedRemove: string[] = [...state.actions, removeTaskTextFinal];
      const updateTasks: TodoInterface[] = state.todos.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        actions: updatedRemove,
        todos: updateTasks,
      };
    case actionTypes.COMPLETE_TASK:
      const getCompleteStatus: TodoInterface[] = state.todos.filter(
        (task) => task.id === action.payload
      );
      const getCurrentStatus: boolean = getCompleteStatus[0].completed;
      const getCurrentText: string = getCompleteStatus[0].text;
      const getCurrentEmployee: string = getCompleteStatus[0].responsiblePerson;
      const completeTasks: TodoInterface[] = state.todos.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      const timeStatusTask: string = getFormattedDateAndTime();
      const textCompleteTaskEng = `Task (${getCurrentText}) marked like ${
        getCurrentStatus
          ? `not completed ${
              getCurrentEmployee !== 'Nobody' ? 'by ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
          : `completed ${
              getCurrentEmployee !== 'Nobody' ? 'by ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
      }`;
      const textCompleteTaskUkr = `Завдання (${getCurrentText}), позначене як ${
        getCurrentStatus
          ? `не завершено ${
              getCurrentEmployee !== 'Ніхто' ? 'від ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
          : `завершено ${
              getCurrentEmployee !== 'Ніхто' ? 'від ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
      }`;
      let completeTaskTextFinal = '';
      if (state.languages.currentLanguage === 'English') {
        completeTaskTextFinal = textCompleteTaskEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        completeTaskTextFinal = textCompleteTaskUkr;
      }
      const updatedStatus: string[] = [...state.actions, completeTaskTextFinal];

      return {
        ...state,
        actions: updatedStatus,
        todos: completeTasks,
      };
    case actionTypes.CLEAR_ALL_TASKS:
      return {
        ...state,
        actions: [],
        todos: [],
      };
    case actionTypes.CLEAR_COMPLETED:
      const clearCompletedData: TodoInterface[] = state.todos.filter(
        (task) => task.completed === false
      );
      const timeClearTasks: string = getFormattedDateAndTime();
      const textClearCompletedTasksEng = `All completed tasks was deleted - ${timeClearTasks}`;
      const textclearCompletedTasksUkr = `Усі виконані завдання видалено - ${timeClearTasks}`;
      let removeCompletedTasksFinal = '';
      if (state.languages.currentLanguage === 'English') {
        removeCompletedTasksFinal = textClearCompletedTasksEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        removeCompletedTasksFinal = textclearCompletedTasksUkr;
      }
      const updatedClearTasks: string[] = [
        ...state.actions,
        removeCompletedTasksFinal,
      ];
      return {
        ...state,
        actions: updatedClearTasks,
        todos: clearCompletedData,
      };
    case actionTypes.EDIT_TASK:
      const findEditedTask: string = state.todos.filter(
        (task) => task.id === action.payload.id
      )[0].text;
      const updateEditTask: TodoInterface[] = state.todos.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.newText };
        }
        return task;
      });
      const timeEditTask: string = getFormattedDateAndTime();
      const textEditedTasksEng = `Task "${findEditedTask}" edited to "${action.payload.newText}" - ${timeEditTask}`;
      const textEditedTasksUkr = `Завдання "${findEditedTask}" змінено на "${action.payload.newText}" - ${timeEditTask}`;
      let editTasksFinal = '';
      if (state.languages.currentLanguage === 'English') {
        editTasksFinal = textEditedTasksEng;
      }
      if (state.languages.currentLanguage === 'Ukrainian') {
        editTasksFinal = textEditedTasksUkr;
      }
      const updateEditTaskAction: string[] = [...state.actions, editTasksFinal];
      return {
        ...state,
        actions: updateEditTaskAction,
        todos: updateEditTask,
      };
    default:
      return state;
  }
};

export default todoReducer;
