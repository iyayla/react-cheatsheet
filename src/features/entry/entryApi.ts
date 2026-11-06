import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateEntryRequest, DeleteEntryResponse, EntryList, UpsertEntryResponse } from "../../types/entryResponse";

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

        deleteEntries: builder.mutation<DeleteEntryResponse, string>({
            query: (id) => ({
                url: `entries/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Entries"]
        }),

        addEntry: builder.mutation<UpsertEntryResponse, CreateEntryRequest>({
            query: (newEntry) => ({
                url: "entries",
                method: "POST",
                body: newEntry
            }),
            invalidatesTags: ["Entries"]
        }),



    })
});

export const {
    useGetEntriesQuery,
    useDeleteEntriesMutation,
    useAddEntryMutation,
} = entryApi;

