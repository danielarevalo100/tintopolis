import React from 'react';

/*  styles */
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* components */
import Header from '../src/components/layout/Header';
import InfoBox from '../src/components/InfoBox';
import HomeCarousel from '../src/components/HomeCarousel';

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

      <div className='bg-black' style={{width:'100%', padding:'2rem', fontSize:'1.4rem'}}>
        <div className='container'>
          <p className='txt-white txt-center' style={{lineHeight:'1.8rem'}}>Realizamos envíos a todo Chile. En RM despacho GRATIS por compras superiores a $40.000</p>
          <h2 className='txt-yellow txt-center' style={{fontSize:'1.3rem', paddingTop:'2px'}}>TODOS NUESTROS PRECIOS INCLUYEN IVA</h2>
        </div>
      </div>

      <InfoBox title='PROMOCIONES' desc='Aprovecha nuestras promociones y obten mucho mas por menos te esperamos!'/>


      
    </div>
  );
}

export default App;
