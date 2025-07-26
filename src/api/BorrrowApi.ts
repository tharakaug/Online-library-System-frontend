import API from "../api.ts";

export const getMyBorrows = () => API.get("/borrows");
export const borrowBook = (bookId) => API.post("/borrow/borrow", { bookId });
export const returnBook = (borrowId) => API.put(`/borrow/return/${borrowId}`);
