import React, { Fragment, useRef } from 'react'
import MetaData from './layout/metadata';
import emailjs from '@emailjs/browser'
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

export const Contact_us = () => {

    const navigate = useNavigate();
    const form = useRef();
    const alert = useAlert();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uuhtol7', 'template_09yxh68', form.current, 'V35M4xlKPfJlASGPe')
      .then((result) => {
          console.log(result.text);
          navigate("/")
          alert.success("Message Sent")
      }, (error) => {
          console.log(error.text);
          alert.error("No se pudo enviar")
      });
  };

    return (
        <Fragment>
            <MetaData title="Contact us"></MetaData>
            <div className='backgroundCall '>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className=' text-animado my-5 px-3'>
                        <p className='quantify text-danger'> Contact</p>
                        <ul className='ul-t'>
                            <li className='cream'>Us</li>
                            <li className='cream'>You</li>
                        </ul>
                    </div>
                </div>
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className='col-6 mt-4'>
                        <div className="card rounded-3 m-1 text-black fondoFormu mb-5">
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <div class="card-body">
                                        <span className='text-white'><h4><i class="bi bi-headset"></i> Call us now!</h4></span>
                                        <hr></hr>
                                        <h6 className='text-center text-white mb-5'><b>English | Spanish</b> (305)-491-2288</h6>
                                        <span className='text-white'><h4><i class="bi bi-envelope-at"></i> Email</h4></span>
                                        <hr></hr>
                                        <p className='text-center text-white'>Interdrivingschool <br></br> @hotmail.com</p>
                                    </div>
                                </div>
                                <div class="col-md-8  cardTransparentTwo p-3">
                                    <h6 className='cafe text-white'><b>Any concerns or questions do not hesitate to contact us</b></h6>
                                    <hr></hr>
                                    <div>
                                        <div className='row g-0'>
                                            <div className='col-12'>
                                                <form ref={form} onSubmit={sendEmail}>
                                                    <div class="row pt-1">
                                                        <div className='col-md-6'>
                                                            <div class='formu mb-3'>
                                                                <input type="text" id="name_field" name='user_name' required="required" />
                                                                <span>Name</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='formu mb-3'>
                                                                <input type="text" id="lastName_field" name='user_lastname' required="required" />
                                                                <span>Last Name</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <div class='formu mb-3'>
                                                                <input type="text" id="email_field" name='user_email' required="required" />
                                                                <span>Email</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div class='formu mb-3'>
                                                                <input type="text" id="phone_field" name='user_telefono' required="required" />
                                                                <span>Phone</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='formu mb-2'>
                                                                <textarea name="user_message" required="required"></textarea>
                                                                <span>Message</span>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-outline-danger text-white mt-4 w-100"
                                                                id='send_btn'>
                                                                Send
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
