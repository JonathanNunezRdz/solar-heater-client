import { createSlice } from '@reduxjs/toolkit';

export const motorSlice = createSlice({
	name: 'motor',
	initialState: {
		active: false,
		currentDirection: 'up',
	},
	reducers: {
		changeDirection: state => {
			if (state.currentDirection === 'up') {
				state.currentDirection = 'down';
			} else {
				state.currentDirection = 'up';
			}
		},
		toggleActive: state => {
			state.active = !state.active;
		},
	},
});

export const { changeDirection, toggleActive } = motorSlice.actions;

export default motorSlice.reducer;
