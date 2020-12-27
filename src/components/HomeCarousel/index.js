import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

const HomeCarousel =()=>{

    return(

      <Carousel centerMode centerSlidePercentage={window.innerWidth > 720? window.innerWidth > 1000?20:40:100} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div style={{padding:'20px'}}>
          <img src="https://tintopolis.cl/wp-content/uploads/2020/12/05_Pendon-60x200-1.jpg"/>
        </div>

        <div style={{padding:'20px'}}>
          <img src="https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_01.jpg"/>
        </div>

        <div style={{padding:'20px'}}>
          <img src="https://tintopolis.cl/wp-content/uploads/2020/12/IMANES_cuadrados.jpg"/>
        </div>  

        <div style={{padding:'20px'}}>
          <img src="https://tintopolis.cl/wp-content/uploads/2020/12/03_PX-1.jpg"/>
        </div>        

        <div style={{padding:'20px'}}>
          <img src="https://tintopolis.cl/wp-content/uploads/2020/12/08_totem.jpg"/>
        </div>        

        <div style={{padding:'20px'}}>
          <img src="https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_03_Plateado.jpg"/>
        </div>

      </Carousel>
    )
}

export default HomeCarousel
