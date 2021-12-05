
import './App.css';
// import {Link} from 'react-router-dom'
import Login from './Components/Login';
import Reset from './Components/Reset';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
function App() {
  return (
<div className="App">
    <Router>
    <div className="container">
    <Switch>
      <Route exact path ="/" component={Login}/>
    {/* <Route  path="/login" component={Login} /> */}
      <Route exact path="/reset" component={Reset} />
      <Route exact  path="/Signup" component={Signup} />
      <Route exact path="/home" component={Home}/>
      
    </Switch>  
    </div> 
    </Router>
    </div>
  );
}

export default App;
