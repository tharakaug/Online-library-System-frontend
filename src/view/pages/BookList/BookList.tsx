//
// import { useEffect, useState } from "react";
// import { getBooks } from "../../../api/BookApi.ts";
// import { borrowBook } from "../../../api/BorrrowApi.ts";
// import {Navbar} from "../../common/Navbar/Navbar.tsx";
//
// export function BookList() {
//     const [books, setBooks] = useState([]);
//
//     const loadBooks = async () => {
//         const res = await getBooks();
//         setBooks(res.data);
//     };
//
//     useEffect(() => {
//         loadBooks();
//     }, []);
//
//     const handleBorrow = async (bookId: string) => {
//         try {
//             await borrowBook(bookId);
//             alert("✅ Book Borrowed!");
//             loadBooks();
//         } catch {
//             alert("❌ Borrow failed, check if book is available or you're logged in.");
//         }
//     };
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6">
//                 <h1 className="text-2xl font-bold mb-4">📚 Available Books</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {books.map((book) => (
//                         <div key={book._id} className="p-4 border rounded shadow flex flex-col gap-2">
//                             <h2 className="font-bold">{book.title}</h2>
//                             <p>Author: {book.author}</p>
//                             <p>Genre: {book.genre}</p>
//                             <button
//                                 className="bg-green-500 text-white px-3 py-1 rounded"
//                                 onClick={() => handleBorrow(book._id)}
//                                 disabled={!book.available}
//                             >
//                                 {book.available ? "Borrow" : "Unavailable"}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import { getBooks } from "../../../api/BookApi.ts";
import { borrowBook } from "../../../api/BorrrowApi.ts";
import { Navbar } from "../../common/Navbar/Navbar.tsx";

export function BookList() {
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        try {
            const res = await getBooks();
            setBooks(res.data);
        } catch (err) {
            alert("❌ Failed to load books.");
        }
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
            alert("❌ Borrow failed. Check if book is available or if you're logged in.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">📚 Available Books</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div
                            key={book._id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-transform transform hover:scale-105"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
                            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Author:</span> {book.author}</p>
                            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Genre:</span> {book.genre}</p>
                            {book.publishedYear && (
                                <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Published:</span> {book.publishedYear}</p>
                            )}
                            {book.isbn && (
                                <p className="text-sm text-gray-600 mb-1"><span className="font-medium">ISBN:</span> {book.isbn}</p>
                            )}
                            <p className={`text-sm font-medium mt-2 ${book.available ? 'text-green-600' : 'text-red-500'}`}>
                                {book.available ? "✅ Available" : "❌ Unavailable"}
                            </p>

                            <button
                                className={`mt-4 w-full px-4 py-2 rounded-xl text-white font-semibold ${
                                    book.available
                                        ? 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800'
                                        : 'bg-gray-400 cursor-not-allowed'
                                } transition-all duration-200`}
                                onClick={() => handleBorrow(book._id)}
                                disabled={!book.available}
                            >
                                {book.available ? "Borrow Book" : "Not Available"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
