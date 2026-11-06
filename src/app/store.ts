import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { entryApi } from '../features/entry/entryApi';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [entryApi.reducerPath] : entryApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(entryApi.middleware)

});

// RootState type
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch type
export type AppDispatch = typeof store.dispatch;