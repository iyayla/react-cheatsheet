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

