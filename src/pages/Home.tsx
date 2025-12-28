import Navbar from "@/components/landing/Navbar";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import ProductCardsSection from "@/components/home/ProductCardsSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import HomeFooterSection from "@/components/home/HomeFooterSection";

const Home = () => {
  return (
    <main className="font-body pt-20">
      <Navbar />
      <HomeHeroSection />
      <ProductCardsSection />
      <BrandStorySection />
      <HomeFooterSection />
    </main>
  );
};

export default Home;
