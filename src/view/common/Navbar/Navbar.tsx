import {Link} from "react-router-dom";
import './Navbar.css'
import {useEffect, useState} from "react";

export function Navbar() {

    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedRole = localStorage.getItem('role');
        setUsername(storedUsername);
        setRole(storedRole)
    }, []);

    return (
        <nav className="bg-blue-700 text-white flex justify-between p-4">
            <div className="font-bold text-xl">Online Library 📚</div>
            <div className="space-x-4">
                <Link to="/" className="hover:text-gray-300">Books</Link>
                <Link to="/borrowed" className="hover:text-gray-300">My Borrowed</Link>
                <Link to="/admin" className="hover:text-gray-300">Admin</Link>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
                <Link to="/register" className="hover:text-gray-300">Register</Link>
            </div>
        </nav>
    );
}
