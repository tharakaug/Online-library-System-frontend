import './Footer.css';
export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Online Library System. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-green-400 transition duration-300">Home</a>
                    <a href="#" className="hover:text-green-400 transition duration-300">Books</a>
                    <a href="#" className="hover:text-green-400 transition duration-300">Contact</a>
                    <a href="#" className="hover:text-green-400 transition duration-300">About</a>
                </div>
            </div>
        </footer>
    );
}
