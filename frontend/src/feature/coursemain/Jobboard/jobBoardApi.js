import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobBoardApi = createApi({
  reducerPath: 'jobBoardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getJobPosts: builder.query({
      query: () => 'jobs/', // Replace with your API endpoint
    }),
    getJobPostById: builder.query({
      query: (id) => `jobs/${id}/`, // Replace with your API endpoint
    }),
    createJobPost: builder.mutation({
      query: (newJobPost) => ({
        url: 'jobs/',
        method: 'POST',
        body: newJobPost,
      }),
    }),
    updateJobPost: builder.mutation({
      query: ({ id, ...updatedJobPost }) => ({
        url: `jobs/${id}/`,
        method: 'PUT',
        body: updatedJobPost,
      }),
    }),
    deleteJobPost: builder.mutation({
      query: (id) => ({
        url: `jobs/${id}/`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetJobPostsQuery,
  useGetJobPostByIdQuery,
  useCreateJobPostMutation,
  useUpdateJobPostMutation,
  useDeleteJobPostMutation,
} = jobBoardApi;