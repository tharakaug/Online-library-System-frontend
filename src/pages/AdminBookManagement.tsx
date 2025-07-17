import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function AdminBookManagement() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/books").then((res) => setBooks(res.data));
    }, []);

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Manage Books</h1>
                <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add New Book</button>
                <div className="space-y-3">
                    {books.map((book: any) => (
                        <div key={book._id} className="p-4 border rounded flex justify-between">
                            <div>
                                <h2 className="font-bold">{book.title}</h2>
                                <p className="text-gray-600">{book.author}</p>
                            </div>
                            <div className="space-x-2">
                                <button className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
