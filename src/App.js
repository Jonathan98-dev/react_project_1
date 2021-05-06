import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>

      <div className="main">
        <Home />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
