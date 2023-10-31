import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';
import { getFormattedDateAndTime } from '../../utils/currentTime';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  responsiblePerson: string;
}

interface InitState {
  actions: string[];
  todos: Todo[];
}

const initialState: InitState = {
  actions: [], // Start with an empty array
  todos: [],
};

// const initialState: initState[] | undefined = [];

const todoReducer = (state: InitState = initialState, action: any) => {
  switch (action.type) {
    //
    case actionTypes.NEW_TASK:
      const timeNewTask: string = getFormattedDateAndTime();
      const updatedActions = [
        ...state.actions,
        `User create new task (${action.payload}) - ${timeNewTask}`,
      ];
      const newTask = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        responsiblePerson: 'Nobody',
      };
      const newToDoState = [...state.todos, newTask];
      return {
        ...state,
        actions: updatedActions,
        todos: newToDoState,
      };
    //
    case actionTypes.REMOVE_TASK:
      const findNameForRemove = state.todos.filter(
        (task) => task.id === action.payload
      )[0].text;
      console.log(findNameForRemove);
      console.log(state);
      const timeRemoveTask: string = getFormattedDateAndTime();
      const updatedRemove = [
        ...state.actions,
        `User delete task (${findNameForRemove}) - ${timeRemoveTask}`,
      ];
      const updateTasks = state.todos.filter(
        (task) => task.id !== action.payload
      );
      return {
        actions: updatedRemove,
        todos: updateTasks,
      };
    //
    case actionTypes.COMPLETE_TASK:
      const getCompleteStatus = state.todos.filter(
        (task) => task.id === action.payload
      );
      const getCurrentStatus: boolean = getCompleteStatus[0].completed;
      const getCurrentText: string = getCompleteStatus[0].text;

      const completeTasks = state.todos.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      const timeStatusTask: string = getFormattedDateAndTime();
      const updatedStatus = [
        ...state.actions,
        `User mark task (${getCurrentText}) like ${
          getCurrentStatus ? 'not completed' : 'completed'
        } - ${timeStatusTask}`,
      ];
      return {
        actions: updatedStatus,
        todos: completeTasks,
      };
    //
    case actionTypes.CLEAR_ALL_TASKS:
      return {
        actions: [],
        todos: [],
      };
    //
    case actionTypes.CLEAR_COMPLETED:
      const clearCompletedData = state.todos.filter(
        (task) => task.completed === false
      );
      const timeClearTasks: string = getFormattedDateAndTime();
      const updatedClearTasks = [
        ...state.actions,
        `User remove completed tasks - ${timeClearTasks}`,
      ];
      return {
        actions: updatedClearTasks,
        todos: clearCompletedData,
      };
    //
    case actionTypes.EDIT_TASK:
      const findEditedTask = state.todos.filter(
        (task) => task.id === action.payload.id
      )[0].text;
      const updateEditTask = state.todos.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.newText };
        }
        return task;
      });
      const timeEditTask: string = getFormattedDateAndTime();
      const updateEditTaskAction = [
        ...state.actions,
        `User changed the task name from ${findEditedTask} to ${action.payload.newText} - ${timeEditTask}`,
      ];
      return {
        actions: updateEditTaskAction,
        todos: updateEditTask,
      };
    //
    default:
      return state;
  }
};

export default todoReducer;
