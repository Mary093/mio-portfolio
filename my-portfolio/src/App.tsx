import './App.css';
import './index.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Roadmap from "./pages/Roadmap";


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
          <h2>Caricamento...</h2>
      </div>
    );
  }

  return (
    <div className={`app-container ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
} 
export default App;