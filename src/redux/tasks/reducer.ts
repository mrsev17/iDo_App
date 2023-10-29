import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  responsiblePerson: string;
}

const initialState: Todo[] | undefined = [];

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.NEW_TASK:
      const newTask = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        responsiblePerson: 'Nobody',
      };
      return [...state, newTask];
    case actionTypes.REMOVE_TASK:
      const updateTasks = state.filter((task) => task.id !== action.payload);
      return updateTasks;
    case actionTypes.COMPLETE_TASK:
      const completeTasks = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return completeTasks;
    case actionTypes.CLEAR_ALL_TASKS:
      return [];
    case actionTypes.CLEAR_COMPLETED:
      const clearCompletedData = state.filter(
        (task) => task.completed === false
      );
      return clearCompletedData;
    default:
      return state;
  }
};

export default todoReducer;
