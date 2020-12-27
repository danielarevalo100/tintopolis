import React from 'react';

/* icons */
import PhoneIcon from '@material-ui/icons/Phone';
import MarkerIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import BlueLine from './BlueLine'

/* styles */
import './styles.css'
const Footer = () => {

  return(
    <footer>
      <div className='main-footer'>


        <div style={{position:'relative', maxWidth:'unset'}} className='container bg-blue'>
          <div className='blue-line-container-top'><BlueLine/></div>
          <div className='row d-flex'>

            <div className='col-4'>
              <h3 className='txt-white'>
                Contacto
              </h3>
              <div className='d-flex'>
                <PhoneIcon/>
                <p>+569 44790124</p>
              </div>
            </div>

            <div className='col-4' >
              <h3 className='txt-white'>
                Ubicanos
              </h3>
              <div className='d-flex'>
                <MarkerIcon/>
                <p>Badajoz 100, of 502 imprenta</p>
              </div>
            </div >

            <div className='col-4' >
              <h3 className='txt-white'>
                Siguenos
              </h3>
              <div className='d-flex'>
                <FacebookIcon fontSize='large'/>
                <InstagramIcon fontSize='large'/>
              </div>
            </div >

          </div>

          <div className='blue-line-container-bottom'><BlueLine/></div>
        </div>

        {/*<div style={{marginTop:'-35px'}} className='pink-line-container-top'><BlueLine/></div>*/}

        <div style={{position:'relative', maxWidth:'unset'}} className='container bg-pink'>
          <div style={{paddingTop:'2rem'}} className='row'>
            <img className='footer-logo' src='https://tintopolis.cl/wp-content/uploads/2020/12/Tintopolis_logo_blanco-1024x487.png' />
            <div className='pink-line-container-bottom'><BlueLine/></div>
          </div>
        </div>
        <div className='footer-bottom-row bg-black'>
          <p className='txt-center' style={{color:'#333333'}}>Powered by Daniel Arevalo | Designed by Pulpo Creativo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
