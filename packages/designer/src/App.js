import React, { Component } from "react";
import { Container, Row, Col, Navbar, NavbarBrand, Button } from "reactstrap";
import { Inject, cmfConnect } from "@talend/react-cmf";
import "./App.css";
import { getReactElement } from "./components";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            {getReactElement(this.props.left)}
          </Col>
          <Col xs="8">
            {getReactElement(this.props.right)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default cmfConnect({})(App);
