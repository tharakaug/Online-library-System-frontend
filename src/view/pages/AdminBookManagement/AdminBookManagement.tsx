
import { useEffect, useState } from "react";
import { getBooks, addBook, updateBook, deleteBook } from "../../../api/BookApi.ts";
import { Navbar } from "../../common/Navbar/Navbar.tsx";

export function AdminBookManagement() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({
        title: "", author: "", isbn: "", category: "",
        publishedYear: "", availableCopies: "", totalCopies: ""
    });
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
        setForm({
            title: "", author: "", isbn: "", category: "",
            publishedYear: "", availableCopies: "", totalCopies: ""
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
            totalCopies: book.totalCopies
        });
        setEditId(book._id);
    };

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">📘 Admin Book Manager</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 grid grid-cols-2 gap-4 mb-10 border border-gray-200">
                    <input className="input" type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                    <input className="input" type="text" placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
                    <input className="input" type="text" placeholder="ISBN" value={form.isbn} onChange={(e) => setForm({ ...form, isbn: e.target.value })} required />
                    <input className="input" type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
                    <input className="input" type="number" placeholder="Published Year" value={form.publishedYear} onChange={(e) => setForm({ ...form, publishedYear: e.target.value })} />
                    <input className="input" type="number" placeholder="Available Copies" value={form.availableCopies} onChange={(e) => setForm({ ...form, availableCopies: e.target.value })} />
                    <input className="input" type="number" placeholder="Total Copies" value={form.totalCopies} onChange={(e) => setForm({ ...form, totalCopies: e.target.value })} />

                    <button className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200">
                        {editId ? "Update Book" : "Add Book"}
                    </button>
                </form>

                <div className="grid gap-5">
                    {books.map((book: any) => (
                        <div key={book._id} className="p-5 border rounded shadow-md flex justify-between items-start bg-gray-50 hover:bg-gray-100 transition">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
                                <p className="text-gray-600">Author: {book.author || "N/A"}</p>
                                <p className="text-gray-600">ISBN: {book.isbn}</p>
                                <p className="text-gray-600">Category: {book.category || "N/A"}</p>
                                <p className="text-gray-600">Published Year: {book.publishedYear || "N/A"}</p>
                                <p className="text-gray-600">Available Copies: {book.availableCopies ?? "N/A"}</p>
                                <p className="text-gray-600">Total Copies: {book.totalCopies ?? "N/A"}</p>
                            </div>
                            <div className="space-y-2">
                                <button onClick={() => handleEdit(book)} className="block bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded transition">
                                    ✏️ Edit
                                </button>
                                <button onClick={() => handleDelete(book._id)} className="block bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition">
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}




// import { useEffect, useState } from "react";
// import { getBooks, addBook, updateBook, deleteBook } from "../../../api/BookApi.ts";
// import { Navbar } from "../../common/Navbar/Navbar.tsx";
// import {data} from "autoprefixer";
// // import type {Book} from "../../../model/Book.ts";
// //
// // type BookData = {
// //     data: Book
// // }
//
// // const images: Record<string, string>
// //     = import.meta.glob(
// //     '../../../assets/products/*',
// //     {eager: true, import: 'default'});
//
// export function AdminBookManagement() {
//     // const image = images[`../../../assets/products/${form.image}`];
//
//     const [books, setBooks] = useState([]);
//     const [form, setForm] = useState({
//         title: "",
//         author: "",
//         isbn: "",
//         category: "",
//         publishedYear: "",
//         availableCopies: "",
//         totalCopies: "",
//         image: "",
//     });
//
//     const [editId, setEditId] = useState<string | null>(null);
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
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         const bookData = {
//             ...form,
//             publishedYear: parseInt(form.publishedYear),
//             availableCopies: parseInt(form.availableCopies),
//             totalCopies: parseInt(form.totalCopies),
//         };
//
//         if (editId) {
//             await updateBook(editId, form);
//             alert("✅ Book Updated");
//             setEditId(null);
//         } else {
//             await addBook(form);
//             alert("✅ Book Added");
//         }
//
//         setForm({
//             title: "",
//             author: "",
//             isbn: "",
//             category: "",
//             publishedYear: "",
//             availableCopies: "",
//             totalCopies: "",
//             image: "",
//         });
//         loadBooks();
//     };
//
//     const handleDelete = async (id: string) => {
//         await deleteBook(id);
//         alert("✅ Book Deleted");
//         loadBooks();
//     };
//
//     const handleEdit = (book: any) => {
//         setForm({
//             title: book.title,
//             author: book.author || "",
//             isbn: book.isbn,
//             category: book.category || "",
//             publishedYear: book.publishedYear?.toString() || "",
//             availableCopies: book.availableCopies?.toString() || "",
//             totalCopies: book.totalCopies?.toString() || "",
//             image: book.image,
//         });
//         setEditId(book._id);
//     };
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6 max-w-5xl mx-auto">
//                 <h1 className="text-3xl font-bold mb-6">📚 Admin Book Manager</h1>
//
//                 <form onSubmit={handleSubmit} className="space-y-3 mb-8 grid grid-cols-2 gap-4">
//                     <input className="border p-2 rounded" type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
//                     <input className="border p-2 rounded" type="text" placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
//
//                     <input className="border p-2 rounded" type="text" placeholder="ISBN" value={form.isbn} onChange={(e) => setForm({ ...form, isbn: e.target.value })} required />
//                     <input className="border p-2 rounded" type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
//
//                     <input className="border p-2 rounded" type="number" placeholder="Published Year" value={form.publishedYear} onChange={(e) => setForm({ ...form, publishedYear: e.target.value })} />
//                     <input className="border p-2 rounded" type="number" placeholder="Available Copies" value={form.availableCopies} onChange={(e) => setForm({ ...form, availableCopies: e.target.value })} />
//
//                     <input className="border p-2 rounded" type="number" placeholder="Total Copies" value={form.totalCopies} onChange={(e) => setForm({ ...form, totalCopies: e.target.value })} />
//                     <input
//                         className="input col-span-2"
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })}
//                     />
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">
//                         {editId ? "Update Book" : "Add Book"}
//                     </button>
//                 </form>
//
//                 <div className="grid gap-4">
//                     {books.map((book: any) => (
//                         <div key={book._id} className="flex justify-between p-4 border rounded shadow">
//                             <div>
//                                 <h2 className="font-bold text-lg">{book.title}</h2>
//                                 <p>Author: {book.author}</p>
//                                 <p>ISBN: {book.isbn}</p>
//                                 <p>Category: {book.category}</p>
//                                 <p>Published Year: {book.publishedYear}</p>
//                                 <p>Available Copies: {book.availableCopies}</p>
//                                 <p>Total Copies: {book.totalCopies}</p>
//                                 <img src={book.image} alt={book.title} className="mt-2" />
//                             </div>
//                             <div className="space-x-2">
//                                 <button onClick={() => handleEdit(book)} className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
//                                 <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }


