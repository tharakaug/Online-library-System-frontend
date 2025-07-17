import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register";
import BookList from "./pages/BookList";
import AdminDashboard from "./pages/AdminDashboard";
import BorrowedBooks from "./pages/BorrowedBooks";
import AdminBookManagement from "./pages/AdminBookManagement";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/borrowed" element={<BorrowedBooks />} />
                <Route path="/admin/books" element={<AdminBookManagement />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
