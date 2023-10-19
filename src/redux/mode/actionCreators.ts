import * as actionTypes from './actionTypes';

export const switchMode = (currentMode:boolean) => {
    return {
        type: actionTypes.SWITCH_MODE,
        payload: currentMode
    }
}