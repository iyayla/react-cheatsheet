export interface Entry {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateCreated: string;
    lastModified: string;
}


export interface EntryList {
    success: boolean;
    value?: Entry[];
    errors?: string[];
}

export interface DeleteEntryResponse {
    success: boolean;
    value?: boolean;
    errors?: string[];
}

export interface CreateEntryRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface UpsertEntryResponse {
    success: boolean;
    value?: string;
    errors?: string[];
}

