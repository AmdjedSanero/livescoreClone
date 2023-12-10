import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../context/AuthContext';

export const apiAnalyticsSlice = createApi({
  reducerPath: 'apiAnalyticsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/analytics/service',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Pen'],

  endpoints: builder => ({
    getServiceReservationsPenCon: builder.query({
      query: id => `reservation/today/${id}`,
      keepUnusedDataFor: 0,
      invalidatesTags: ['Pen'],
    }),
    getServiceReservationsStatus: builder.query({
      query: id => `reservation/status/${id}`,
      keepUnusedDataFor: 0,
    }),
    getServiceReservationsClients: builder.query({
      query: id => `reservation/client/${id}`,
      keepUnusedDataFor: 0,
    }),
    getServiceAnalytics: builder.query({
      query: id => `data/${id}`,
      keepUnusedDataFor: 0,
    }),
    getServiceRevenue: builder.query({
      query: id => `revenue/${id}`,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useGetServiceReservationsPenConQuery,
  useGetServiceReservationsClientsQuery,
  useGetServiceReservationsStatusQuery,
  useGetServiceAnalyticsQuery,
  useGetServiceRevenueQuery,
} = apiAnalyticsSlice;
