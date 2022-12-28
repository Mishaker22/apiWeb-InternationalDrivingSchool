import './App.css';
import React from 'react';
import { NavBar } from './components/layout/NavBar';
import { Header } from './components/layout/Header';
import { Inicio } from './components/Inicio';
import { Footer } from './components/layout/Footer';
import {Services} from './components/services/services'
import { ServiceDetails } from './components/services/service_details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/home' element={<Inicio></Inicio>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/service/:id' element={<ServiceDetails/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
