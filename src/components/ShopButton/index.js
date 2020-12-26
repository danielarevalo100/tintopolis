import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './styles.css'

const ShopButton = ( props ) => {

  return(
    <div className='d-flex online-shop-button'>
      <p className=''>Tienda Online</p>
      <ShoppingCartIcon/>
    </div>
  )

}
export default ShopButton;
