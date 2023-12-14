/* eslint-disable */

import { Component, useState } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import data from "./data";
import Detail from "./detail";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  let [detail] = useState(Detail)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Link to ="/">홈</Link> */}
            <Nav.Link href="/detail">detail</Nav.Link>
            {/* <Link to = "/detail">상세페이지</Link> */}
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
            </div>
          }
        />

        <Route path="/detail" element={<div> {detail}</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
