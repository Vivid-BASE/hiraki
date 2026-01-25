"use client";

import { useEffect, useState } from 'react';
import scheduleDataJson from '@/data/schedule.json';
import { fetchSheetData, SHEET_NAMES } from '@/utils/sheetsClient';

interface ScheduleItem {
    date: string;
    title: string;
    place: string;
    details: string;
}

export default function Schedule() {
    const [events, setEvents] = useState<ScheduleItem[]>(scheduleDataJson as ScheduleItem[]);

    useEffect(() => {
        async function loadSchedule() {
            const data = await fetchSheetData<any>(SHEET_NAMES.SCHEDULE);
            if (data && data.length > 0) {
                // Map fields
                const mappedEvents = data.map(row => ({
                    date: row.date || '',
                    title: row.title || '',
                    place: row.place || '',
                    details: row.details || ''
                }));
                setEvents(mappedEvents);
            }
        }
        loadSchedule();
    }, []);

    return (
        <section id="schedule" className="section">
            <div className="container">
                <h2 className="section-title">Schedule</h2>

                {events.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
                        <p className="text-gray-400">次の幕が上がるまで、しばしお待ちを</p>
                    </div>
                ) : (
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {events.map((event, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1.5rem',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                marginBottom: '1rem'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{
                                        color: 'var(--color-gold)',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        minWidth: '100px'
                                    }}>
                                        {event.date}
                                    </span>
                                    <h3 style={{ fontSize: '1.2rem' }}>{event.title}</h3>
                                </div>
                                <div style={{ paddingLeft: 'calc(100px + 1.5rem)', color: '#aaa', fontSize: '0.95rem' }}>
                                    <p>@ {event.place}</p>
                                    {event.details && <p style={{ marginTop: '0.5rem' }}>{event.details}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
