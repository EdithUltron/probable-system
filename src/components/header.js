import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';


export default function Header() {

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").classList.add("header-sticky");
        } else {
            document.getElementById("header").classList.remove("header-sticky");
        }
    }


    return (
        <header id='header' className='header'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/img/logo.png" className="d-inline-block align-top" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                            <Row>
                                <Col md={8}>
                                <Nav className="nav-menu">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav>
                                </Col>
                                <Col md={4}>
                                    <button className="btn btn-primary connectBtn">Connect Wallet</button>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}