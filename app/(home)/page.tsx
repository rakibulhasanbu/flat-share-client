import { config } from "@/config";
import Banner from "../components/home/Banner";
import FeaturedSection from "../components/home/FeaturedSection";
import CTASection from "../components/home/Cta";
import Newsletter from "../components/home/Newslatter";
import Testimonials from "../components/home/Testimonials";
import Trasted from "../components/home/Trasted";
import FlatDetails from "../components/home/FlatDetails";
import PromoSection from "../components/home/PromoSection";
import Flats from "../components/home/Flats";

export default function Home() {
  return (
    <div className="bg-white py-20 container">
      <Banner />
      <FeaturedSection />
      <Flats />
      <CTASection />
      <Testimonials />
      <Trasted />
      <FlatDetails />
      <PromoSection />
      <Newsletter />
    </div>
  )
}
