import * as actionTypes from './actionTypes';

interface actionInterface {
    type: string,
}
interface initialValue {
    toggle: boolean
}

const initialState:initialValue = {toggle:false};

const modeReducer = (state = initialState, action:actionInterface) => {
    switch(action.type) {
        case actionTypes.SWITCH_MODE:
            return {...state, toggle: !state.toggle};
        default:
            return state;   
    }
}

export default modeReducer;