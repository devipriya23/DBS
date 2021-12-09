
import './App.css';
// import {Link} from 'react-router-dom'
import Login from './Components/Login';
import Reset from './Components/Reset';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import History from './Components/History';
function App() {
  return (
<div className="App">
    <Router>
    <div className="container">
    <Routes>
      <Route exact path ="/" element={<Login/>}/>
    {/* <Route  path="/login" component={Login} /> */}
      <Route exact path="/reset" element={<Reset/>} />
      <Route exact  path="/Signup" element={<Signup/>} />
      <Route exact path="/home" element={<History/>}/>
      <Route exact path="/trade" element={<Dashboard/>}/>
      
    </Routes>  
    </div> 
    </Router>
    </div>
  );
}

export default App;
