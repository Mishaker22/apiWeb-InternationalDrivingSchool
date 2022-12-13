import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavBar } from './components/layout/NavBar';
import { Header } from './components/layout/Header';
import { Inicio } from './components/Inicio';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <NavBar></NavBar>
    <Inicio></Inicio>
    <Footer></Footer>
    </div>
  );
}

export default App;
