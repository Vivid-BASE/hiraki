"use client";

import profileData from '@/data/profile.json';

export default function Contact() {
    return (
        <section id="contact" className="section" style={{ backgroundColor: '#0f0f16' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{
                    left: 'auto',
                    transform: 'none',
                    display: 'inline-block',
                }}>お問い合わせ</h2>
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    padding: '3rem',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(10, 10, 18, 0.9))'
                }}>
                    <p style={{ marginBottom: '2rem', lineHeight: '2' }}>
                        出演依頼、取材、その他お問い合わせは<br />
                        下記までお願いいたします。
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <a href="mailto:info@example.com" style={{
                            display: 'inline-block',
                            padding: '1rem 3rem',
                            backgroundColor: 'var(--color-gold)',
                            color: '#000',
                            fontWeight: 'bold',
                            borderRadius: '50px',
                            minWidth: '250px',
                            textDecoration: 'none'
                        }}>
                            メールでのお問い合わせ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
