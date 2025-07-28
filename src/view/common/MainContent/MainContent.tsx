import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {BookList} from "../../pages/BookList/BookList";
import {Login} from "../../pages/Login/Login";
import {Register} from "../../pages/Register/Register";
import {BorrowedBooks} from "../../pages/BorrowedBooks/BorrowedBooks";
import {AdminDashboard} from "../../pages/AdminDashboard/AdminDashboard";
import {AdminBookManagement} from "../../pages/AdminBookManagement/AdminBookManagement";

export function MainContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/borrowed" element={<BorrowedBooks />} />
                <Route path="/adminBooks" element={<AdminBookManagement />} />
            </Routes>
        </>
    );
}