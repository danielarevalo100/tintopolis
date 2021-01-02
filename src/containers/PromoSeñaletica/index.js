import React, {useState, useEffect} from 'react';

/*Styles*/
import './styles.css'

/*Components*/
import InfoProm from '../../components/InfoProm';
import PromoProd from '../../components/PromoProd';

const PromoSeñaletica = ( props ) => {

    return(
      <div className='app'>
        <div className='ps-bg'>
          <div className='stickers'>
            <InfoProm img='https://tintopolis.cl/wp-content/uploads/2020/12/PROMOS_S-3.png'/>
            <PromoProd title='Promo Señaletica'/>
            <div className='prom-separator'>
              <InfoProm desc='Pack de 4 señaléticas.<br>Impresas en Adhesivo PVC mate o brillante sobre Sintra de 3mm.<br>Medidas: 15×20 cm'/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PromoSeñaletica