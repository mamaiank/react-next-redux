import React, { Component } from "react";
import Head from "next/head";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

export default class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{this.props.titleWeb}</title>
                </Head>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="mr-auto">
                <Link to="/">Home</Link>
              </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </React.Fragment>
        );
    }
}

Layout.defaultProps = {
    titleWeb: 'React Next Redux',
}