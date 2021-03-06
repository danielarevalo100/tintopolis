import React from 'react';

/*Styles*/
import './styles.css'

/* icons */
import RightArrow from '@material-ui/icons/ArrowForwardIosRounded';

/*components*/
import ProductList from '../../components/ProductList';

const Servicios = ( props ) => {
    return(
        <div className='app'>
            <div className='s-backgrnd'>
                <div className='container flex-center-center d-flex s-color'>
                    <h2>SERVICIOS</h2>
                    <img src='https://tintopolis.cl/wp-content/uploads/2020/12/Tintopolis_logo_negro.png'/>
                </div>
                <div className='container black-info bg-black txt-center'>
                    <h4 className='txt-white'>Realizamos envios a todo Chile. En RM despacho gratis por compras superiores a $40.000</h4>
                    <h2 className='txt-yellow'>TODOS NUESTOS PRECIOS INCLUYEN IVA</h2>
                </div>
            </div>
            <section className='container'>
                <div className='row flex-center-center d-flex srv-list'>
                  <div className='section-title d-flex flex-center-center'>
                    <RightArrow/>
                    <h3>Stickers</h3>
                  </div>
                  <div className='line'></div>
                </div>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_02_mate.jpg' product='BLANCO MATE' price='11.900 /mt2'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_01_brillanete.jpg' product='BLANCO BRILLANTE' price='11.900 /mt2'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_03_Plateado.jpg' product='PLATEADO' price='12.990 /mt2'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_04_dorado.jpg' product='DORADO' price='29.990 /mt2'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_05_transparent.jpg' product='TRANSPARENTE' price='14.280 /mt2'/>
                <div className='row flex-center-center d-flex srv-list'>
                  <div className='section-title d-flex flex-center-center'>
                    <RightArrow/>
                    <h3>Pendones Publicitarios</h3>
                  </div>
                  <div className='line'></div>
                </div>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/03_PX-1.jpg' product='MINI X' price='5.500 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/02_Pendon-Roller-A4.jpg' product='MINI ROLLER A4' price='9.900 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/02_Pendon-Roller-A3.jpg' product='MINI ROLLER A3' price='11.990 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/04_SOPORTE-L-1.jpg' product='SOPORTE TIPO L' price='15.500 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/05_Pendon-60x200-1.jpg' product='ROLLER 60 X 200' price='18.490 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Lienzo-en-tela-1.jpg' product='LIENZO EN TELA PVC' price='7.990 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/07_Paloma.jpg' product='PALOMAS PUBLICITARIAS' price='25.990 /un'/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/08_totem.jpg' product='TOTEM' price='49.990 /un'/>
                <div className='row flex-center-center d-flex srv-list'>
                  <div className='section-title d-flex flex-center-center'>
                    <RightArrow/>
                    <h3>Imanes Publicitarios</h3>
                  </div>
                  <div className='line'></div>
                </div>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/IMANES_cuadrados-1.jpg' product='IMANES PUBLICITARIOS' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/IMANES_02-1.jpg' product='MINI CALENDARIOS' price='11.900'/>
                <div className='row flex-center-center d-flex srv-list'>
                  <div className='section-title d-flex flex-center-center'>
                    <RightArrow/>
                    <h3>Señaléticas</h3>
                  </div>
                  <div className='line'></div>
                </div>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_01-1.jpg' product='COVID' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_02-1.jpg' product='INFORMATIVA' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_03-1.jpg' product='ADVERTENCIA' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_06-1.jpg' product='ATENCION' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_05-1.jpg' product='PELIGRO' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_04-1.jpg' product='PROHIBICION' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Señaletica_productos_07-1.jpg' product='SEGURIDAD' price=''/>
                <div className='row flex-center-center d-flex srv-list'>
                  <div className='section-title d-flex flex-center-center'>
                    <RightArrow/>
                    <h3>Vinilos Decorativos</h3>
                  </div>
                  <div className='line'></div>
                </div>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_02_mate.jpg' product='MATE' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Servicios_CIAN_01_brillanete.jpg' product='BRILLANTE' price=''/>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/Fluorescente.jpg' product='FLURESCENCIA' price=''/>
                <div className='row flex-center-center d-flex srv-list'>
                  <div className='section-title d-flex flex-center-center'>
                    <RightArrow/>
                    <h3>Estampados</h3>
                  </div>
                  <div className='line'></div>
                </div>
                <ProductList img='https://tintopolis.cl/wp-content/uploads/2020/12/ESTAMPADOS-2.jpg' product='PROXIMAMENTE' price=''/>
            </section>
        </div>
    )
}

export default Servicios
