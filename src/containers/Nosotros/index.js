import React from 'react';

/*Styles*/
import './styles.css'

/*components*/
import NosBox from '../../components/NosBox';

const Nosotros = ( props ) => {
    return(
        <div className='app'>
            <div className='impre-container'>
                <div className='container txt-center serv-imp'>
                    <h2>SERVICIO DE</h2>
                    <h3>IMPRESION</h3>
                </div>
                <div className='container flex-center-center d-flex'>
                    <img src='https://tintopolis.cl/wp-content/uploads/2020/12/logo.png'/>
                </div>
                <div className='InfoInk'>
                    <div className='container txt-center'>
                        <h2 className='txt-yellow'>Somos una empresa dedicada al</h2>
                        <h3 className='txt-pink'>Diseño e impresion digital</h3>
                    </div>
                </div>
            </div>
            <NosBox title='NOSOTROS' desc='En Tintopolis, Somos una excelente empresa dedicada al diseño e impresión digital de todo tipo de publicidad que se pueda imprimir. Nuestra gran capacidad productiva nos permite elaborar etiquetas, pendones, vinilos decorativos, señalética y estampados, siempre acorde y adaptados a las necesidades y requerimientos de nuestros clientes.
            <br><br>Nuestro principal objetivo es mantener la confianza que nuestros clientes han depositado en nosotros, por lo que nos caracterizamos por ser cuidadosos y atentos con cada detalle de nuestros productos, gestionándolos de forma rápida y garantizando la calidad de los mismos, siendo esto posible gracias a la alta experiencia y profesionalismo de nuestro equipo humano y maquinaria especializadas de alta gama con tintas TE2, la cual, nos permite ofrecer una gama de colores más amplia y un nivel totalmente nuevo de vivacidad cromática en las impresiones.
            <br><br>En un mercado tan competitivo la presentación, imagen y publicidad de tu empresa juegan un papel primordial para lograr posicionarse y garantizar el éxito, por lo que en Tintopolis nos es grato ofrecer nuestros servicios y acompañarlos al éxito con el mejor servicio de diseño e imprenta de gran calidad de forma rápida y con la asesoría que nuestros clientes merecen.'/>
        </div>
    )
}

export default Nosotros