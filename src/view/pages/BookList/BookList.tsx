
import { useEffect, useState } from "react";
import { getBooks } from "../../../api/BookApi.ts";
import { borrowBook } from "../../../api/BorrrowApi.ts";
import {Navbar} from "../../common/Navbar/Navbar.tsx";

export function BookList() {
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const res = await getBooks();
        setBooks(res.data);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const handleBorrow = async (bookId: string) => {
        try {
            await borrowBook(bookId);
            alert("✅ Book Borrowed!");
            loadBooks();
        } catch {
            alert("❌ Borrow failed, check if book is available or you're logged in.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">📚 Available Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <div key={book._id} className="p-4 border rounded shadow flex flex-col gap-2">
                            <h2 className="font-bold">{book.title}</h2>
                            <p>Author: {book.author}</p>
                            <p>Genre: {book.genre}</p>
                            <button
                                className="bg-green-500 text-white px-3 py-1 rounded"
                                onClick={() => handleBorrow(book._id)}
                                disabled={!book.available}
                            >
                                {book.available ? "Borrow" : "Unavailable"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
