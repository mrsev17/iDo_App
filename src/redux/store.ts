import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './mode/reducer';

export const store = configureStore({
    reducer: {
        mode: modeReducer,
    },
});
