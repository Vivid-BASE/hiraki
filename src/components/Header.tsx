"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled || mobileMenuOpen ? 'rgba(10, 10, 18, 0.95)' : 'transparent',
            padding: scrolled ? '1rem 0' : '2rem 0',
            borderBottom: scrolled ? '1px solid rgba(197, 160, 89, 0.3)' : 'none',
            backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.1em', zIndex: 1001 }}>
                    <Link href="/" onClick={handleLinkClick}>開たかお</Link>
                </h1>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
                        {['Profile', 'Video', 'Discography', 'Schedule', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href={`#${item.toLowerCase()}`} style={{
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    paddingBottom: '5px'
                                }} className="nav-link">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    style={{
                        display: 'none', // Hidden on desktop by default, controlled by CSS
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        width: '2rem',
                        height: '2rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 1001,
                        padding: 0
                    }}
                >
                    <span style={{
                        width: '2rem',
                        height: '2px',
                        background: 'white',
                        transition: 'all 0.3s linear',
                        transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'rotate(0)'
                    }} />
                    <span style={{
                        width: '2rem',
                        height: '2px',
                        background: 'white',
                        transition: 'all 0.3s linear',
                        opacity: mobileMenuOpen ? 0 : 1,
                        transform: mobileMenuOpen ? 'translateX(20px)' : 'translateX(0)'
                    }} />
                    <span style={{
                        width: '2rem',
                        height: '2px',
                        background: 'white',
                        transition: 'all 0.3s linear',
                        transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'rotate(0)'
                    }} />
                </button>

                {/* Mobile Navigation Overlay */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    width: '100%',
                    background: 'rgba(5, 5, 10, 0.98)',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }} className="mobile-nav-overlay">
                    <ul style={{ listStyle: 'none', textAlign: 'center', padding: 0 }}>
                        {['Profile', 'Video', 'Discography', 'Schedule', 'Contact'].map((item) => (
                            <li key={item} style={{ margin: '2rem 0' }}>
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    style={{
                                        fontSize: '1.5rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: 'var(--color-gold)',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
