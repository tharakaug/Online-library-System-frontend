import { useEffect, useState } from "react";
import API from "../../api.ts";
import Navbar from "../common/Navbar/Navbar.tsx";
import './AdminBookManagement/AdminBookManagement.css'

export default function AdminBooks() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: "", author: "", genre: "" });
    const [editingId, setEditingId] = useState<string | null>(null);


    const fetchBooks = async () => {
        const res = await API.get('/books');
        setBooks(res.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            await API.put(`/books/${editingId}`, form);
            setEditingId(null);
        } else {
            await API.post('/books', form);
        }
        setForm({ title: "", author: "", genre: "" });
        fetchBooks();
    };

    const handleDelete = async (id: string) => {
        await API.delete(`/books/${id}`);
        fetchBooks();
    };

    const handleEdit = (book: any) => {
        setEditingId(book._id);
        setForm({ title: book.title, author: book.author, genre: book.genre });
    };

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Admin Book Management 📚</h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                    <input
                        className="w-full p-2 border rounded"
                        type="text" placeholder="Book Title"
                        value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="text" placeholder="Author"
                        value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })}
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="text" placeholder="Genre"
                        value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })}
                        required
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
                        {editingId ? "Update Book" : "Add Book"}
                    </button>
                </form>

                {/* Book List */}
                <div className="grid gap-4">
                    {books.map((book: any) => (
                        <div key={book._id} className="flex justify-between items-center p-4 border rounded shadow">
                            <div>
                                <h2 className="font-bold text-xl">{book.title}</h2>
                                <p className="text-gray-600">Author: {book.author}</p>
                                <p className="text-gray-500">Genre: {book.genre}</p>
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
