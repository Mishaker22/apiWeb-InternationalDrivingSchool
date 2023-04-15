import React, { Fragment } from 'react'
import { Bubbles } from './layout/bubbles';
import MetaData from './layout/metadata';
import cs_1 from '../images/carro_1.jpg'
//import cs_2 from '../../images/carro_2.jpg'
import cs_3 from '../images/carro_3.jpg'
import cs_4 from '../images/carro_4.jpg'
import cs_5 from '../images/carro_5.jpeg'
import cs_6 from '../images/carro_6.jpeg'


export const AboutUs = () => {
  return (
    <Fragment>
      <MetaData title="Contact us"></MetaData>
      <Bubbles>
      </Bubbles>
      <Fragment>
        <div className='row colorService border border-3 border-dark'>
          <div id='carruselServicios' className='col-12 col-md-7 '>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active " data-bs-interval="5000">
                  <img src={cs_6} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item ">
                  <img src={cs_1} class="d-block w-100" alt="..."></img>
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
          <div id='messageWelcome' className='col-12 col-md-5 '>
            <div className='containMessage'>
              <h2>Welcome to International Driving School!</h2>
              <h4>Building safe drivers</h4>
              <p>We are a family business, serving Broward and Miami Dade counties. We specialize in providing the best and guaranteed service,
                since we have the best professional instructors, trained, certified and above all patient.
                Each of our students will learn all the knowledge and skills to become responsible and safe drivers for life.</p>
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  )
}
