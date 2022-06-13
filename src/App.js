import './App.css';
import React from 'react';
import {Nav,Navbar,Container} from "react-bootstrap";
import {Routes,Route,Link} from "react-router-dom";
import GetData from './Userdata/getData';
import StoreData from './Userdata/storeData';

function App() {
  return (
    <>
       <h1> main page</h1>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">.tnpLab</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/">Display</Link></Nav.Link>
      <Nav.Link><Link to="/register">Register</Link></Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<GetData />} />
      <Route path="/register" element={<StoreData />} />
    </Routes>
    </>
  );
}

export default App;
