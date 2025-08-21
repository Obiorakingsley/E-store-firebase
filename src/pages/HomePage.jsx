import Hero from "../Components/Hero";
import Popular from "../Components/Popularproduct";
import Products from "../Components/Products";
import Flashsales from "../Components/Flashsales";
import Bestseller from "../Components/Bestseller";
import Newcolection from "../Components/Newcolection";
import Reviews from "../Components/Reviews";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Products />
      <Flashsales />
      <Bestseller />
      <Newcolection />
      <Reviews />
    </>
  );
};

export default HomePage;
