import "./App.css";
import Contact from "./components/Contact";
import ContentRec from "./components/ContentRec";
import MainRec from "./components/MainRec";
import "./components/Navbar";
import Navbar from "./components/Navbar";

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
      </body>
      <footer className="App-footer d-flex mb-3 justify-content-between">
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
        Eaque animi debitis voluptate nam blanditiis. Numquam, delectus vero, <br/>
        praesentium fugit iste, esse eum aliquam ut voluptate placeat <br/>
        soluta tempore blanditiis distinctio.</div>
        <div></div>
        <Contact/>
      </footer>
    </div>
  );
}

export default App;
