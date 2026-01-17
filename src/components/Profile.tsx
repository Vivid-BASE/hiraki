"use client";

import { useEffect, useState } from 'react';
import profileDataJson from '@/data/profile.json';
import { getImagePath } from '@/utils/imagePath';
import { fetchSheetData, SHEET_NAMES, SheetRow } from '@/utils/sheetsClient';

interface ProfileData {
    name: string;
    birthYear: string;
    birthPlace: string;
    biography: string[];
    image: string;
}

export default function Profile() {
    const [profile, setProfile] = useState<ProfileData>({
        name: profileDataJson.name,
        birthYear: profileDataJson.birthYear,
        birthPlace: profileDataJson.birthPlace,
        biography: profileDataJson.biography,
        image: profileDataJson.images.profile
    });

    useEffect(() => {
        async function loadProfile() {
            const data = await fetchSheetData<SheetRow>(SHEET_NAMES.PROFILE);
            if (data && data.length > 0) {
                const newProfile: any = { biography: [] };
                data.forEach(row => {
                    if (row.field === 'name') newProfile.name = row.value;
                    if (row.field === 'birthYear') newProfile.birthYear = row.value;
                    if (row.field === 'birthPlace') newProfile.birthPlace = row.value;
                    if (row.field === 'profileImage') newProfile.image = row.value;
                    if (row.field && row.field.startsWith('biography')) newProfile.biography.push(row.value);
                });
                // Only update if we have valid data
                if (newProfile.name) {
                    setProfile(prev => ({ ...prev, ...newProfile }));
                }
            }
        }
        loadProfile();
    }, []);

    return (
        <section id="profile" className="section">
            <div className="container">
                <h2 className="section-title">Profile</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Image Circle */}
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--color-gold)',
                        boxShadow: '0 0 30px rgba(197, 160, 89, 0.2)',
                        flexShrink: 0
                    }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={getImagePath(profile.image)}
                            alt={profile.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Text Content */}
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{profile.name}</h3>
                        <p style={{ color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
                            {profile.birthPlace} 出身 / {profile.birthYear}年 生まれ
                        </p>
                        <div style={{ lineHeight: '2.2', textAlign: 'left', display: 'inline-block' }}>
                            {profile.biography.map((line, i) => (
                                <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
