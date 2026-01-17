"use client";

import { useState } from 'react';

const videos = [
    {
        id: "Vb-nBvRhD3Q",
        title: "開 たかお「伊勢崎宮子町」",
        category: "Latest Single",
        description: "地元・伊勢崎を舞台にした情緒溢れる最新シングル。"
    },
    {
        id: "EsoiA3siDyM",
        title: "開たかお「迷い酒」Music Video",
        category: "Music Video",
        description: "伝統的な演歌スタイルを大切にした代表曲。"
    },
    {
        id: "uhQRuEI4uq4",
        title: "迷い酒（群馬テレビ出演）",
        category: "TV Performance",
        description: "「演歌大好き」出演時のスタジオライブ映像。"
    },
    {
        id: "HnaGdlNt-EA",
        title: "未練（群馬テレビ出演）",
        category: "TV Performance",
        description: "哀愁漂う歌唱力が光るテレビパフォーマンス。"
    },
    {
        id: "bzPaBtfnT2A",
        title: "伊勢崎市宮子町 在住のアーティスト",
        category: "Interview",
        description: "いせさきFMによる特別インタビュー映像。"
    }
];

export default function VideoGallery() {
    const [featuredVideo, setFeaturedVideo] = useState(videos[0]); // videos[0] is Isesaki Miyakocho

    return (
        <section id="video" className="section">
            <div className="container">
                <h2 className="section-title">Video Gallery</h2>

                {/* Featured Video Player */}
                <div style={{
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '900px',
                        margin: '0 auto',
                        aspectRatio: '16 / 9',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                        border: '1px solid rgba(197, 160, 89, 0.3)'
                    }}>
                        <iframe
                            key={featuredVideo.id}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                            title={featuredVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                        ></iframe>
                    </div>
                    <div style={{ marginTop: '1.5rem', maxWidth: '800px', margin: '1.5rem auto 0' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
                            {featuredVideo.title}
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>{featuredVideo.description}</p>
                    </div>
                </div>

                {/* Video Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setFeaturedVideo(video)}
                            style={{
                                cursor: 'pointer',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                border: featuredVideo.id === video.id ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.1)',
                                backgroundColor: 'rgba(255,255,255,0.03)'
                            }}
                            className="video-thumbnail"
                        >
                            <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                    alt={video.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span style={{ fontSize: '2rem', color: '#fff' }}>▶</span>
                                </div>
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.7rem',
                                    padding: '0.2rem 0.6rem',
                                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                                    color: 'var(--color-gold)',
                                    borderRadius: '12px',
                                    marginBottom: '0.5rem'
                                }}>
                                    {video.category}
                                </span>
                                <h4 style={{ fontSize: '0.95rem', lineHeight: '1.4', marginBottom: '0' }}>
                                    {video.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <a
                        href="https://www.youtube.com/@HirakiTakao"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            color: 'var(--color-text-muted)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            borderBottom: '1px solid transparent',
                            transition: 'border-color 0.3s'
                        }}
                    >
                        View more on YouTube &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
