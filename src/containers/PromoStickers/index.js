import React, {useState, useEffect} from 'react';

/* styles */
import './styles.css'

/* managers */
import { API_posts } from '../../managers/Api'

/* components */
import InfoProm from '../../components/InfoProm';
import PromoProd from '../../components/PromoProd';

 /* icons */
import CircularProgress from '@material-ui/core/CircularProgress';

const PromoStickers = ( props ) => {
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect( async () => {
    console.log(props.match)
    if(props.match.params.id){
      const response = await API_posts.fetch( [props.match.params.id] );
      console.log('esta es la respuesta', response.length)
      if(response.length > 0){
        setData(response[0]);
        setLoaded(true);
        console.log(data);
      }else{
        props.history.push('/')
      }

    }else{
      props.history.push('/')
    }

  }, [] )

  if(!loaded){
    return(
      <div className='loader d-flex flex-center-center' style={{flexDirection:'column'}}>
        <img style={{maxWidth:'300px', marginBottom:'90px'}} src='https://tintopolis.cl/wp-content/uploads/2020/12/logo.png'/>
        <CircularProgress/>
      </div>
    )
  }else{
    return(
      <div className='app'>
        <div className='ps-bg'>
          <div className='stickers'>
            <InfoProm hideReadMore={true} img={data.featured_image_src}/>
            <PromoProd title={data.title.rendered}/>
            <div className='prom-separator'>
              <InfoProm hideReadMore={true} desc={data.excerpt.rendered}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PromoStickers
