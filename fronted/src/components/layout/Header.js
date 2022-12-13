import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <Fragment>
            <div className='d-flex justify-content-center bg-dark'>
                <a className='text-white'>
                    <span className="align-middle vertical-alignment"><i class="bi bi-whatsapp"></i> Contact us</span>
                </a>
            </div>
        </Fragment>
    )
}
