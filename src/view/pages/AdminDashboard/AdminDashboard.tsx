import { useEffect, useState } from 'react';
import API from '../../../api.ts';
import {Navbar} from '../../common/Navbar/Navbar.tsx';
import './AdminDashboard.css';

export function AdminDashboard() {
    const [stats, setStats] = useState({ totalBooks: 0, totalUsers: 0, totalBorrows: 0 });

    useEffect(() => {
        API.get('/admin/stats')
            .then((res) => setStats(res.data))
            .catch(() => alert("❌ Failed to load stats"));
    }, []);

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center text-teal-700">📊 Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="p-8 bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-2xl shadow-xl text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-semibold mb-2">Total Books</h2>
                        <p className="text-4xl font-bold">{stats.totalBooks}</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-lime-400 to-lime-600 text-white rounded-2xl shadow-xl text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-semibold mb-2">Total Users</h2>
                        <p className="text-4xl font-bold">{stats.totalUsers}</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-2xl shadow-xl text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-semibold mb-2">Books Borrowed</h2>
                        <p className="text-4xl font-bold">{stats.totalBorrows}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button
                        className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-transform hover:scale-105"
                        onClick={() => window.location.href = '/admin/books'}>
                        📚 Go to Book Management
                    </button>
                    <button
                        className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 hover:from-fuchsia-600 hover:to-fuchsia-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-transform hover:scale-105"
                        onClick={() => window.location.href = '/admin/users'}>
                        👥 Go to User Management
                    </button>
                </div>
            </div>

        </>
    );
}
