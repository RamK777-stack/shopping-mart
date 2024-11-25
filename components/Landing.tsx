import Image from "next/image";
import SalesHeader from "./common/SalesHeader";
import Header from "./common/Header";
import HeroSection from "./HeroSection";
import BrandBar from "./BrandBar";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import BrowseByStyle from "./BrowseByStyle";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./common/Footer";

export default function Landing() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <SalesHeader />
            <Header />
            <HeroSection />
            <BrandBar />
            <NewArrivals />
            <TopSelling />
            <BrowseByStyle />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
}
