import React from 'react';

/* styles */
import './styles.css'

const ProductList = ( props ) => {

    return(
        <div className='products txt-center'>
            <img src={props.img}/>
            <h3>{props.product}</h3>
            <p>$ {props.price}</p>
        </div>
    )
}

export default ProductList