import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { getUserFromToken } from "../../../auth/auth.ts";
import type { UserData } from "../../../model/userData.ts";
import API from "../../../api.ts";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await API.post("/auth/login", { email, password });
            const { accessToken, refreshToken } = response.data;

            localStorage.setItem("token", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            const user: UserData = getUserFromToken(accessToken);
            localStorage.setItem("email", user.email || "");
            localStorage.setItem("role", user.role || "");
            localStorage.setItem("username", user.username || "");

            alert("✅ Login successful!");

            navigate(user.role === "ADMIN" ? "/admin" : "/");
        } catch {
            alert("❌ Invalid credentials");
        }
    };

    return (
        <div className="modern-login-wrapper">
            <form className="modern-login-card" onSubmit={handleLogin}>
                <h2 className="modern-login-title">🔐 Sign In</h2>

                <div className="modern-input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="📧 you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="modern-input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="🔑 Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="modern-login-button">
                    🚀 Log In
                </button>

                {/*<p className="modern-login-footer" onClick={() => navigate("/")}>*/}
                {/*    ← Back to Home*/}
                {/*</p>*/}
                <p className="modern-login-footer" onClick={() => navigate("/register")}>
                    Don't have an account? Register →
                </p>

            </form>
        </div>
    );
}
