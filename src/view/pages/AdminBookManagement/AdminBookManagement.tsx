import { useEffect, useState } from "react";
import { getBooks, addBook, updateBook, deleteBook } from "../../../api/BookApi.ts";
import { Navbar } from "../../common/Navbar/Navbar.tsx";
import "./AdminBookManagement.css";
import Api from "../../../api.ts"; // Make sure this CSS is imported

export function AdminBookManagement() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({
        title: "", author: "", isbn: "", category: "",
        publishedYear: "", availableCopies: "", totalCopies: "", image: ""
    });
    const [editId, setEditId] = useState<string | null>(null);

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [imageFile, setImageFile] = useState<File | null>(null);

    const loadBooks = async () => {
        const res = await getBooks();
        setBooks(res.data);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if(imageFile) {
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
            if (!allowedTypes.includes(imageFile.type)) {
                alert("Invalid image format. Please upload a JPEG, PNG, or JPG file.");
                return;
            }
            const imageFormData = new FormData();
            imageFormData.append("file", imageFile);

            const uploadRes = await Api.post("/files/book", imageFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            form.image = uploadRes.data.filename;
        }

        if (editId) {
            await updateBook(editId, form);
            alert("✅ Book Updated");
            setEditId(null);
        } else {
            await addBook(form);
            alert("✅ Book Added");
        }
        setForm({
            title: "", author: "", isbn: "", category: "",
            publishedYear: "", availableCopies: "", totalCopies: "", image: ""
        });
        loadBooks();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this book?")) {
            await deleteBook(id);
            alert("✅ Book Deleted");
            loadBooks();
        }
    };

    const handleEdit = (book: any) => {
        setForm({
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            category: book.category,
            publishedYear: book.publishedYear,
            availableCopies: book.availableCopies,
            totalCopies: book.totalCopies,
            image: book.image
        });
        setEditId(book._id);
    };

    return (
        <>
            <Navbar />
            <div className="admin-container">
                <h1 className="admin-title">📘 Admin Book Manager</h1>

                <form onSubmit={handleSubmit} className="admin-form">
                    <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                    <input type="text" placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
                    <input type="text" placeholder="ISBN" value={form.isbn} onChange={(e) => setForm({ ...form, isbn: e.target.value })} required />
                    <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
                    <input type="number" placeholder="Published Year" value={form.publishedYear} onChange={(e) => setForm({ ...form, publishedYear: e.target.value })} />
                    <input type="number" placeholder="Available Copies" value={form.availableCopies} onChange={(e) => setForm({ ...form, availableCopies: e.target.value })} />
                    <input type="number" placeholder="Total Copies" value={form.totalCopies} onChange={(e) => setForm({ ...form, totalCopies: e.target.value })} />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setImageFile(file);
                                setImagePreview(URL.createObjectURL(file));
                            }
                        }}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {/*{imagePreview && (*/}
                    {/*    <div className="w-1/2 flex justify-center">*/}
                    {/*        <img*/}
                    {/*            src={imagePreview}*/}
                    {/*            alt="Preview"*/}
                    {/*            className="w-24 h-24 object-cover rounded-full border border-gray-300"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <button type="submit">{editId ? "Update Book" : "Add Book"}</button>
                </form>

                <div className="book-list">
                    {books.map((book: any) => (
                        <div key={book._id} className="book-card">
                            <div className="book-info">
                                <h2>{book.title}</h2>
                                <p><strong>Author:</strong> {book.author || "N/A"}</p>
                                <p><strong>ISBN:</strong> {book.isbn}</p>
                                <p><strong>Category:</strong> {book.category || "N/A"}</p>
                                <p><strong>Year:</strong> {book.publishedYear || "N/A"}</p>
                                <p><strong>Available:</strong> {book.availableCopies}</p>
                                <p><strong>Total:</strong> {book.totalCopies}</p>
                                <img src={`http://localhost:3000/api/v1/uploads/book/${book.image}`} alt={book.title} />



                            </div>
                            <div className="book-actions">
                                <button className="edit" onClick={() => handleEdit(book)}>✏️ Edit</button>
                                <button className="delete" onClick={() => handleDelete(book._id)}>🗑️ Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
