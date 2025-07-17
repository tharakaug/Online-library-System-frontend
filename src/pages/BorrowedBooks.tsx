import Navbar from "../components/Navbar";

export default function BorrowedBooks() {
    // Temporary dummy data
    const borrowedBooks = [
        { id: 1, title: "Harry Potter", returnDate: "2025-07-31" },
        { id: 2, title: "Atomic Habits", returnDate: "2025-08-10" },
    ];

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">My Borrowed Books</h1>
                <div className="space-y-4">
                    {borrowedBooks.map((book) => (
                        <div key={book.id} className="p-4 border rounded shadow flex justify-between items-center">
                            <div>
                                <h2 className="font-bold">{book.title}</h2>
                                <p className="text-gray-500">Return by: {book.returnDate}</p>
                            </div>
                            <button className="bg-red-500 text-white px-3 py-1 rounded">Return</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
