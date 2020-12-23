import React from 'react';
import './styles.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShopButton =()=>{
    return(

    <div className='d-flex online-shop-button'>
        <p className=''>Tienda Online</p>
        <ShoppingCartIcon/>
    </div>

    )

}
export default ShopButton;
