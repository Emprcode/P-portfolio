import { Container } from "react-bootstrap";
import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
