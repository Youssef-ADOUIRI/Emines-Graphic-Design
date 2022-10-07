import "./App.css";
import Contact from "./components/Contact";
import ContentRec from "./components/ContentRec";
import Informations from "./components/Informations";
import MainRec from "./components/MainRec";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Parteners from "./components/Parteners";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body className="App-body">
        <MainRec />
        <ContentRec title="Empowering Moroccan creators/" color="1" />
        <ContentRec title="Empowering Moroccan creators/" color="4" />
        <ContentRec title="Empowering Moroccan creators/" color="5" />
        <ContentRec title="Empowering Moroccan creators/" color="3" />
        <News />
        <Parteners />
      </body>
      <footer className="App-footer d-flex mb-3 justify-content-between">
        <Informations />
        <Contact />
      </footer>
    </div>
  );
}

export default App;
