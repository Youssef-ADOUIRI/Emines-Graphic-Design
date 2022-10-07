import "./App.css";
import ContentRec from "./components/ContentRec";
import MainRec from "./components/MainRec";
import "./components/Navbar"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <MainRec/>
        <ContentRec/>
        <ContentRec/>
      </header>
    </div>
  );
}

export default App;
