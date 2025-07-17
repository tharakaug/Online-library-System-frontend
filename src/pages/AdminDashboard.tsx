import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import './AdminDashboard.css'


export default function AdminDashboard() {
    const [stats, setStats] = useState({ totalBooks: 0, totalUsers: 0, totalBorrowed: 0 });

    useEffect(() => {
        // Replace with real API later
        setStats({ totalBooks: 50, totalUsers: 20, totalBorrowed: 10 });
    }, []);

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-600 text-white rounded shadow">
                        <h2 className="text-xl">Total Books</h2>
                        <p className="text-3xl font-bold">{stats.totalBooks}</p>
                    </div>
                    <div className="p-4 bg-green-600 text-white rounded shadow">
                        <h2 className="text-xl">Total Users</h2>
                        <p className="text-3xl font-bold">{stats.totalUsers}</p>
                    </div>
                    <div className="p-4 bg-yellow-600 text-white rounded shadow">
                        <h2 className="text-xl">Books Borrowed</h2>
                        <p className="text-3xl font-bold">{stats.totalBorrowed}</p>
                    </div>
                </div>
                <button className="mb-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = "/admin/books"}>
                    Go to Book Management
                </button>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors" onClick={() => window.location.href = "/admin/users"}>
                    Go to User Management
                </button>
            </div>
        </>
    );
}
