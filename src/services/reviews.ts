/* eslint-disable import/prefer-default-export */
import { createApi } from '@reduxjs/toolkit/query/react';
import { ListResponse } from '../common/model';
import { Review, ReviewListAPIParams } from '../models/review';
import baseQueryWithReauth from './queryWithReauth';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getReview: builder.query<Review, string>({
      query: (id) => ({ url: `reviews/${id}` }),
    }),
    getReviews: builder.query<ListResponse<Review>, ReviewListAPIParams>({
      query: (params) => ({ url: 'reviews', params }),
      providesTags: (result) =>
        result
          ? [
              // Provides a tag for each post in the current page,
              // as well as the 'PARTIAL-LIST' tag.
              ...result.data.map(({ id }) => ({
                type: 'Reviews' as const,
                id,
              })),
              { type: 'Reviews', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'Reviews', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
