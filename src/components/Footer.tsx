"use client";

import profileData from '@/data/profile.json';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#050508',
            padding: '3rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="container">
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '1rem' }}>開たかお</p>

                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    &copy; {new Date().getFullYear()} Takao Hiraki. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
