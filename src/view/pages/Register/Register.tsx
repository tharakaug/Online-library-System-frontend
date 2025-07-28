import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/v1/auth/register", {
                username,
                email,
                password,
                role: "user",
            });
            alert("✅ Registered Successfully!");
            navigate("/login");
        } catch (error) {
            alert("❌ Registration failed (maybe email already exists)");
            console.error(error);
        }
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h2 className="register-title">📚 Create Your Account</h2>
                <form onSubmit={handleRegister} className="register-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="register-button">
                        Sign Up
                    </button>

                    <p className="register-footer">
                        Already registered?{" "}
                        <span onClick={() => navigate("/login")}>Login here</span>
                    </p>
                </form>
            </div>
        </div>
    );
}
