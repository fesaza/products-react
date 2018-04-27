import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/HomePage'
import ProductsPage from '../products/ProductsPage';
import ClientsPage from '../clients/ClientsPage';
import ContactPage from '../contact/ContactPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path='/clients' component={ClientsPage}/>
      <Route path='/products' component={ProductsPage}/>
      <Route path='/products/:category' component={ProductsPage}/>
    </Switch>
  </main>
)

export default Main