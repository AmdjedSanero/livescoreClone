import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../context/AuthContext';

const initialState = {
  selectedService: null, // Initial value for selected service
};

export const apiServicesSlice = createApi({
  reducerPath: 'apiServicesSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/service',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['MyServices'],
  endpoints: builder => ({
    fetchMyServicesBasics: builder.query({
      query: () => 'my-services-basics',
      providesTags: ['MyServices'],
    }),
    fetchMyServiceDetail: builder.query({
      query: id => `my-service/${id}`,
      // transformResponse: response => {
      //   return response[0];
      // },
      // keepUnusedDataFor: Infinity,

      providesTags: ['MyServices'],
    }),
    addService: builder.mutation({
      query: newService => ({
        url: 'add',
        method: 'POST',

        body: newService,
      }),
      invalidatesTags: ['MyServices'],
    }),
    updateService: builder.mutation({
      query: ({id, updatedService}) => ({
        url: `update/all/${id}`,
        method: 'PUT',
        body: updatedService,
      }),
      invalidatesTags: ['MyServices'],
    }),
    updateServiceStatus: builder.mutation({
      query: ({id, updatedService}) => ({
        url: `update/state/${id}`,
        method: 'PUT',
        body: updatedService,
      }),
      invalidatesTags: ['MyServices'],
    }),
    updateServiceTime: builder.mutation({
      query: ({id, day, workingTimes}) => ({
        url: `${id}/workingTimes/${day}`,
        method: 'PUT',
        body: workingTimes,
      }),
      invalidatesTags: ['MyServices'],
    }),
    deleteService: builder.mutation({
      query: id => ({
        url: `delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MyServices'],
    }),
    addOption: builder.mutation({
      query: ({id, newOption}) => ({
        url: `option/add/${id}`,
        method: 'POST',
        body: newOption,
      }),
      invalidatesTags: ['MyServices'],
    }),
    updateOption: builder.mutation({
      query: ({id, updatedOption}) => ({
        url: `option/update/${id}`,
        method: 'PUT',
        body: updatedOption,
      }),
      invalidatesTags: ['MyServices'],
    }),
    deleteOption: builder.mutation({
      query: id => ({
        url: `option/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MyServices'],
    }),
    uploadImages: builder.mutation({
      query: formData => ({
        url: 'addImages',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data', // Add the Content-Type header
        },
        transformResponse: response => {
          return response;
        },
      }),
    }),
  }),
});

export const {
  useFetchMyServicesBasicsQuery,
  useFetchMyServiceDetailQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useUpdateServiceStatusMutation,
  useDeleteServiceMutation,
  useUpdateServiceTimeMutation,
  useAddOptionMutation,
  useUpdateOptionMutation,
  useDeleteOptionMutation,

  useUploadImagesMutation,
} = apiServicesSlice;
