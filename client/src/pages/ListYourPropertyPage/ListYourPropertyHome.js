import NavBar from "../../components/SecondaryNavBar";
import HeaderComp from "./components/HeaderComp";
import YourPeaceOfMind from "./components/YourPeaceOfMind";
import BestDescribesYou from "./components/BestDescribesYou";
import Benefits from "./components/Benefits";
import Testimony from "./components/Testimony";
import Footer from "../../components/Footer";

const ListYourPropertyHome = () => {
  return (
    <div className="AppContainer overflow-hidden">
      <NavBar />
      <HeaderComp />
      <YourPeaceOfMind />
      <BestDescribesYou />
      <Benefits />
      <Testimony />
      <Footer />
    </div>
  );
};

export default ListYourPropertyHome;
