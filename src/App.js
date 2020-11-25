import React from "react";
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {Container} from "react-bootstrap";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Container className="App">
        <Header />
        <p>Welcome to my home page! Here you'll find some useful information about me, but mostly a whole lot of code that serves very little purpose other than entertaining me while I build it.</p>
        <Projects />
        <Footer />
    </Container>
  );
}

export default App;
