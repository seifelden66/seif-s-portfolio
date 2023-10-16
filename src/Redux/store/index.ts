// store.js

import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    // Add other reducers here if needed
  },
});

export default store;
