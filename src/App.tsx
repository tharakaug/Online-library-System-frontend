import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
import {Register} from "./view/pages/Register/Register.tsx";
import {BookList} from "./view/pages/BookList/BookList.tsx";
import {AdminDashboard} from "./view/pages/AdminDashboard/AdminDashboard.tsx";
import {BorrowedBooks} from "./view/pages/BorrowedBooks/BorrowedBooks.tsx";
import {AdminBookManagement} from "./view/pages/AdminBookManagement/AdminBookManagement.tsx";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {About} from "./view/pages/About/About.tsx";
import {Contact} from "./view/pages/Contact/Contact.tsx";
import * as React from "react";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<DefaultLayout />} />
                {/*<Route path="/" element={<BookList />} />*/}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/*<Route path="/admin" element={<AdminDashboard />} />*/}
                {/*<Route path="/borrowed" element={<BorrowedBooks />} />*/}
                {/*<Route path="/admin/books" element={<AdminBookManagement />} />*/}
                {/*<Route path="/admin/books" element={<AdminBooks />} />*/}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/adminBook" element={<AdminBookManagement />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
