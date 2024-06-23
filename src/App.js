import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Coding from "./components/Coding Profiles/Coding";
import Portfolio from "./components/Portfolio/Portfolio";
import Tech from "./components/Technical Content/Tech";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Coding /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Portfolio /><br /><br /><br />
      <Tech /><br />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
