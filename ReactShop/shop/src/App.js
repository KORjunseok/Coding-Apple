/* eslint-disable */

import { Component, useState } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import data from "./data";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {/* <Card shoes={shoes[0]} i={1}/>
          <Card shoes={shoes[1]} i={2}/>
          <Card shoes={shoes[2]} i={3}/> */}
         
         {
          shoes.map((a, i) => {
            return (
            <Card shoes={shoes[i]} i={i}/>
            )
          })
         }

          
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
