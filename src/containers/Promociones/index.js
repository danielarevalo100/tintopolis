import React, {useState, useEffect} from 'react';

/*Styles*/
import './styles.css'

/*Components*/
import InfoProm from '../../components/InfoProm';

/* managers */
import { API_posts } from '../../managers/Api'

const Promociones = ( props ) => {
    const [ posts, setPosts ] = useState([]);

    useEffect( async () => {
      const response = await API_posts.fetch( [297, 301, 348] );
      setPosts(response);
    }, [] )

    return(
        <div className='Promociones'>
            <div className='p-backgrnd'>
                <div className='container flex-center-center d-flex b-color'>
                    <h2>Promociones</h2>
                    <img src='https://tintopolis.cl/wp-content/uploads/2020/12/Tintopolis_logo_negro.png'/>
                </div>
                <div className='prom-section container d-flex'>
                    {posts.map(( post ) => <InfoProm path={`/promociones/${post.id}`} key={post.id} img={post.featured_image_src} title={post.title?.rendered || 'Tintopolis'} desc={post.excerpt?.rendered || 'Tintopolis Tu mejor opcion'}/>)}
                </div>
            </div>
        </div>
    )
}

export default Promociones
