import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users-slice';

const store = configureStore({
	reducer: usersSlice,
});

export default store;
