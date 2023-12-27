import "./App.css";
import { Navbar } from "./components/Navbar";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
