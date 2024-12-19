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
import TestimonialsMarquee from "./TestimonialsMarquee";

export default function Landing() {
    return (
        <>
            <HeroSection />
            <BrandBar />
            <NewArrivals />
            <TopSelling />
            <BrowseByStyle />
            <TestimonialsMarquee />
            <ContactUs />
        </>
    );
}
