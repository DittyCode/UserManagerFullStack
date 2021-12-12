import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('fetchUsers', async () => {
	const response = await axios.get('http://localhost:3000/api/v1/users');
	return response.data;
});

const initialState = {
	users: [],
	status: 'loading',
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser(state) {
			state.status = 'stat';
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.status = 'zaladowany';
		});
	},
});

export { fetchUsers };

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
