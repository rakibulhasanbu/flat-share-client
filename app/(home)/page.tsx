import Banner from "../components/home/Banner";
import FeaturedSection from "../components/home/FeaturedSection";
import CTASection from "../components/home/Cta";
import Newsletter from "../components/home/Newslatter";
import Testimonials from "../components/home/Testimonials";
import Trasted from "../components/home/Trasted";
import PromoSection from "../components/home/PromoSection";
import FlatList from "../components/home/FlatList";

export default function Home() {
  return (
    <div className="bg-white py-20 container">
      <Banner />
      <FlatList />
      <FeaturedSection />
      <CTASection />
      <Testimonials />
      <Trasted />
      <PromoSection />
      <Newsletter />
    </div>
  )
}
