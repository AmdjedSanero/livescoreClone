import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../context/AuthContext';

export const apiAuthSlice = createApi({
  reducerPath: 'apiAuthSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/auth',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['MyAuth', 'UserProfile', 'AdminInfo'],
  endpoints: builder => ({
    fetchCustmer: builder.query({
      query: value => `search/${value}`,
      keepUnusedDataFor: 0,
    }),
    fetchUserProfile: builder.query({
      query: () => 'profile',
      keepUnusedDataFor: Infinity,
      providesTags: ['UserProfile'],
    }),
    updateUserProfile: builder.mutation({
      query: ({updateUserProfile}) => ({
        url: `profile`,
        method: 'PUT',
        body: updateUserProfile,
      }),
      invalidatesTags: ['UserProfile', 'AdminInfo'],
    }),
    updatePassword: builder.mutation({
      query: ({updatePassword}) => ({
        url: `update-password`,
        method: 'PUT',
        body: updatePassword,
      }),
    }),
    fetchAdminInfo: builder.query({
      query: () => 'info',
      keepUnusedDataFor: Infinity,
      providesTags: ['AdminInfo'],
    }),

    fetchNotification: builder.query({
      query: ({id}) => `notification/all/${id}`,
      // keepUnusedDataFor: Infinity,
      providesTags: ['MyAuth'],
    }),
    fetchNotificationSeen: builder.query({
      query: () => 'notification/seen',
      providesTags: ['MyAuth'],
      // keepUnusedDataFor: Infinity,
    }),

    updateNotification: builder.mutation({
      query: ({id}) => ({
        url: `notification/update/seen/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['MyAuth'],
    }),
    updateViewNotification: builder.mutation({
      query: ({id}) => ({
        url: `notification/update/view/${id}`,
        method: 'PUT',
      }),
      // invalidatesTags: ['MyAuth'],
    }),
  }),
});

export const {
  useFetchCustmerQuery,
  useFetchUserProfileQuery,
  useFetchAdminInfoQuery,
  useFetchNotificationQuery,
  useFetchNotificationSeenQuery,
  useUpdateUserProfileMutation,
  useUpdateNotificationMutation,
  useUpdateViewNotificationMutation,
  useUpdatePasswordMutation,
} = apiAuthSlice;
