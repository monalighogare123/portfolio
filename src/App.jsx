import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed, e.g., <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
