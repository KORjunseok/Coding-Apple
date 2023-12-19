/* eslint-disable */

import { createContext, Component, useState, useEffect } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import data from "./data";
import Detail from "./pages/detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cart from './pages/Cart.js'

let Context1 = createContext()

function App() {

  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])

  // let obj = {name : 'kim'}
  
  // localStorage.setItem('data', JSON.stringify(obj))
  // let 꺼낸거 = localStorage.getItem('data')
  // console.log(꺼낸거);

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12])
  let nevigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                nevigate("/");
              }}
            >
              Home
            </Nav.Link>
            {/* <Link to ="/">홈</Link> */}
            <Nav.Link
              onClick={() => {
                nevigate("/detail");
              }}
            >
              detail
            </Nav.Link>
            {/* <Link to = "/detail">상세페이지</Link> */}
            {/* <Nav.Link onClick={ () => {
              nevigate('/detail')
            }}>Cart</Nav.Link> */}
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
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      
                      let copy = [...shoes, ...결과.data]
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패했어요");
                    });
                }}
              >
                더보기
              </button>
            </div>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path = "/cart" element = {<Cart></Cart> } />


        <Route path="/about" element={<About />}>
          <Route path="member" element={<div> 난 멤버임 </div>} />
          <Route path="location" element={<div> 난 위치정보임 </div>} />
        </Route>

        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
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
