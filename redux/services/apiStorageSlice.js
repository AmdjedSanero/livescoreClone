import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../context/AuthContext';

export const apiStorageSlice = createApi({
  reducerPath: 'apiStorageSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/storage',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Storage', 'MyServices'],
  endpoints: builder => ({
    uploadImage: builder.mutation({
      query: formData => ({
        url: 'image/add',
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
    replaceImage: builder.mutation({
      query: formData => ({
        url: 'image/replace',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data', // Add the Content-Type header
        },
        transformResponse: response => {
          return response;
        },
      }),
      invalidatesTags: ['MyServices'],
    }),
    deleteImage: builder.mutation({
      query: formData => ({
        url: 'image/delete',
        method: 'DELETE',
        body: formData,
        transformResponse: response => {
          return response;
        },
      }),
    }),
  }),
});

export const {
  useUploadImageMutation,
  useReplaceImageMutation,
  useDeleteImageMutation,
} = apiStorageSlice;
