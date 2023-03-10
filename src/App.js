import { Container } from "react-bootstrap";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />

        <Education />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
