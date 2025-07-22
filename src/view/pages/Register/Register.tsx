import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import './Register.css'

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", {
                email,
                password,
            });
            alert("✅ Registered Successfully!");
            navigate("/login");
        } catch (error) {
            alert("❌ Registration failed (maybe email already exists)");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md space-y-4 w-80">
                <h2 className="text-2xl font-bold text-center">📚 Library Register</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white p-2 w-full rounded font-semibold"
                >
                    Register
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-sm text-green-600 underline w-full text-center"
                >
                    Already registered? Login
                </button>
            </form>
        </div>

    );
}

