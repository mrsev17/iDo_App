import * as actionTypes from './actionTypes';

interface ActionInterface {
  type: string;
}
interface InitialValue {
  toggle: boolean;
}

const initialState: InitialValue = { toggle: true };

const modeReducer = (
  state: InitialValue = initialState,
  action: ActionInterface
) => {
  switch (action.type) {
    case actionTypes.SWITCH_MODE:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default modeReducer;
