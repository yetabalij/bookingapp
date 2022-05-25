import NavBar from "../../components/NavBar";
import HeaderComp from "./components/HeaderComp";
import YourPeaceOfMind from "./components/YourPeaceOfMind";

const ListYourPropertyHome = () => {
  return (
    <div className="AppContainer">
      <NavBar />
      <HeaderComp />
      <YourPeaceOfMind></YourPeaceOfMind>
      <div className="FooterContainer">footer</div>
    </div>
  );
};

export default ListYourPropertyHome;
