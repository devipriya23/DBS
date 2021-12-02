import logo from './logo.svg';
import React, { Fragment } from 'react';

import './App.css';
import Landing from './components/Landing';
import Transaction from './components/Transaction';


function App() {
  return (
   /*  <Router>
    <Fragment>
     
      <Route exact path="/" component={Landing } />
      
      <section className="example">
        <Switch>
          <Route exact path="/transaction" component={transaction } />
        
        </Switch>
      </section>
      
    </Fragment>
</Router> */
<div>
  <Landing>
  
  </Landing>
  <Transaction/>
</div>
  );
}

export default App;
