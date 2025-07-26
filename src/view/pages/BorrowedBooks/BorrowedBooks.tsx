// import { useEffect, useState } from "react";
// import { getMyBorrows, returnBook } from "../../../api/BorrrowApi.ts";
// import {Navbar} from "../../common/Navbar/Navbar.tsx";
//
// export function BorrowedBooks() {
//     const [borrows, setBorrows] = useState([]);
//
//     const loadBorrows = async () => {
//         const res = await getMyBorrows();
//         setBorrows(res.data);
//     };
//
//     useEffect(() => {
//         loadBorrows();
//     }, []);
//
//     const handleReturn = async (borrowId: string) => {
//         try {
//             await returnBook(borrowId);
//             alert("✅ Book Returned!");
//             loadBorrows();
//         } catch {
//             alert("❌ Return Failed");
//         }
//     };
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6">
//                 <h1 className="text-2xl font-bold mb-4">My Borrowed Books</h1>
//                 <div className="space-y-4">
//                     {borrows.map((borrow) => (
//                         <div key={borrow._id} className="p-4 border rounded shadow flex justify-between items-center">
//                             <div>
//                                 <h2 className="font-bold">{borrow.book.title}</h2>
//                                 <p>Author: {borrow.book.author}</p>
//                                 <p>Return by: {borrow.returnDate ? new Date(borrow.returnDate).toLocaleDateString() : "Not Returned"}</p>
//                             </div>
//                             <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleReturn(borrow._id)}>
//                                 Return
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import { getMyBorrows, returnBook } from "../../../api/BorrrowApi.ts";
import { Navbar } from "../../common/Navbar/Navbar.tsx";

export function BorrowedBooks() {
    const [borrows, setBorrows] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadBorrows = async () => {
        try {
            setLoading(true);
            const res = await getMyBorrows();
            setBorrows(res.data);
        } catch (err) {
            alert("❌ Failed to fetch borrowed books. Make sure you're logged in.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBorrows();
    }, []);

    const handleReturn = async (borrowId: string) => {
        try {
            await returnBook(borrowId);
            alert("✅ Book Returned!");
            loadBorrows(); // reload after returning
        } catch {
            alert("❌ Return Failed");
        }
    };

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">📦 My Borrowed Books</h1>

                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : borrows.length === 0 ? (
                    <p className="text-center text-gray-500">No borrowed books found.</p>
                ) : (
                    <div className="space-y-5">
                        {borrows.map((borrow) => (
                            <div
                                key={borrow._id}
                                className="p-5 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{borrow.book?.title || "Untitled Book"}</h2>
                                    <p className="text-sm text-gray-600">Author: {borrow.book?.author || "Unknown"}</p>
                                    <p className="text-sm text-gray-600">
                                        Return by:{" "}
                                        {borrow.returnDate
                                            ? new Date(borrow.returnDate).toLocaleDateString()
                                            : "❌ Not Returned"}
                                    </p>
                                </div>
                                <button
                                    className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
                                    onClick={() => handleReturn(borrow._id)}
                                >
                                    Return Book
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
