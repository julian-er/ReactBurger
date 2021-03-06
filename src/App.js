import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './Components/Layout'
import BurgerBuilder from './Containers/BurgerBuilder'
import Checkout from './Containers/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" exact component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
