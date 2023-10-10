import React, { Fragment } from 'react'
import { Bubbles } from './layout/bubbles';
import MetaData from './layout/metadata';
import cs_1 from '../images/carro_1.jpeg'
import cs_0 from '../images/carro_0.jpeg'
import cs_3 from '../images/carro_3.jpeg'
import cs_4 from '../images/carro_4.jpeg'
import cs_5 from '../images/carro_5.jpeg'
import cs_2 from '../images/carro_2.jpeg'


export const AboutUs = () => {
  return (
    <Fragment>
      <MetaData title="Contact us"></MetaData>
      <Fragment>
        <div className='fondoNosotros py-4'>
          
          <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'>
            <div className='row'>
            <div id='messageWelcome' className='col-12 col-md-12'>
              <div className='containMessage colorServiceWhite'>
                <h1 className='text-center'>Bienvenido!</h1>
                <h2 className='text-center'>International Driving Academy </h2>
                <h4 className='modern'>¡Tu viaje comienza aqui !</h4>
                <b><p> Somos un negocio familiar que ofrece sus servicios en los condados de Broward y Miami Dade,
                    Nuestro enfoque es proveer a nuestros estudiantes el acompañamieto y asesoria de la mas alta
                     calidad empezando por nuestros instructores quienes son profesionales 
                    dedicados a enseñar de todo su conocimiento y experiencia para convertir a nuestros 
                    estudiantes en conductores responsables  y ejemplares de por vida.
                </p>
                <p>We are  a family business serving in Broward and part of  Miami Dade counties. Our goal it is to provide to our students the most professional and quality services,
                  since we have the best instructors qualified to teach all of our students the knowledge and skills to become responsible and safe drivers for life.</p>
                  </b>
              </div>
            </div>
            <div id='carruselServicios' className='col-12'>
              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active " data-bs-interval="5000">
                    <img src={cs_0} class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item ">
                    <img src={cs_1} class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item ">
                    <img src={cs_2} class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item ">
                    <img src={cs_3} class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item ">
                    <img src={cs_4} class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item ">
                    <img src={cs_5} class="d-block w-100" alt="..."></img>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
            </div>
            <div className='col-2'></div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  )
}
