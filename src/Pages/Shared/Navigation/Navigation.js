import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Container, Navbar } from 'react-bootstrap';
import { HashLink, NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            < Navbar className="nav-color bg-dark bg-gradient" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container style={{ color: 'dark' }}>
                    <Navbar.Brand href="/home">Ear Buddy Pro</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="header justify-content-end">
                        <div class="btn-group me-3">
                            <button type="button" class="btn btn-primary"> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/home#home">Home</NavHashLink></button>
                        </div>
                        <button type="button" class="btn btn-primary me-3"> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/services">Products</NavHashLink></button>
                        <button type="button" class="btn btn-primary me-3"> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/contactUs">Contact Us</NavHashLink></button>
                        <button type="button" class="btn btn-primary me-3"> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/aboutUs">About Us</NavHashLink></button>
                        {user?.displayName && <button type="button" class="btn btn-primary me-3"> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/dashboard">Dashboard</NavHashLink></button>}
                        {user?.displayName && <Navbar.Text>
                            Signed in as: <a className="me-3" href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        {
                            user?.displayName ?
                                <button onClick={logout} className="btn btn-light">LogOut</button> :
                                <button type="button" class="btn btn-light"> <NavHashLink style={{ color: 'dark', textDecoration: 'none' }} activeStyle={{ color: 'dark' }} to="/login">Login</NavHashLink></button>
                        }
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </div >
    );
};

export default Navigation;