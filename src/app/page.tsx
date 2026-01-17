import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import Discography from '@/components/Discography';
import Schedule from '@/components/Schedule';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VideoGallery from '@/components/VideoGallery';

import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
    return (
        <div className="main-wrapper">
            <LoadingScreen />
            <Header />
            <main>
                <Hero />
                <Profile />
                <VideoGallery />
                <Discography />
                <Schedule />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
