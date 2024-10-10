import HeroOne from "./subpages/heroOne/HeroOne";
import styles from "./Home.module.css";
import Features from "./subpages/features/Features";
import Intro from "./subpages/intro-line/Intro";
import Why from "./subpages/why/Why";
import CarFeatures from "./subpages/car-features/CarFeatures";
import BusTrain from "./subpages/bus-train/BusTrain";
import ChooseCab from "./subpages/choose-cab/ChooseCab";
import Discovering from "./subpages/discovering/Discovering";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div className={styles.home_container}>
      <HeroOne />
      <Features />
      <Intro />
      <Why />
      <CarFeatures />
      <BusTrain />
      <ChooseCab />
      <Discovering />
      <Footer />
    </div>
  );
}

export default Home;
