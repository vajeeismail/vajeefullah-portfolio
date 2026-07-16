import { useEffect, useState } from "react";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./pages/Portfolio/Portfolio";

import "./components/Intro/Intro.css";
import "./components/Navbar/Navbar.css";
import "./pages/Portfolio/Portfolio.css";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {

    const fade = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 4000);

    return () => {
      clearTimeout(fade);
      clearTimeout(timer);
    };

  }, []);

  if (!showPortfolio) {
    return <Intro fadeOut={fadeOut} />;
  }

  return (
    <>
      <Navbar />
      <Portfolio />
    </>
  );
}

export default App;