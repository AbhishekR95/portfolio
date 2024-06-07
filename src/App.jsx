import "./App.css";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import ProjectDisplay from "./Pages/ProjectDisplay";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
