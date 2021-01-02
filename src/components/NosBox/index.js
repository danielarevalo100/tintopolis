import React from 'react';

/* styles */
import './styles.css'

const NosBox = ( props ) => (
        <section className='nostrs-container'>
            <div className='nostrs-container-info container'>
                <h2 className='txt-blue'>{props.title}</h2>
                <p dangerouslySetInnerHTML={{__html: props.desc }}></p>
            </div>
        </section>
    )


export default NosBox
