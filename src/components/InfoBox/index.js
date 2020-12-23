import React from 'react';
import './styles.css'

const InfoBox = ( props ) => {

  return(
    <div className='info-container' style={{width:'100%', padding:'1.5rem'}}>
      <div className='container'>
        <h4 className='txt-blue info-container-title'>{props.title}</h4>
        <div className='info-container-info'>
          <p>{props.desc}<br/><a href='/'>+info</a></p>
        </div>
      </div>
    </div>
  )

}
export default InfoBox
