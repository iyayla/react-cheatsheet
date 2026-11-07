import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateEntryRequest, DeleteEntryResponse, EntryList, UpdateEntryRequest, UpsertEntryResponse } from "../../types/entryResponse";

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
        
        updateEntry: builder.mutation<UpsertEntryResponse, UpdateEntryRequest>({
            query: (updateEntry) => ({
                url: "entries",
                method: "PUT",
                body: updateEntry
            }),
            invalidatesTags: ["Entries"]
        }),


    })
});

export const {
    useGetEntriesQuery,
    useDeleteEntriesMutation,
    useAddEntryMutation,
    useUpdateEntryMutation,
} = entryApi;

