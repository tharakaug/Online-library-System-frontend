import { useEffect, useState } from "react";
import { getBooks } from "../../../api/BookApi.ts";
import { borrowBook } from "../../../api/BorrrowApi.ts";
import { Navbar } from "../../common/Navbar/Navbar.tsx";
import { FaBook } from "react-icons/fa";
import './BookList.css';

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
            <section className="booklist-section">
                <div className="container">
                    <h1 className="booklist-heading">📖 Browse Available Books</h1>
                    <div className="book-grid">
                        {books.map((book) => (
                            <div key={book._id} className="book-card">
                                <div className="book-info">
                                    <h2 className="book-title">{book.title}</h2>
                                    <p><strong>Author:</strong> {book.author}</p>
                                    <p><strong>Category:</strong> {book.category}</p>
                                    {book.publishedYear && <p><strong>Published:</strong> {book.publishedYear}</p>}
                                    {book.isbn && <p><strong>ISBN:</strong> {book.isbn}</p>}
                                    <p><strong>Available:</strong> {book.availableCopies}</p>
                                    <img src={`http://localhost:3000/api/v1/uploads/book/${book.image}`} alt={book.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
