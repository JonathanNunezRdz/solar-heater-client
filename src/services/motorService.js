import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const motorApi = createApi({
	reducerPath: 'motorApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://192.168.0.116:5000/api/motor',
	}),
	endpoints: builder => ({
		changeDirection: builder.query({
			query: () => 'changeDirection',
		}),
	}),
});

export const { useChangeDirectionQuery } = motorApi;
