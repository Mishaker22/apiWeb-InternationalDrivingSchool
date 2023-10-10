import React from 'react'

export const MaquinaTitle = ({title}) => {
    return (
        <div className='container container-fluid'>
            <div className='containText border border-danger my-4 '>
                <h1>${title}<span>&#160;</span></h1>
            </div>
        </div>
    )
}