// import { useEffect, useState } from "react";
// import { getBooks, addBook, updateBook, deleteBook } from "../../../api/BookApi.ts";
// import { Navbar } from "../../common/Navbar/Navbar.tsx";
//
// export function AdminBookManagement() {
//     const [books, setBooks] = useState([]);
//     const [form, setForm] = useState({
//         title: "", author: "", isbn: "", category: "",
//         publishedYear: "", availableCopies: "", totalCopies: "",image: null
//     });
//     const [editId, setEditId] = useState<string | null>(null);
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
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (editId) {
//             await updateBook(editId, form);
//             alert("✅ Book Updated");
//             setEditId(null);
//         } else {
//             await addBook(form);
//             alert("✅ Book Added");
//         }
//         setForm({
//             title: "", author: "", isbn: "", category: "",
//             publishedYear: "", availableCopies: "", totalCopies: "",image: null
//         });
//         loadBooks();
//     };
//
//     const handleDelete = async (id: string) => {
//         if (confirm("Are you sure you want to delete this book?")) {
//             await deleteBook(id);
//             alert("✅ Book Deleted");
//             loadBooks();
//         }
//     };
//
//     const handleEdit = (book: any) => {
//         setForm({
//             title: book.title,
//             author: book.author,
//             isbn: book.isbn,
//             category: book.category,
//             publishedYear: book.publishedYear,
//             availableCopies: book.availableCopies,
//             totalCopies: book.totalCopies,
//             image: book.image
//         });
//         setEditId(book._id);
//     };
//
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6 max-w-6xl mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">📘 Admin Book Manager</h1>
//
//                 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 grid grid-cols-2 gap-4 mb-10 border border-gray-200">
//                     <input className="input" type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
//                     <input className="input" type="text" placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
//                     <input className="input" type="text" placeholder="ISBN" value={form.isbn} onChange={(e) => setForm({ ...form, isbn: e.target.value })} required />
//                     <input className="input" type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
//                     <input className="input" type="number" placeholder="Published Year" value={form.publishedYear} onChange={(e) => setForm({ ...form, publishedYear: e.target.value })} />
//                     <input className="input" type="number" placeholder="Available Copies" value={form.availableCopies} onChange={(e) => setForm({ ...form, availableCopies: e.target.value })} />
//                     <input className="input" type="number" placeholder="Total Copies" value={form.totalCopies} onChange={(e) => setForm({ ...form, totalCopies: e.target.value })} />
//
//                     <input
//                         className="input col-span-2"
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })}
//                     />
//
//
//                     <button className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200">
//                         {editId ? "Update Book" : "Add Book"}
//                     </button>
//                 </form>
//
//                 <div className="grid gap-5">
//                     {books.map((book: any) => (
//                         <div key={book._id} className="p-5 border rounded shadow-md flex justify-between items-start bg-gray-50 hover:bg-gray-100 transition">
//                             <div>
//                                 <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
//                                 <p className="text-gray-600">Author: {book.author || "N/A"}</p>
//                                 <p className="text-gray-600">ISBN: {book.isbn}</p>
//                                 <p className="text-gray-600">Category: {book.category || "N/A"}</p>
//                                 <p className="text-gray-600">Published Year: {book.publishedYear || "N/A"}</p>
//                                 <p className="text-gray-600">Available Copies: {book.availableCopies ?? "N/A"}</p>
//                                 <p className="text-gray-600">Total Copies: {book.totalCopies ?? "N/A"}</p>
//                                 <p className="text-gray-600">Image: {book.image || "N/A"}</p>
//                             </div>
//                             <div className="space-y-2">
//                                 <button onClick={() => handleEdit(book)} className="block bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded transition">
//                                     ✏️ Edit
//                                 </button>
//                                 <button onClick={() => handleDelete(book._id)} className="block bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition">
//                                     🗑️ Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
//
