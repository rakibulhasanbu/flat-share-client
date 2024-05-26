import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

const flatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlats: builder.query({
      query: (filterOptions) => ({
        url: `/flats${filterOptions ? `?${filterOptions}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),

    getMyFlats: builder.query({
      query: () => ({
        url: `/my-flats`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),

    getFlatById: builder.query({
      query: (id) => ({
        url: `/flat/${id}`,
        method: "GET",
      }),
    }),

    addFlat: builder.mutation({
      query: (data) => ({
        url: "/flats",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),

    updatedBlog: builder.mutation({
      query: (updatedData) => ({
        url: `/blog/${updatedData.id}`,
        method: "PUT",
        body: updatedData.BlogData,
      }),
      invalidatesTags: [tagTypes.flat],
    }),

    deleteFlat: builder.mutation({
      query: (id) => ({
        url: `/flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  useGetFlatsQuery,
  useGetMyFlatsQuery,
  useGetFlatByIdQuery,
  useAddFlatMutation,
  useUpdatedBlogMutation,
  useDeleteFlatMutation,
} = flatApi;
