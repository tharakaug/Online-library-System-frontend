import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Book } from '../model/Book';

interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
}

const initialState: BooksState = {
    books: [],
    loading: false,
    error: null,
};

export const getAllBooks = createAsyncThunk(
    'books/getAll',
    async () => {
        const response = await fetch('http://localhost:3000/books');
        return await response.json();
    }
)

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks(state, action: PayloadAction<Book[]>) {
            state.books = action.payload;
            state.loading = false;
            state.error = null;
        },
        addBook(state, action: PayloadAction<Book>) {
            state.books.push(action.payload);
        },
        // ...more reducers
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setBooks, addBook, setLoading, setError } = bookSlice.actions;
export default bookSlice.reducer;