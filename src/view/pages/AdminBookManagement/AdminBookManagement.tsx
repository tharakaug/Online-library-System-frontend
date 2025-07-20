// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../../common/Navbar/Navbar.tsx";
// import './AdminBookManagement.css'
//
// export default function AdminBookManagement() {
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
//                 <h1 className="text-2xl font-bold mb-4">Manage Books</h1>
//                 <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = ""}>Add New Book</button>
//                 <div className="space-y-3">
//                     {books.map((book: any) => (
//                         <div key={book._id} className="p-4 border rounded flex justify-between">
//                             <div>
//                                 <h2 className="font-bold">{book.title}</h2>
//                                 <p className="text-gray-600">{book.author}</p>
//                             </div>
//                             <div className="space-x-2">
//                                 <button className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
//                                 <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }


import { useEffect, useState } from "react";
import { getBooks, addBook, updateBook, deleteBook } from "../../../api/BookApi.ts";
import Navbar from "../../common/Navbar/Navbar.tsx";

export default function AdminBooksPage() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: "", author: "", genre: "" });
    const [editId, setEditId] = useState<string | null>(null);

    const loadBooks = async () => {
        const res = await getBooks();
        setBooks(res.data);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editId) {
            await updateBook(editId, form);
            alert("✅ Book Updated");
            setEditId(null);
        } else {
            await addBook(form);
            alert("✅ Book Added");
        }
        setForm({ title: "", author: "", genre: "" });
        loadBooks();
    };

    const handleDelete = async (id: string) => {
        await deleteBook(id);
        alert("✅ Book Deleted");
        loadBooks();
    };

    const handleEdit = (book: any) => {
        setForm({ title: book.title, author: book.author, genre: book.genre });
        setEditId(book._id);
    };

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">📚 Admin Book Manager</h1>

                <form onSubmit={handleSubmit} className="space-y-3 mb-8">
                    <input
                        className="w-full border p-2 rounded"
                        type="text" placeholder="Book Title"
                        value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required
                    />
                    <input
                        className="w-full border p-2 rounded"
                        type="text" placeholder="Author"
                        value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required
                    />
                    <input
                        className="w-full border p-2 rounded"
                        type="text" placeholder="Genre"
                        value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} required
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        {editId ? "Update Book" : "Add Book"}
                    </button>
                </form>

                <div className="grid gap-4">
                    {books.map((book: any) => (
                        <div key={book._id} className="flex justify-between p-4 border rounded shadow">
                            <div>
                                <h2 className="font-bold text-lg">{book.title}</h2>
                                <p>Author: {book.author}</p>
                                <p>Genre: {book.genre}</p>
                            </div>
                            <div className="space-x-2">
                                <button onClick={() => handleEdit(book)} className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
                                <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
