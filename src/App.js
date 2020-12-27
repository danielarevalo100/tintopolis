import React, {useEffect, useState} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
/*  styles */
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* components */
import Layout from '../src/components/layout'
import InfoBox from '../src/components/InfoBox';
import HomeCarousel from '../src/components/HomeCarousel';
import ShopButton from '../src/components/ShopButton';
import InfoProm from '../src/components/InfoProm';

/* containers */
import Home from '../src/containers/Home'

/* managers */
import { API_posts } from '../src/managers/Api'

function App() {
  return(
    <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </Layout>
  )
  
}

export default App;
