import React, {useState} from 'react';
import { 
  Link
} from 'react-router-dom'

import './styles.css'

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/MailOutline';
import ClockIcon from '@material-ui/icons/QueryBuilder';
import MenuIcon from '@material-ui/icons/MenuRounded';

import ShopButton from '../../ShopButton';

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick =  () => setOpenMenu(!openMenu)
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

        <div className='row bg-black flex-center-center d-flex main-header-row'>
          <div style={{maxWidth:'1140px'}} className='container d-flex'>
            <img className='main-header-logo' src='https://tintopolis.cl/wp-content/uploads/2020/12/Tintopolis_logo_blanco-1024x487.png' />
            <ShopButton/>
            <div onClick={handleMenuClick} className='burger-menu-icon'>
              <MenuIcon/>
            </div>
            <nav>
              <ul>
                <li className='active'><Link to={{pathname:'/'}} >Inicio</Link></li>
                <li><Link to={{pathname:'/nosotros'}} >Nosotros</Link></li>
                <li><Link to={{pathname:'/promociones'}} >Promociones</Link></li>
                <li><Link to={{pathname:'/servicios'}} >Servicios</Link></li>
                <li>Contacto</li>
              </ul>
            </nav>
          </div>

        </div>

      </div>
      {window.innerHeight <= 923 && (
        <div className={`bg-pink mobile-menu ${openMenu ? 'opened' : ''}`}>
          <ul>
            <li onClick={() => setOpenMenu(false)} className='active'><Link to={{pathname:'/'}} >Inicio</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link to={{pathname:'/nosotros'}} >Nosotros</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link to={{pathname:'/promociones'}} >Promociones</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link to={{pathname:'/servicios'}} >Servicios</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link>Contacto</Link></li>
          </ul>
        </div>
      )}
    </header>
  )

}

export default Header;
