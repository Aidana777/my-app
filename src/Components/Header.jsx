import React, { Component } from 'react'
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Button
} from 'react-bootstrap'
import { Router } from 'react-router'
import Logo from './logo.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={Logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt='logo'
                            />
                            Book Shop
                        </Navbar.Brand>
                        <Navbar.Toggle aria-colors='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/about'>About</Nav.Link>
                                <Nav.Link href='/contact'>Contact</Nav.Link>
                                <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                              <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <switch>
                        <Route expact pa/>
                    </switch>
                </Router>
            </>
        )
    }
}

