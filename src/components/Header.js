import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


export const Header = () => {
  return (
    <Navbar bg="none" expand="md">
      <Container className='mt-3'>
        <Navbar.Brand href="#home" >
          <img src={logo} alt="logo" width="80px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold gap-3">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
         <Button variant='none' href="#contact-address" className='btn btn-outline-primary rounded fw-bold'> Say Hello</Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
