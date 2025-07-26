import API from "../api.ts";

export const getMyBorrows = () => API.get("/borrows/all");
export const borrowBook = (bookId) => API.post("/borrows", { bookId });
export const returnBook = (borrowId) => API.put(`/borrows/${borrowId}`);
