import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { EntryList } from "../../types/entryResponse";

export const entryApi = createApi({
    reducerPath: "entryApi",

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_PHONE_APP_API
    }),

    tagTypes: ["Entries"],

    endpoints: (builder) => ({
        // GET
        getEntries: builder.query<EntryList, void>({
            query: () => "entries",
            providesTags: ["Entries"]
        }),

        deleteEntries: builder.mutation<void, string>({
            query: (id) => ({
                url: `entries/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Entries"]
        })



    })
});

export const {
    useGetEntriesQuery,
    useDeleteEntriesMutation,
} = entryApi;

