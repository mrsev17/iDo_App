import * as actionTypes from './actionTypes';

export const newTaskTodo = (task: string) => {
  return {
    type: actionTypes.NEW_TASK,
    payload: task,
  };
};

export const removeTodo = (id: string) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: id,
  };
};

export const completeTodo = (id: string) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: id,
  };
};

export const clearAllTodos = () => {
  return {
    type: actionTypes.CLEAR_ALL_TASKS,
    payload: '',
  };
};
