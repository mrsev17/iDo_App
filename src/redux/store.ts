import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './mode/reducer';
import todoReducer from './tasks/reducer';

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        tasks: todoReducer,
    },
});
