import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import { BlockquoteLeft, ChatLeftDotsFill, Github, Instagram, Link45deg, List, PersonFill, XLg, Youtube } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

export default function NavBarContent(props) {
    return (
        <>
            <Container fluid>
                <div className='position-fixed'>
                    <Button size="sm" className="btn-collapse-left-bar btn-warning text-muted" onClick={() => props.toggleCollapse()}> <List /> </Button>
                </div>
                <Row >
                    <Col className='pt-3 text-center'>
                        <div className='banner'> </div>
                    </Col>
                </Row>

                <Row >
                    <Col className='pt-3'>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <NavLink className='nav-link nav-link-left-bar text-nowrap' to="/home">
                                <PersonFill className='left-nav-icon' />
                                <p className='ms-3 left-nav-text'>Me</p>
                            </NavLink>
                            <Nav.Link className='nav-link nav-link-left-bar text-nowrap disabled' to="#">
                                <BlockquoteLeft className='left-nav-icon' />
                                <p className='ms-3 left-nav-text'>Blog</p>
                            </Nav.Link>
                            <NavLink className='nav-link nav-link-left-bar text-nowrap' to="/Youtube">
                                <Youtube className='left-nav-icon' />
                                <p className='ms-3 left-nav-text'>Youtube</p>
                            </NavLink>
                            <NavLink className='nav-link nav-link-left-bar text-nowrap' to="/Instagram">
                                <Instagram className='left-nav-icon' />
                                <p className='ms-3 left-nav-text'>Instagram</p>
                            </NavLink>
                            <NavLink className='nav-link nav-link-left-bar text-nowrap' to="/Github">
                                <Github className='left-nav-icon' />
                                <p className='ms-3 left-nav-text'>Github</p>
                            </NavLink>
                            <NavLink className='nav-link nav-link-left-bar text-nowrap' to="/Contact">
                                <ChatLeftDotsFill className='left-nav-icon' />
                                <p className='ms-3 left-nav-text'>Contact</p>
                            </NavLink>
                            
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
