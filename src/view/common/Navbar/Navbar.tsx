import { Link } from "react-router-dom";
import './Navbar.css';
import { useEffect, useState } from "react";

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedRole = localStorage.getItem('role');
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-brand">📚 Online Library</div>
            <ul className="navbar-links">
                {role === 'ADMIN' && (
                    <>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/adminBooks">Books Management</Link></li>
                        <li><Link to="/a">User Management</Link></li>
                    </>
                )}
                {role === 'USER' && (
                    <>
                        <li><Link to="/">Books</Link></li>
                        <li><Link to="/borrowed">My Borrowed</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </>
                )}
                {!username && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register" className="register-btn">Register</Link></li>
                    </>
                )}
            </ul>

            {/*user info*/}
            {username && (
                <div className="username">

                    <span className="font-semibold">Hello, {username}</span>
                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300">
                        <span>Log Out</span>
                    </Link>

                </div>
            )}
        </nav>
    );
}

