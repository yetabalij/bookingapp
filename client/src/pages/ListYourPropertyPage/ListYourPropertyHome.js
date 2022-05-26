import NavBar from "../../components/NavBar";
import HeaderComp from "./components/HeaderComp";
import YourPeaceOfMind from "./components/YourPeaceOfMind";
import BestDescribesYou from "./components/BestDescribesYou";

const ListYourPropertyHome = () => {
  return (
    <div className="AppContainer">
      <NavBar />
      <HeaderComp />
      <YourPeaceOfMind />
      <BestDescribesYou />
      <div className="FooterContainer">footer</div>
    </div>
  );
};

export default ListYourPropertyHome;
