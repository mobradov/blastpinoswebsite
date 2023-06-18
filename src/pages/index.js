import Card from '@/components/Card/Card';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FirstSection from '@/components/Content/FirstSection';
import SecondSection from '@/components/Content/SecondSection';
import ThirdSection from '@/components/Content/ThirdSection';
import FourthSection from '@/components/Content/FourthSection';
import Mint from '@/components/Mint/Mint';

export default function Home() {
    return (
        <Card>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Mint />
            <Footer />
        </Card>
    );
}
