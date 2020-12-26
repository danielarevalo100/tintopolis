import React from 'react';

/*  styles */
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* components */
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import InfoBox from '../src/components/InfoBox';
import HomeCarousel from '../src/components/HomeCarousel';
import ShopButton from '../src/components/ShopButton';

function App() {
  return (
    <div className="App">

      <Header/> 
      <div className='main-container'>
        <img src='https://tintopolis.cl/wp-content/uploads/2020/12/logo.png'/>
      </div>
      <InfoBox title='NOSOTROS' desc='Somos una empresa dedicada al diseo e impresin digital de todo tipo de publicidad que se pueda imprimir.'/>
      <InfoBox title='SERVICIOS' desc='En un mercado tan competitivo la presentacion de tu empresa es un punto clave para alcanzar el exito y nuestros servicios te ayudarn a que tu empresa se destaque sobre las demas'/>

      <HomeCarousel/>
      <div style={{height:'3rem'}}></div>
      <div className='bg-black' style={{width:'100%', padding:'2rem', fontSize:'1.4rem'}}>
        <div className='container after-arrow'>
          <p className='txt-white txt-center' style={{lineHeight:'1.8rem'}}>Realizamos envíos a todo Chile. En RM despacho GRATIS por compras superiores a $40.000</p>
          <h2 className='txt-yellow txt-center' style={{fontSize:'1.3rem', paddingTop:'2px'}}>TODOS NUESTROS PRECIOS INCLUYEN IVA</h2>
          <div style={{marginTop:'1rem'}}>
            <ShopButton/>
          </div>
        </div>
      </div>
      <div className='bg-gray after-arrow-section'>
        <div className='container'>
          <p className='txt-center' style={{fontSize:'1rem', letterSpacing:'.25rem'}}>
            TENEMOS UN CHAT ONLINE A TU DISCPOSICION
          </p>
        </div>
      </div>
      <InfoBox title='PROMOCIONES' desc='Aprovecha nuestras promociones y obten mucho mas por menos te esperamos!'/>
      <Footer/>


      
    </div>
  );
}

export default App;
