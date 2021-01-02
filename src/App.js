import React, {useEffect, useState} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
/*  styles */
import './App.css';

/* components */
import Layout from '../src/components/layout'

/* containers */
import Home from '../src/containers/Home'
import Nosotros from '../src/containers/Nosotros'
import Servicios from '../src/containers/Servicios'
import Promociones from '../src/containers/Promociones'
import PromoStickers from '../src/containers/PromoStickers'
import PromoSeñaletica from '../src/containers/PromoSeñaletica'
import LogoStickers from '../src/containers/LogoStickers'

/* managers */
import { API_posts } from '../src/managers/Api'

function App() {
  return(

    <Router>
      <Layout>  
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/nosotros' component={Nosotros}/>
          <Route exact path='/servicios' component={Servicios}/>
          <Route exact path='/promociones' component={Promociones}/>
          <Route exact path='/promo-stickers' component={PromoStickers}/>
          <Route exact path='/promo-señaletica' component={PromoSeñaletica}/>
          <Route exact path='/logo-stickers' component={LogoStickers}/>
        </Switch>
      </Layout>
    </Router>

  )
  
}

export default App;
