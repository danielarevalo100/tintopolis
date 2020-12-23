import React from 'react';

/*  styles */
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* components */
import Header from '../src/components/layout/Header';
import InfoBox from '../src/components/InfoBox';
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">

      <Header/> 
      <div className='main-container'>
        <img src='https://tintopolis.cl/wp-content/uploads/2020/12/logo.png'/>
      </div>
      <InfoBox title='NOSOTROS' desc='Somos una empresa dedicada al diseo e impresin digital de todo tipo de publicidad que se pueda imprimir.'/>
      <InfoBox title='SERVICIOS' desc='En un mercado tan competitivo la presentacion de tu empresa es un punto clave para alcanzar el exito y nuestros servicios te ayudarn a que tu empresa se destaque sobre las demas'/>
      
      <InfoBox title='PROMOCIONES' desc='Aprovecha nuestras promociones y obten mucho mas por menos te esperamos!'/>

      <Carousel>
        <div className='txt-white' style={{padding:'40px'}}>Tesing 1</div>
        <div className='txt-white' style={{padding:'40px'}} >Tesing 2</div>
        <div className='txt-white' style={{padding:'40px'}} >Tesing 3</div>
      </Carousel>
      
    </div>
  );
}

export default App;
