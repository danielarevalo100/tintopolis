import React, {useState, useEffect} from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
/*  styles */
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* components */
import InfoBox from '../../components/InfoBox';
import HomeCarousel from '../../components/HomeCarousel';
import ShopButton from '../../components/ShopButton';
import InfoProm from '../../components/InfoProm';

/* managers */
import { API_posts } from '../../managers/Api'

const Home = ( props ) => {

  const [ posts, setPosts ] = useState([]);

  useEffect( async () => {
    const response = await API_posts.fetch( [297, 301, 348] );
    setPosts(response);
  }, [] )

  return (
    <div className="App">

      <div className='main-container'>
        <div className='container flex-center-center d-flex'>
          <img src='https://tintopolis.cl/wp-content/uploads/2020/12/logo.png'/>
          <img src='https://tintopolis.cl/wp-content/uploads/2020/12/ROLAND.png'/>
        </div>
      </div>
      <InfoBox title='NOSOTROS' desc='Somos una empresa dedicada al diseo e impresin digital de todo tipo de publicidad que se pueda imprimir.' path={`/nosotros/`}/>
      <InfoBox title='SERVICIOS' desc='En un mercado tan competitivo la presentacion de tu empresa es un punto clave para alcanzar el exito y nuestros servicios te ayudarn a que tu empresa se destaque sobre las demas' path={`/servicios/`}/>

      <HomeCarousel/>
      <div style={{height:'3rem'}}></div>
      <div className='black-bar' >
        <div className='bg-black' style={{width:'100%', padding:'2rem'}}>
          <div className='container after-arrow'>
            <div className='d-flex'>
                <p className='txt-white txt-center' style={{lineHeight:'1.8rem'}}>Realizamos envíos a todo Chile. En RM despacho GRATIS por compras superiores a $40.000</p>
                <h2 className='txt-yellow txt-center' style={{fontSize:'1.3rem', paddingTop:'2px'}}>TODOS NUESTROS PRECIOS INCLUYEN IVA</h2>
                <div style={{marginTop:'1rem'}}>
                  <ShopButton/>
                </div>
            </div>
          </div>
        </div>

        <div className='bg-gray after-arrow-section'>
          <div className='container'>
            <p className='txt-center' style={{letterSpacing:'1rem'}}>
              TENEMOS UN CHAT ONLINE A TU DISCPOSICION
            </p>
          </div>
        </div>
      </div>


      <InfoBox title='PROMOCIONES' desc='Aprovecha nuestras promociones y obten mucho mas por menos te esperamos!' path={`/promociones/`}/>
      <div className='prom-section container d-flex'>
        {posts.map(( post ) => <InfoProm key={post.id} img={post.featured_image_src} title={post.title?.rendered || 'Tintopolis'} desc={post.excerpt?.rendered || 'Tintopolis Tu mejor opcion'}/>)}
      </div>

    </div>
  );
}
export default Home;
