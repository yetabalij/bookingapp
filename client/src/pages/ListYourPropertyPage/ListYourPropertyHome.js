import NavBar from "../../components/NavBar";
import HeaderComp from "./components/HeaderComp";
import YourPeaceOfMind from "./components/YourPeaceOfMind";
import BestDescribesYou from "./components/BestDescribesYou";
import Benefits from "./components/Benefits";
import Testimony from "./components/Testimony";

const ListYourPropertyHome = () => {
  return (
    <div className="AppContainer">
      <NavBar />
      <HeaderComp />
      <YourPeaceOfMind />
      <BestDescribesYou />
      <Benefits />
      <Testimony />
      <div className="FooterContainer">footer</div>
    </div>
  );
};

export default ListYourPropertyHome;
