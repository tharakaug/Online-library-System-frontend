// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
//
// export default function BookList() {
//     const [books, setBooks] = useState([]);
//
//     useEffect(() => {
//         axios.get("http://localhost:5000/api/books").then((res) => setBooks(res.data));
//     }, []);
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6">
//                 <h1 className="text-2xl font-bold mb-4">Available Books</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {books.map((book: any) => (
//                         <div key={book._id} className="p-4 border rounded shadow">
//                             <h2 className="text-lg font-bold">{book.title}</h2>
//                             <p className="text-gray-700">Author: {book.author}</p>
//                             <p className="text-gray-500">Genre: {book.genre}</p>
//                             <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
//                                 Borrow
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import './BookList.css';

export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/books").then((res) => setBooks(res.data));
    }, []);

    return (
        <>
            <Navbar />
            <div className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">📚 Available Books</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {books.map((book: any) => (
                        <div
                            key={book._id}
                            className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border-t-4 border-blue-500"
                        >
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{book.title}</h2>
                            <p className="text-gray-600 mb-1"><span className="font-semibold">Author:</span> {book.author}</p>
                            <p className="text-gray-500 mb-4"><span className="font-semibold">Genre:</span> {book.genre}</p>
                            <button
                                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition-colors"
                            >
                                Borrow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
