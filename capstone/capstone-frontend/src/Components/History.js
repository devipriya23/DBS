import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./sb-admin-2.css";
import "./sb-admin-2.js";
import profile from "./undraw_profile.svg";
import { useLocation } from "react-router-dom";
function History() {

const [cushis,setCusHis]=useState([])
const [buysum,setBuysum]=useState(0)
const [sellsum,setSellsum]=useState(0)
useEffect(() => {
  axios.get("http://localhost:8094/api/v1/history")
  .then(response=>{
      // console.log(response.data)
      setCusHis(response.data)
      console.log(cushis)
  });

}, [])
// console.log(cushis)

//    console.log(cushis.length)
//     var len=cushis.length
//     try{
//     for(var i=0;i<len;i++){
//     if(cushis[i].transactiontype==="buy"){
//         var addval=cushis[i].price*cushis[i].quantity
//         setBuysum(buysum+addval)
//         throw console.error("for loop end")

//     }
//     // if(cushis[i].transactiontype==="sell"){
//       else{
//         var samval=cushis[i].price*cushis[i].quantity
//         setSellsum(sellsum+samval)
//       //  console.log(sellsum)
//       throw console.error("for loop end")

//     }
    
// }
//     }
//     catch{
//       console.log("error caught")
//     }
// console.log(buysum)
// console.log(sellsum)
    






  return (
      
    <div className="Dash">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      ></link>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.1/chart.min.js"
        crossorigin="anonymous"
      ></script>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="#"
          >
            <div className="sidebar-brand-icon ">
              <i className="fas fa-fw fa-chart-area"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Trading </div>
          </a>
          <hr className="sidebar-divider my-0"></hr>
          <li className="nav-item">
            <a className="nav-link" href="/trade">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Trade</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"></form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Custodian
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={profile}
                    ></img>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <div>{useLocation().state.name}</div>             */}
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800"></h1>
              <br></br>
              <table class="table table-stripped">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Transaction_type</th>
                    <th scope="col">Client_id</th>
                    <th scope="col">Instrument_id</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                {
                            cushis.map(
                                (cushis, index) => (
                                    <tr key={cushis.id}>
                                        <td>{ index + 1}</td>
                                        <td>{cushis.transactiontype}</td>
                                        <td> {cushis.clientid} </td>
                                        <td>{cushis.instrumentid}</td>
                                        <td>{cushis.price}</td>
                                        <td>{cushis.quantity}</td>
                                    </tr>
                                )
                            )
                        }


                </tbody>
              </table>
              {/* <p>Buysum:{buysum}</p>
              <p>Sellsum:{sellsum}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default History;