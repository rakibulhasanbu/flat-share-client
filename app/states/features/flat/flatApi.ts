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

    getMyBookingFlats: builder.query({
      query: () => ({
        url: `/booking-requests-my`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),

    getBookingFlats: builder.query({
      query: () => ({
        url: `/booking-requests`,
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

    bookingFlat: builder.mutation({
      query: (data) => ({
        url: "/booking-applications",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),

    updateBookingFlat: builder.mutation({
      query: (updatedData) => ({
        url: `/booking-requests/${updatedData.id}`,
        method: "PUT",
        body: updatedData.BookingFlatData,
      }),
      invalidatesTags: [tagTypes.flat],
    }),

    updatedFlat: builder.mutation({
      query: (updatedData) => ({
        url: `/flats/${updatedData.id}`,
        method: "PUT",
        body: updatedData.FlatData,
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
  useUpdatedFlatMutation,
  useUpdateBookingFlatMutation,
  useDeleteFlatMutation,
  useGetMyBookingFlatsQuery,
  useGetBookingFlatsQuery,
  useBookingFlatMutation,
} = flatApi;
