import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css';
import logoImg from './images/logo.png'
import logoImg2 from './images/content.png' 
function Reset(){
    return(
        <body>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
        <main  className="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div  className="container">
        <div  className="card login-card">
            <div  className="row no-gutters" >
                <div  className="col-md-5">
                    <img src={logoImg2} alt="login" className="login-card-img" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <div className="brand-wrapper">
                            <img src={logoImg} alt="logo" className="logo"  />
                        </div>
                        <p className="login-card-description">Reset Your Password</p>
                        <form action="#!">
                            <div className="form-group">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Enter your old password" />
                            </div>
                            <div className="form-group">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Enter New password"/>
                            </div>
                            <div className="form-group mb-4">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Re-enter password"/>
                            </div>
                            <Link to="Login"><input name="login" id="reset" className="btn btn-block login-btn mb-4" type="button" value="Save your changes" /></Link>
                            
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
export default Reset