import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/v1" });

export const getBooks = () => API.get("/book/all");
export const addBook = (book) => API.post("/book/save", book);
export const updateBook = (id, book) => API.put(`/book/update/${id}`, book);
export const deleteBook = (id) => API.delete(`/book/delete/${id}`);
