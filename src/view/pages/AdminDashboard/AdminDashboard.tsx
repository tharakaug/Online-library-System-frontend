import { useEffect, useState } from 'react';
import API from '../../../api.ts';
import { Navbar } from '../../common/Navbar/Navbar.tsx';
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
            <div className="admin-dashboard">
                <h1 className="dashboard-title">📊 Admin Dashboard</h1>

                <div className="stats-grid">
                    <div className="stat-card blue">
                        <h2>Total Books</h2>
                        <p>{stats.totalBooks}</p>
                    </div>
                    <div className="stat-card green">
                        <h2>Total Users</h2>
                        <p>{stats.totalUsers}</p>
                    </div>
                    <div className="stat-card pink">
                        <h2>Books Borrowed</h2>
                        <p>{stats.totalBorrows}</p>
                    </div>
                </div>

                <div className="action-buttons">
                    <button onClick={() => window.location.href = '/admin/books'}>
                        📚 Go to Book Management
                    </button>
                    <button onClick={() => window.location.href = '/admin/users'}>
                        👥 Go to User Management
                    </button>
                </div>
            </div>
        </>
    );
}
