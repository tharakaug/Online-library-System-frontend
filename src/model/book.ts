export interface Book {
    title: string;
    author?: string;
    isbn: string;
    category?: string;
    publishedYear?: number;
    availableCopies?: number;
    totalCopies?: number;
}