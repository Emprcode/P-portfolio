import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <Navbar bg="none" expand="md">
      <Container className="mt-3">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold gap-3 d-flex justify-content-center align-items-center">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact-address">
              <div variant="none" className="button fw-bold">
                {" "}
                Say Hello
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
