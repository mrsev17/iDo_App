import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialValue {
  toggle: boolean;
}

const initialState: InitialValue = { toggle: true };

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    switchMode(state, action: PayloadAction<boolean>) {
      return { ...state, toggle: !state.toggle };
    },
  },
});

export const { switchMode } = modeSlice.actions;
export default modeSlice.reducer;
