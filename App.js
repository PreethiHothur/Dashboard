import logo from "./logo.svg";
import "./App.css";
import Navbare from "./Components/Navbar";
import Analytics from "./Components/Analytics";
import Portfolio from "./Components/Portfolio";
import Agents from "./Components/Agentstable";
import Footer from "./Components/Footer";
import Tasklist from "./Components/Tasklist/Tasklist";
import Orders from "./Components/Orders";

function App() {
  return (
    <div className="App ">
      <Navbare />
      <Analytics />
      <Portfolio />
      <Agents />
      <Orders />
      <Footer />
    </div>
  );
}

export default App;
