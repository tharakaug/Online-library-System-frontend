// import Navbar from "../components/Navbar";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import './AdminDashboard.css'
//
//
// export default function AdminDashboard() {
//     const [stats, setStats] = useState({ totalBooks: 0, totalUsers: 0, totalBorrowed: 0 });
//
//     useEffect(() => {
//         // Replace with real API later
//         setStats({ totalBooks: 50, totalUsers: 20, totalBorrowed: 10 });
//     }, []);
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6">
//                 <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="p-4 bg-blue-600 text-white rounded shadow">
//                         <h2 className="text-xl">Total Books</h2>
//                         <p className="text-3xl font-bold">{stats.totalBooks}</p>
//                     </div>
//                     <div className="p-4 bg-green-600 text-white rounded shadow">
//                         <h2 className="text-xl">Total Users</h2>
//                         <p className="text-3xl font-bold">{stats.totalUsers}</p>
//                     </div>
//                     <div className="p-4 bg-yellow-600 text-white rounded shadow">
//                         <h2 className="text-xl">Books Borrowed</h2>
//                         <p className="text-3xl font-bold">{stats.totalBorrowed}</p>
//                     </div>
//                 </div>
//                 <button className="mb-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = "/admin/books"}>
//                     Go to Book Management
//                 </button>
//                 <button
//                     className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors" onClick={() => window.location.href = "/admin/users"}>
//                     Go to User Management
//                 </button>
//             </div>
//         </>
//     );
// }


// import { useEffect, useState } from 'react';
// import API from '../../../api.ts';
// import Navbar from '../../common/Navbar/Navbar.tsx';
//
// export default function AdminDashboard() {
//     const [stats, setStats] = useState({ totalBooks: 0, totalUsers: 0, totalBorrows: 0 });
//
//     useEffect(() => {
//         API.get('/admin/stats').then((res) => setStats(res.data));
//     }, []);
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-6">
//                 <h1 className="text-3xl font-bold mb-6">Admin Dashboard 📊</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="p-6 bg-blue-500 text-white rounded shadow">
//                         <h2>Total Books</h2>
//                         <p className="text-2xl font-bold">{stats.totalBooks}</p>
//                     </div>
//                     <div className="p-6 bg-green-500 text-white rounded shadow">
//                         <h2>Total Users</h2>
//                         <p className="text-2xl font-bold">{stats.totalUsers}</p>
//                     </div>
//                     <div className="p-6 bg-purple-500 text-white rounded shadow">
//                         <h2>Total Borrowed</h2>
//                         <p className="text-2xl font-bold">{stats.totalBorrows}</p>
//                     </div>
//                                      <button className="mb-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = "/admin/books"}>
//                                          Go to Book Management
//                                      </button>
//                 </div>
//
//             </div>
//         </>
//     );
// }


import { useEffect, useState } from 'react';
import API from '../../../api.ts'; // or your central API.ts file
import {Navbar} from '../../common/Navbar/Navbar.tsx';
import './AdminDashboard.css';
import {Footer} from "../../common/Footer/Footer.tsx";

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
