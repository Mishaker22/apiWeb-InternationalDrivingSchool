import './App.css';
import React from 'react';
import { NavBar } from './components/layout/NavBar';
import { Header } from './components/layout/Header';
import { Inicio } from './components/Inicio';
import { Footer } from './components/layout/Footer';
import {Services} from './components/services/services'
import { ServiceDetails } from './components/services/service_details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/admin/dashboard';
import { ServiceList } from './components/admin/serviceList';
import { PreinscriptionList } from './components/admin/preinscription_list';
import { Login } from './components/users/login';
import { Register } from './components/users/register';


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
          <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/admin/listServices' element={<ServiceList></ServiceList>}></Route>
          <Route path='/admin/listPreinscriptions' element={<PreinscriptionList></PreinscriptionList>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
