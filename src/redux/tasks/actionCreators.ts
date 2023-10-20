import * as actionTypes from './actionTypes';

export const newTaskTodo = (task:string) => {
    return {
        type: actionTypes.NEW_TASK,
        payload: task,
    }
}