import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import calendarReducer from './calendarSlice';
import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    calendar: calendarReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
