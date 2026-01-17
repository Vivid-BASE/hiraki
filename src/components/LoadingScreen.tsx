"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., verifying assets or just purely effect)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#050508', // Deep dark background
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        <h1 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '2.5rem',
                            color: 'var(--color-gold)',
                            letterSpacing: '0.2em',
                            marginBottom: '1rem',
                            fontWeight: 'bold'
                        }}>
                            開たかお
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                            style={{
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                                margin: '0 auto',
                                maxWidth: '200px'
                            }}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            style={{
                                marginTop: '1rem',
                                color: '#666',
                                fontSize: '0.8rem',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Official Website
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
