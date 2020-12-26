import React from 'react';

import './styles.css'

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/MailOutline';
import ClockIcon from '@material-ui/icons/QueryBuilder';
import MenuIcon from '@material-ui/icons/MenuRounded';

import ShopButton from '../../ShopButton';

const Header = () => {

  return(
    <header>
      <div className='bg-blue' >
        <div className='container'>

          <div className='row d-flex upper-header-row'>
            <a className='component d-flex'>
              <PhoneIcon style={{width:'18px', height:'18px'}} color='secondary'/>
              <p className='txt-white'>+569 44790124</p>
            </a>
            <a className='component d-flex'>
              <MailIcon style={{width:'18px', height:'18px'}} color='secondary'/>
              <p className='txt-white'>tintopolis@gmail.com</p>
            </a>
            <a className='component d-flex'>
              <ClockIcon style={{width:'18px', height:'18px'}} color='secondary'/>
              <p className='txt-white'>Lunes-Viernes: 9:00-18:00</p>
            </a>
          </div>
        </div>

        <div className='row bg-black d-flex main-header-row'>
          <img className='main-header-logo' src='https://tintopolis.cl/wp-content/uploads/2020/12/Tintopolis_logo_blanco-1024x487.png' />
          <ShopButton/>
          <div className='burger-menu-icon'>
            <MenuIcon/>
          </div>
        </div>

      </div>
    </header>
  )

}

export default Header;
