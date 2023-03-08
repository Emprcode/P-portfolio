import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Container className="mt-5">
    <Row className="text-center mb-3">
      <h3 className="fw-bold"> Get in touch </h3>
      <p className="mt-4 h6">
      My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
    </Row>
    <Row className=" p-5 mt-3 " id="contact-address">
        <Col className='d-flex justify-content-center align-items-center gap-5 h1'>
    <a href="https://www.linkedin.com/in/naryal/" target="_blank"  rel="noreferrer">
            <i className="fa-brands fa-linkedin text-dark"></i>
          </a>
          <a href="mailto:narayanaryal.code@gmail.com" target="_blank"  rel="noreferrer">
            <i className="fa-solid fa-envelope text-dark"></i>
          </a>
          <a href="https://github.com/Emprcode" target="_blank"  rel="noreferrer">
          <i className="fa-brands fa-github text-dark"></i>
          </a>
        
          </Col>
    </Row>
  </Container>
  )
}
