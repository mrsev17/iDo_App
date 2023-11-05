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
        return {
          ...state,
          languages: {
            currentDataBase: engLangData,
            currentLanguage: 'English',
          },
        };
      }
      if (action.payload === 'Ukrainian') {
        return {
          ...state,
          languages: {
            currentDataBase: ukrLangData,
            currentLanguage: 'Ukrainian',
          },
        };
      }
      return state;
    case actionTypes.PUT_ON_TASK_EMPLOYEE:
      const timeSelectEmployee: string = getFormattedDateAndTime();
      const updatedActionsResponsible: string[] = [
        ...state.actions,
        `Task ${action.payload.text} now on ${action.payload.employee} - ${timeSelectEmployee}`,
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
      const updatedActionsNewEmployee: string[] = [
        ...state.actions,
        `Employee ${action.payload} added to database - ${timeNewEmployee}`,
      ];
      return {
        ...state,
        employees: [...state.employees, action.payload],
        actions: updatedActionsNewEmployee,
      };
    case actionTypes.DELETE_EMPLOYEE:
      const timeDeleteEmployee: string = getFormattedDateAndTime();
      const updatedActionsRemoveEmployee: string[] = [
        ...state.actions,
        `Employee ${action.payload.nameEmployee} removed from database - ${timeDeleteEmployee}`,
      ];
      const getAllTasksWithEmployee: TodoInterface[] = state.todos.map(
        (todo) => {
          if (todo.responsiblePerson === action.payload.nameEmployee) {
            return {
              ...todo,
              responsiblePerson: 'Nobody',
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
    case actionTypes.NEW_TASK:
      const timeNewTask: string = getFormattedDateAndTime();
      const updatedActions: string[] = [
        ...state.actions,
        `Task (${action.payload}) added to database - ${timeNewTask}`,
      ];
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
    case actionTypes.REMOVE_TASK:
      const findNameForRemove: string = state.todos.filter(
        (task) => task.id === action.payload
      )[0].text;
      const timeRemoveTask: string = getFormattedDateAndTime();
      const updatedRemove: string[] = [
        ...state.actions,
        `Task (${findNameForRemove}) was deleted - ${timeRemoveTask}`,
      ];
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
      const updatedStatus: string[] = [
        ...state.actions,
        `Task (${getCurrentText}) marked like ${
          getCurrentStatus
            ? `not completed ${
                getCurrentEmployee !== 'Nobody'
                  ? 'by ' + getCurrentEmployee
                  : ''
              } - ${timeStatusTask}`
            : `completed ${
                getCurrentEmployee !== 'Nobody'
                  ? 'by ' + getCurrentEmployee
                  : ''
              } - ${timeStatusTask}`
        }`,
      ];

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
      const updatedClearTasks: string[] = [
        ...state.actions,
        `All completed tasks was deleted - ${timeClearTasks}`,
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
      const updateEditTaskAction: string[] = [
        ...state.actions,
        `Task "${findEditedTask}" edited to "${action.payload.newText}" - ${timeEditTask}`,
      ];
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
