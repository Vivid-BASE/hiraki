import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '開たかお Official Website',
    description: '演歌歌手 開たかお（ひらき たかお）のオフィシャルサイト。デビューシングル「迷い酒/未練」、最新曲「伊勢崎宮子町」好評発売中。',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
