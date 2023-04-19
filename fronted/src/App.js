import './App.css';
import React, { useEffect } from 'react';
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
import { Profile } from './components/users/profile';
import store from './store';
import { loadUser } from './actions/user_actions';
import ProtectedRoutes from './routes/Protected_routes';
import { UpdateProfile } from './components/users/updateProfile';
import { UpdatePassword } from './components/users/updatePassword';
import { ForgotPassword } from './components/users/forgotPassword';
import { ResetPassword } from './components/users/resetPassword';
import { Contact_us } from './components/contact_us';
import { AboutUs } from './components/abouts_us';
import { NewService } from './components/admin/service_new';
import { UpdateService } from './components/admin/updateService';
import { Subcategorie_new } from './components/admin/subcategorie_new';
import { UpdateProduct } from './components/admin/updateProduct';
import { UserList } from './components/admin/UserList';
import { UpdateUser } from './components/admin/updateUser';
import { Preinscription } from './components/preinscriptions/preinscription';


function App() {
  useEffect (()=>{
    store.dispatch(loadUser())
  },[])
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
          <Route path='/contact_us' element={<Contact_us></Contact_us>}></Route>
          <Route path='/abouts_us' element={<AboutUs></AboutUs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/MyProfile' element={<Profile></Profile>}></Route>
          <Route path='/MyProfile/update' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='/MyProfile/updatePassword' element={<UpdatePassword></UpdatePassword>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path='/resetPassword/:token' element={<ResetPassword></ResetPassword>}></Route>
          <Route path='/preinscription/:id' element={<Preinscription></Preinscription>}></Route>

          {/*Rutas Protegida*/}
          <Route path='/admin/dashboard' element={<ProtectedRoutes isAdmin={true}><Dashboard></Dashboard></ProtectedRoutes>}></Route>
          <Route path='/admin/listServices' element={<ProtectedRoutes isAdmin={true}><ServiceList></ServiceList></ProtectedRoutes>}></Route>
          <Route path='/admin/listPreinscriptions' element={<ProtectedRoutes isAdmin={true}><PreinscriptionList></PreinscriptionList></ProtectedRoutes>}></Route>
          <Route path='/admin/newService' element={<ProtectedRoutes isAdmin={true}><NewService></NewService></ProtectedRoutes>}></Route>
          <Route path='/admin/updateService/:id'element={<ProtectedRoutes isAdmin={true}><UpdateService></UpdateService></ProtectedRoutes>}></Route>
          <Route path='/admin/createSubcategorie/:id'element={<ProtectedRoutes isAdmin={true}><Subcategorie_new></Subcategorie_new></ProtectedRoutes>}></Route>
          <Route path='/admin/updateProduct'element={<ProtectedRoutes isAdmin={true}><UpdateProduct></UpdateProduct></ProtectedRoutes>}></Route>
          <Route path='/admin/listUsers' element={<ProtectedRoutes isAdmin={true}><UserList></UserList></ProtectedRoutes>}></Route>
          <Route path='/admin/updateUser/:id' element={<ProtectedRoutes isAdmin={true}><UpdateUser></UpdateUser></ProtectedRoutes>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
