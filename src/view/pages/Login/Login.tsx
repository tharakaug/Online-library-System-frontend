// import { useState } from "react";
// import axios from "axios";
// import './Login.css'
//
// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/login", {
//                 email,
//                 password,
//             });
//             localStorage.setItem("token", response.data.token);
//             alert("Login Successful!");
//         } catch (error) {
//             alert("Invalid credentials");
//         }
//     };
//
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4">
//                 <h2 className="text-2xl font-bold">Login</h2>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="border p-2 w-full"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="border p-2 w-full"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// }

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            alert("✅ Login Successful!");
            navigate("/");  // ✅ Redirect to Book List after login
        } catch (error) {
            alert("❌ Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4 w-80">
                <h2 className="text-2xl font-bold text-center">📚 Library Login</h2>
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
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 w-full rounded font-semibold"
                >
                    Sign In
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="text-sm text-blue-600 underline w-full text-center"
                >
                    Go Back to Home
                </button>
            </form>
        </div>
    );
}
