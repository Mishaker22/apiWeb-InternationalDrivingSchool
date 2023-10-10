import React, { Fragment } from 'react'
export const Header = () => {
    return (
        <Fragment>
            <div className='d-flex justify-content-center bg-dark'>
                <span>
                    <a href="https://api.whatsapp.com/send?phone=%2B13054912288&text=Hello%21+I+want+more+information+about+driving+lessons%0AHola%21+Quiero+mas+informacion+sobre+las+clases+de+conduccion"><i class="bi bi-whatsapp"></i> Contact us</a>
                </span>
            </div>
        </Fragment>
    )
}
