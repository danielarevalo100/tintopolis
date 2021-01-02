import React, {useState, useEffect} from 'react';

/*Styles*/
import './styles.css'

/*Components*/
import InfoProm from '../../components/InfoProm';
import PromoProd from '../../components/PromoProd';

const LogoStickers = ( props ) => {

    return(
      <div className='app'>
        <div className='ps-bg'>
          <div className='stickers'>
            <InfoProm img='https://tintopolis.cl/wp-content/uploads/2020/12/PROMOS_LS-1.png'/>
            <PromoProd title='Logo + Stickers'/>
            <div className='prom-separator'>
              <InfoProm desc='Diseñamos tu logo de manera simple y además te entregamos los archivos editables en varios formatos, súmale 1000 Stickers 5x5cm en adhesivo PVC blanco impresos con una excelente calidad, resistentes a altas y bajas temperaturas.<br>Condiciones de la promoción:<br>Solo stickers circulares o rectangulares.'/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LogoStickers