import "./Home.css";
import Contact from "../components/Contact";
import Feed from "../components/Feed";
import Informations from "../components/Informations";
import MainRec from "../components/MainRec";
import "../components/Navbar";
import News from "../components/News";
import Parteners from "../components/Parteners";

function Home() {
  //const HOME_PROJECT_NUMBER = 4;

  return (
    <div className="App">
      <div className="App-body">
        <MainRec />
        <Feed number="5" />
        <News />
        <Parteners />
      </div>
      <footer className="App-footer d-flex mb-3 justify-content-between">
        <Informations />
        <Contact />
      </footer>
    </div>
  );
}

export default Home;
