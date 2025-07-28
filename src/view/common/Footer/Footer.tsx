import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="custom-footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} <span className="highlight">Online Library System</span> 📚. All rights reserved.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Books</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                </div>

                <div className="footer-social">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
}
