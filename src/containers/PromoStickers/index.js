import React, {useState, useEffect} from 'react';

/*Styles*/
import './styles.css'

/*Components*/
import InfoProm from '../../components/InfoProm';
import PromoProd from '../../components/PromoProd';

const PromoStickers = ( props ) => {

    return(
      <div className='app'>
        <div className='ps-bg'>
          <div className='stickers'>
            <InfoProm img='https://tintopolis.cl/wp-content/uploads/2020/12/PROMOS_S-2.png'/>
            <PromoProd title='Promo Stickers'/>
            <div className='prom-separator'>
              <InfoProm desc='1000 Stickers 5x5cm en adhesivo PVC blanco impresos con una excelente calidad, resistentes a altas y bajas temperaturas. Condiciones de la promoción: Solo stickers circulares o rectangulares.'/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PromoStickers