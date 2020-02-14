import React from 'react';
import Layout from './Components/Layout'
import BurgerBuilder from './Containers/BurgerBuilder'


function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder>Burger</BurgerBuilder>
      </Layout>


    </div>
  );
}

export default App;
