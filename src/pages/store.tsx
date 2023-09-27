import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Define the type for your Redux state
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
  });
export default store;