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
    })
});

export const {
    useGetEntriesQuery,
} = entryApi;

