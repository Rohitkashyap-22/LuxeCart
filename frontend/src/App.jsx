import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <h1>Ecommerce App - Luxecart</h1>
      <p>Everything, All at One Place !</p>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
