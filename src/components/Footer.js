import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="theme-bg">
            <Container>
                <Row className='flex-column-reverse flex-sm-column-reverse flex-md-row'>
                    <Col className="py-3 d-block d-md-flex align-items-center" md={8}>
                        <p className='cpy'>Copyright Ⓒ Name 2022</p>
                    </Col>
                    <Col className="py-3" md={4}>
                        <ul className="social-icons">
                            <li>
                                <a href='#'><AiOutlineInstagram className='footer-ic' /></a>
                                <a href='#'><TbWorld className='footer-ic' /></a>
                                <a href='#'><AiOutlineTwitter className='footer-ic' /></a>
                                <a href='#'><AiFillYoutube className="footer-ic" /></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}