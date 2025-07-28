import React from 'react';
import { Navbar } from '../../common/Navbar/Navbar';
import './About.css'
import { FaBullseye, FaRocket, FaLock, FaGlobe } from 'react-icons/fa';
import {Footer} from "../../common/Footer/Footer.tsx";

export function About() {
    const features = [
        {
            icon: <FaBullseye />,
            title: 'Our Mission',
            desc: 'Empowering learners with digital knowledge anytime, anywhere. Promoting literacy through innovation.',
        },
        {
            icon: <FaRocket />,
            title: 'Built for Performance',
            desc: 'Powered by React, TypeScript, Node.js & MongoDB for speed, stability & security.',
        },
        {
            icon: <FaLock />,
            title: 'Security First',
            desc: 'Token-based authentication and role-based access ensure user privacy and safe access.',
        },
        {
            icon: <FaGlobe />,
            title: 'Global Access',
            desc: 'Accessible anywhere — at home, school, or on the go, your library is always with you.',
        },
    ];

    return (
        <>
            <Navbar />
            <main className="about-container">
                <div className="about-wrapper">
                    {/* Banner */}
                    {/*<section className="about-banner">*/}
                    {/*    <div className="banner-overlay">*/}
                    {/*        <h1>About Our Library</h1>*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    {/* Content */}
                    <section className="about-content">
                        {/* Intro */}
                        <div className="intro">
                            <h2>📖 Discover. Learn. Grow.</h2>
                            <p>
                                Welcome to the <span className="highlight">Online Library System</span>
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="features-grid">
                            {features.map(({ icon, title, desc }, idx) => (
                                <article className="feature-card" key={idx} aria-label={title}>
                                    <div className="feature-icon">{icon}</div>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </article>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="quote">
                            “A library is not a luxury but one of the necessities of life.”
                            <footer>– Henry Ward Beecher</footer>
                        </blockquote>
                    </section>
                </div>
            </main>
            <Footer/>

        </>
    );
}
