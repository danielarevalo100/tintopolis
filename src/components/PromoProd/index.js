import React from 'react';

/* styles */
import './styles.css'

const PromoProd = ( props ) => {
    return(
        <div className='row d-flex prom-container-title'>
            <div className='tinto-promo'>
                <h4>TINTOPOLIS</h4>
                <p>PROMO &gt;</p>
            </div>
            <div className='promo-title'>
                <h1>{props.title}</h1>
            </div>
        </div>       
    )
}

export default PromoProd