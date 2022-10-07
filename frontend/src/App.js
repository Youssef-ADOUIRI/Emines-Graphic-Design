import "./App.css";
import ContentRec from "./components/ContentRec";
import "./components/Navbar"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ContentRec/>
      </header>
    </div>
  );
}

export default App;
