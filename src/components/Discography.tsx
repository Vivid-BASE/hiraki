"use client";

import { useEffect, useState } from 'react';
import discoDataJson from '@/data/discography.json';
import { getImagePath } from '@/utils/imagePath';
import { fetchSheetData, SHEET_NAMES } from '@/utils/sheetsClient';

interface DiscographyItem {
    id: string;
    title: string;
    releaseDate: string;
    price: string;
    productCode?: string;
    description: string;
    tracks: string[];
    image: string;
    links: { [key: string]: string };
}

export default function Discography() {
    const [items, setItems] = useState<DiscographyItem[]>(discoDataJson as DiscographyItem[]);

    useEffect(() => {
        async function loadDisco() {
            const data = await fetchSheetData<any>(SHEET_NAMES.DISCOGRAPHY);
            if (data && data.length > 0) {
                // Simple mapping assuming columns match JSON keys or needing slight transformation
                // For now, we'll keep the JSON fallback primary until we define the exact Sheet structure
                // But let's log it
                console.log("Sheet discography data found:", data);
            }
        }
        loadDisco();
    }, []);

    return (
        <section id="discography" className="section">
            <div className="container">
                <h2 className="section-title">Discography</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    {items.map((item) => (
                        <div key={item.id} style={{
                            backgroundColor: '#161625',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            {/* Image */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                marginBottom: '1.5rem',
                                backgroundColor: '#000',
                                overflow: 'hidden'
                            }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={getImagePath(item.image)}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = getImagePath('/images/discography/placeholder.jpg');
                                    }}
                                />
                            </div>

                            {/* Product Code if available */}
                            {item.productCode && (
                                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                                    {item.productCode}
                                </p>
                            )}

                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                {item.releaseDate} Release / {item.price}
                            </p>
                            <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: '#ccc' }}>
                                {item.description}
                            </p>

                            <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                                {item.tracks.map((track, i) => (
                                    <div key={i}>{track}</div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: 'auto' }}>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.3rem', marginBottom: '0.2rem' }}>PURCHASE LINKS</p>
                                <div className="disco-links">
                                    {item.links?.aforce && (
                                        <a href={item.links.aforce} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                backgroundColor: 'var(--color-gold)',
                                                color: '#000',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '4px',
                                                fontWeight: 'bold',
                                                fontSize: '0.9rem',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                            Official Store (A-force)
                                        </a>
                                    )}
                                    {item.links?.tower && (
                                        <a href={item.links.tower} target="_blank" rel="noopener noreferrer"
                                            style={{ borderBottom: '1px solid #ffc107', fontSize: '0.9rem', color: '#ffc107' }}>
                                            Tower Records
                                        </a>
                                    )}
                                    {item.links?.hmv && (
                                        <a href={item.links.hmv} target="_blank" rel="noopener noreferrer"
                                            style={{ borderBottom: '1px solid #ff90b3', fontSize: '0.9rem', color: '#ff90b3' }}>
                                            HMV
                                        </a>
                                    )}
                                    {item.links?.rakuten && (
                                        <a href={item.links.rakuten} target="_blank" rel="noopener noreferrer"
                                            style={{ borderBottom: '1px solid #bf0000', fontSize: '0.9rem', color: '#bf0000' }}>
                                            Rakuten
                                        </a>
                                    )}
                                    {item.links?.amazon && (
                                        <a href={item.links.amazon} target="_blank" rel="noopener noreferrer"
                                            style={{ borderBottom: '1px solid #ffa724', fontSize: '0.9rem', color: '#ffa724' }}>
                                            Amazon
                                        </a>
                                    )}
                                    {item.links?.crownTokuma && (
                                        <a href={item.links.crownTokuma} target="_blank" rel="noopener noreferrer"
                                            style={{ borderBottom: '1px solid #aaa', fontSize: '0.9rem', color: '#aaa' }}>
                                            Crown Tokuma
                                        </a>
                                    )}
                                    {item.links?.apple && (
                                        <a href={item.links.apple} target="_blank" rel="noopener noreferrer"
                                            style={{ borderBottom: '1px solid #a6a6a6', fontSize: '0.9rem', color: '#a6a6a6' }}>
                                            Apple Music
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
