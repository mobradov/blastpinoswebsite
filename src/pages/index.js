import Card from '@/components/Card/Card';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FirstSection from '@/components/Content/FirstSection';
import SecondSection from '@/components/Content/SecondSection';

import Mint from '@/components/Mint/Mint';

export default function Home() {
    return (
        <Card>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <Mint />
            <Footer />
        </Card>
    );
}
/*
           
            <Mint />
           */