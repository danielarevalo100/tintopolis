import React from 'react';
import './styles.css'

const InfoProm =( props ) => {
    return(
        <div className='prom-container'>
            <div className='container'>
                <img src={props.img}/>
            </div>
            <div className='container' style={{color:'#54595F', fontWeight:'600', marginBottom:'2px'}}>
                <h4><a>{props.title}</a></h4>
            </div>
            <div className='container' style={{color:'#777', lineHeight:'2.2rem'}}>
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
            </div>
            <div className='container' style={{fontWeight:'500', paddingTop:'3px'}}>
                <a href='/' style={{color:'#00AFEC', fontSize:'13px', lineHeight:'4rem'}}>Leer mas</a>
            </div>
        </div>
    )
}

export default InfoProm
