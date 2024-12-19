import HeroSection from "./HeroSection";
import BrandBar from "./BrandBar";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import BrowseByStyle from "./BrowseByStyle";
import ContactUs from "./ContactUs";
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
