import { configureStore  } from '@reduxjs/toolkit';
import searchReducer from './reducer';

const store = configureStore({reducer:searchReducer});
export {store};