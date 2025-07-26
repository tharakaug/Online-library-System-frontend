import { useEffect, useState } from "react";
import { getMyBorrows, returnBook } from "../../../api/BorrrowApi.ts";
import {Navbar} from "../../common/Navbar/Navbar.tsx";

export function BorrowedBooks() {
    const [borrows, setBorrows] = useState([]);

    const loadBorrows = async () => {
        const res = await getMyBorrows();
        setBorrows(res.data);
    };

    useEffect(() => {
        loadBorrows();
    }, []);

    const handleReturn = async (borrowId: string) => {
        try {
            await returnBook(borrowId);
            alert("✅ Book Returned!");
            loadBorrows();
        } catch {
            alert("❌ Return Failed");
        }
    };

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">My Borrowed Books</h1>
                <div className="space-y-4">
                    {borrows.map((borrow) => (
                        <div key={borrow._id} className="p-4 border rounded shadow flex justify-between items-center">
                            <div>
                                <h2 className="font-bold">{borrow.book.title}</h2>
                                <p>Author: {borrow.book.author}</p>
                                <p>Return by: {borrow.returnDate ? new Date(borrow.returnDate).toLocaleDateString() : "Not Returned"}</p>
                            </div>
                            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleReturn(borrow._id)}>
                                Return
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
