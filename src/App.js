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

/* managers */
import { API_posts } from '../src/managers/Api'

function App() {
  return(

    <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/nosotros' component={Nosotros}/>
        </Switch>
      </Router>
    </Layout>

  )
  
}

export default App;
