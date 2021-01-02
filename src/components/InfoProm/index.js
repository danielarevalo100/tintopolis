import React from 'react';
import { Link } from 'react-router-dom'
/* styles */
import './styles.css'

const InfoProm = ( props ) => {
  return(
    <div className='prom-container'>
      <div className='container'>
        <img src={props.img}/>
      </div>
      <div className='container' style={{color:'#54595F', fontWeight:'600', marginBottom:'2px'}}>
        <h4><Link>{props.title}</Link></h4>
      </div>
      <div className='container' style={{color:'#777', lineHeight:'2.2rem'}}>
        <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
      </div>
      {!props.hideReadMore && (<div className='container' style={{fontWeight:'500', paddingTop:'3px'}}>
            <Link to={props.path} style={{color:'#00AFEC', fontSize:'13px', lineHeight:'4rem'}}>Leer mas</Link>
      </div>)
      }
    </div>
  )
}

export default InfoProm
