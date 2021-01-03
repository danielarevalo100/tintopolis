import React from 'react';
import { 
  Link
} from 'react-router-dom'

import './styles.css'

const InfoBox = ( props ) => {

  return(
    <div className='info-container'>
      <div className='container'>
        <h4 className='txt-blue info-container-title'>{props.title}</h4>
        <div className='info-container-info'>
          <p>{props.desc}<br/><Link to={props.path} style={{color:'#CC3366', lineHeight:'3rem', fontWeight:'bolder'}}>+ info</Link></p>
        </div>
      </div>
    </div>
  )

}
export default InfoBox
