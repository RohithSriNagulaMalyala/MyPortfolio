// import logo from './logo.svg';
// import './App.css';

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import Roles from "./pages/Roles and Responsibilities/roles";

function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <Layout/>
      <div classNa='container'>
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Roles/>
      <Contact/>
      </div>
      <div classNmae='footer mb-3 ms-3'>
      <Tada>
        <h4 className="text-center">
          Made by Rohith &copy; 2024
        </h4>
        </Tada>
      </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
