import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import menuReducer from '../features/menuSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
});
