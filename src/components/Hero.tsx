"use client";

import profileData from '@/data/profile.json';
import { motion } from 'framer-motion';

export default function Hero() {
    // Defines the text reveal animation variants
    const letterContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 2.2 // Wait for loading screen to finish
            }
        }
    };

    const letterChild = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100 }
        }
    };

    return (
        <section style={{
            minHeight: '90vh', // Increased from 60vh for desktop balance
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: '80px' // Avoid header overlap
        }}>
            {/* Background Image with Overlay */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/hero_new.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    zIndex: -2,
                    filter: 'brightness(0.7) contrast(1.1)'
                }}
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(42, 32, 53, 0.3) 0%, rgba(20, 25, 45, 0.8) 100%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '0 1rem'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap'
                    }}>
                        {/* CD Jacket Image - Floating Animation */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 2.4 }}
                            style={{
                                flexShrink: 0,
                                width: '280px',
                                maxWidth: '100%',
                                position: 'relative'
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/discography/isesaki_miyako_machi.jpg"
                                    alt="伊勢崎宮子町 CD Jacket"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <div style={{ textAlign: 'left', minWidth: '300px' }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.6, duration: 0.8 }}
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.2rem',
                                    color: 'var(--color-text)',
                                    letterSpacing: '0.1em',
                                    marginBottom: '1rem',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                }}>
                                <span style={{
                                    backgroundColor: 'var(--color-gold)',
                                    color: '#000',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    verticalAlign: 'middle',
                                    marginRight: '0.8rem'
                                }}>
                                    NEW RELEASE
                                </span>
                                開 たかお 最新シングル
                            </motion.p>

                            {/* Staggered Text Reveal */}
                            <motion.h1
                                className="hero-title"
                                variants={letterContainer}
                                initial="hidden"
                                animate="visible"
                                style={{
                                    fontWeight: '700',
                                    color: '#fff',
                                    marginBottom: '1rem',
                                    textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                                    lineHeight: '1.1',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.1em'
                                }}>
                                {"伊勢崎宮子町".split('').map((char, index) => (
                                    <motion.span key={index} variants={letterChild}>
                                        {char}
                                    </motion.span>
                                ))}
                                {/* Subtitle with simple fade */}
                                <motion.span
                                    className="hero-subtitle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.9 }}
                                    transition={{ delay: 3.5, duration: 1 }}
                                    style={{
                                        display: 'block',
                                        marginTop: '0.2rem',
                                        width: '100%'
                                    }}>
                                    / 雨の青山
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.8, duration: 0.8 }}
                                style={{
                                    fontSize: '1.2rem',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--color-gold)',
                                    marginBottom: '1.5rem'
                                }}>
                                絶賛発売中 / ¥1,400(税込)
                            </motion.p>

                            {/* Call to Action - Pulse Animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 4.0, duration: 0.5 }}
                            >
                                <a href="#discography" style={{
                                    display: 'inline-block',
                                    border: '1px solid var(--color-gold)',
                                    color: 'var(--color-gold)',
                                    padding: '0.6rem 2rem',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.1em',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = 'var(--color-gold)';
                                    }}
                                >
                                    詳細・購入はこちら &rarr;
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
