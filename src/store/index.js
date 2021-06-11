import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import motorReducer from './motorSlice';
import { motorApi } from '../services/motorService';

const store = configureStore({
	reducer: {
		motor: motorReducer,
		[motorApi.reducerPath]: motorApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(motorApi.middleware),
});

setupListeners(store.dispatch);

export default store;
