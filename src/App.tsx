import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/pages/Login/Login.tsx";
import Register from "./view/pages/Register/Register.tsx";
import BookList from "./view/pages/BookList/BookList.tsx";
import AdminDashboard from "./view/pages/AdminDashboard/AdminDashboard.tsx";
import BorrowedBooks from "./view/pages/BorrowedBooks/BorrowedBooks.tsx";
import AdminBookManagement from "./view/pages/AdminBookManagement/AdminBookManagement.tsx";

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
                {/*<Route path="/admin/books" element={<AdminBooks />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
