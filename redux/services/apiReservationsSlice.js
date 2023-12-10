import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../context/AuthContext';

export const apiReservationsSlice = createApi({
  reducerPath: 'apiReservationsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/reservation',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Reservations', 'next'],
  endpoints: builder => ({
    fetchReservationsBasics: builder.query({
      query: ({ id, reservationDate }) =>
        `service/basics/${id}&${reservationDate}`,
      keepUnusedDataFor: 0,
      providesTags: ['Reservations'],
    }),
    fetchReservationById: builder.query({
      query: id => `info/${id}`,
      // keepUnusedDataFor: 0,

      providesTags: ['Reservations'],
    }),
    addReservation: builder.mutation({
      query: newReservation => ({
        url: `add`,
        method: 'POST',
        body: newReservation,
      }),

      // invalidatesTags: ['Reservations'],
      invalidatesTags: ['Reservations', 'next'],
    }),
    getNextReservation: builder.query({
      query: id => `next/${id}`,
      // keepUnusedDataFor: 0,
      providesTags: ['next'],
    }),
    postNextReservation: builder.mutation({
      query: ({ id, nextReservation }) => ({
        url: `next/${id}`,
        method: 'POST',
        body: nextReservation,
      }),
      invalidatesTags: ['Reservations', 'next'],
    }),
    updateReservationStatus: builder.mutation({
      query: ({ id, updateReservationStatus }) => ({
        url: `update/status/${id}`,
        method: 'PUT',
        body: updateReservationStatus,
      }),
      invalidatesTags: ['Reservations'],
    }),
    updateReservationOptions: builder.mutation({
      query: ({ id, updateReservationOptions }) => ({
        url: `update/options/${id}`,
        method: 'PUT',
        body: updateReservationOptions,
      }),
      invalidatesTags: ['Reservations'],
    }),
    deleteReservation: builder.mutation({
      query: ({ id }) => ({
        url: `delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservations'],
    }),
  }),
});

export const {
  useFetchReservationsBasicsQuery,
  useFetchReservationByIdQuery,
  useAddReservationMutation,

  useGetNextReservationQuery,
  usePostNextReservationMutation,
  useUpdateReservationOptionsMutation,
  useUpdateReservationStatusMutation,
  useDeleteReservationMutation

} = apiReservationsSlice;
