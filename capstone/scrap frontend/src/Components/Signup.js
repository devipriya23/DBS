import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css';
import logoImg from './images/logo.png'
import logoImg2 from './images/content.png' 
function Signup(){
    return(

        <body>
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div className="container">
        <div className="card login-card">
            <div className="row no-gutters" >
                <div className="col-md-5">
                    <img src={logoImg2} alt="login" class="login-card-img"/>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <div className="brand-wrapper">
                            <img src={logoImg} alt="logo" className="logo"/>
                        </div>
                        <p className="login-card-description">Create your account</p>
                        <form action="#!">
                            <div className="form-group">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Enter your Name" />
                            </div>
                            <div className="form-group">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Create your id" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="form-group mb-4">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Re-enter password" />
                            </div>
                            <Link to="Login"><input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Signup"/></Link>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
 
</body>

    )
}
export default Signup