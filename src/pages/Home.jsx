import BrandStatement from "../components/home/BrandStatement";
import FeaturedCollections from "../components/home/FeaturedCollections";
import Hero from "../components/home/Hero";
import LookBook from "../components/home/LookBook";
import NewDrop from "../components/home/NewDrop";
import NewsLetter from "../components/home/NewsLetter";

const Home = () => {
  return (
    <main>
      <Hero />
      <NewDrop />
      <BrandStatement />
      <FeaturedCollections />
      <LookBook />
      <NewsLetter />
    </main>
  );
};

export default Home;