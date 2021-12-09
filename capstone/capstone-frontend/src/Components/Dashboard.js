import React, { useEffect } from "react";
import "./sb-admin-2.css";
import "./sb-admin-2.js";
import profile from "./undraw_profile.svg";
import axios from "axios";
import { useState } from "react";
import PopUp from "./PopUp";
import Pop from "./Pop";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isop,setIsOp] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen);
    window.location.reload()
}
const tgglePop=()=>{
  setIsOp(!isop);
  window.location.reload()
}

  const[clientid,setClientId]=useState("")
  const[cname,setCname]=useState("")
  const[transactionlimit,setTransactionlimit]=useState("")
  const[custodianid,setCustodianid]=useState("")
  
  const handleClientid=(e)=>{
      setClientId(e.target.value);
          axios.get( "http://localhost:8094/api/v1/client/" + e.target.value)
          .then(response => {
              console.log(clientid)
              console.log(response.data)
              setCname(response.data.clientname)
              setTransactionlimit(response.data.transactionlimit)
              setCustodianid(response.data.custodianid)
              console.log(transactionlimit)
             
          })
          .catch(error => {
              console.log(error)
          })
  
  }
  const[instrumentid,setInstrumentId]=useState("")
  const[instrumentname,setInstrumentName]=useState("")
  const[facevalue,setFaceValue]=useState("")
  
  
  const handleInstrumentId=(e)=>{
      setInstrumentId(e.target.value)
      axios.get( "http://localhost:8094/api/v1/instrument/" + e.target.value)
      .then(response => {
          console.log(instrumentid)
          console.log(response.data)
          setInstrumentName(response.data.instumentname)
          setFaceValue(response.data.facevalue)
         
      })
      .catch(error => {
          console.log(error)
      })
  }

const[price,setPrice]=useState("")
const[quantity,setQuantity]=useState("")
const[array,setArray]=useState([],[])
const[sample,setSample]=useState([],[])
// const[stats,setStats]=useState("close")
const stats="close"
// const updstats="open"
useEffect(() => {
    axios.get("http://localhost:8094/api/v1/sell")
    .then(response=>{
        // console.log(response.data)
        setArray(response.data)
        console.log(array)
    });

}, [])

useEffect(() => {
    axios.get("http://localhost:8094/api/v1/buy")
    .then(response=>{
        // console.log(response.data)
        setSample(response.data)
        console.log(sample)
    });

}, [])
const [sellmsg,setSellmsg]=useState("")

const handlesell=(e)=>{
  setIsOp(!isop);
  // setIsOpen(!isOpen);
  // console.log(sample)
  // console.log(array)
  const len=sample.length
      var count=0
     // console.log(len)
     try{
      for(var i=0;i<len;i++){
          // if(loop==="true"){
            //  count=count+1
              // console.log(loop)
              const diff=(sample[i].quantity-quantity)
              console.log(diff)
          if(quantity*price<=transactionlimit){
          if(sample[i].stats==="open"){
              if(sample[i].instrumentid===instrumentid){
                  if(sample[i].price===price){
                      if(sample[i].quantity===quantity)
                      {
                        setSellmsg("Exact match Found")
                          const stats="close"
                          const updbuyid=sample[i].buyid
                          console.log(updbuyid)
                          e.preventDefault()
                          const update={clientid, instrumentid ,price,quantity,stats}
                          axios.put("http://localhost:8094/api/v1/buy/"+ updbuyid,update)
                          .then(response=>{
                              console.log(response.data)
                          })
                          .catch(error => {
                              console.log(error)
                          })
                          const transactiontype="sell"
                          const pushdata={transactiontype,clientid,instrumentid,price,quantity,custodianid}
                          axios.post("http://localhost:8094/api/v1/history",pushdata)
                          .then(response=>{
                              console.log(response.data)
                          })

                          console.log("all are same")
                          // setLoop("false")
                          throw console.error("its an error");
                      
                      }
                      if(Number(quantity)<=Number(sample[i].quantity)){
                        setSellmsg(" Macth Found and buy database is updated")
                          console.log("quantity is diff")
                         // if(quantity<=array[i].quantity){
                            
                         const updbuyid=sample[i].buyid
                         console.log(updbuyid)
                         const stats="open"
                         // const quantity=array[i].quantity-quantity
                         console.log(quantity)
                         // var val=Number(quantity)
                         // var val1=Number(array[i].quantity)
                         //setUpdQuantity(Number(array[i].quantity)-Number(quantity))
                         // console.log(quantity)
                         
                         //console.log(updquantity)
                         e.preventDefault()
                         const transactiontype="sell"
                         const update={transactiontype,clientid, instrumentid ,price,quantity,custodianid}
                         axios.post("http://localhost:8094/api/v1/history",update)
                         .then(response=>{
                             console.log(response.data)
                         })
                         .catch(error => {
                             console.log(error)
                         })
                         .finally(()=>{
                             const quantity=diff
                             console.log(quantity)
                             const update={clientid, instrumentid ,price,quantity,stats}

                             axios.put("http://localhost:8094/api/v1/buy/"+updbuyid,update)
                             .then(response=>{
                                 console.log(response.data)
                             })
                         })
                         
                         throw console.error("its an error");
                         }

                         if(Number(quantity)>Number(sample[i].quantity)){
                          setSellmsg("partial Macth Found and remaining quantity updated to buy database")
                          console.log("quantity if large")
                          const updbuyid=sample[i].buyid
                          const quantity=sample[i].quantity
                          console.log(quantity)
                          const stats="close"
                          const transactiontype="sell"
                          const his={transactiontype,clientid,instrumentid,price,quantity,custodianid}
                          axios.post("http://localhost:8094/api/v1/history",his)
                          .then(response=>{
                              console.log(response.data)
                          })
                          .catch(error => {
                              console.log(error)
                          })
                          const update={clientid, instrumentid ,price,quantity,stats}
                          axios.put("http://localhost:8094/api/v1/buy/"+updbuyid,update)
                          .then(response=>{
                              console.log(response.data)
                          })
                          .catch(error => {
                              console.log(error)
                          })
                          .finally(()=>{
                              const quantity=diff*(-1)
                              const stats="open"
                              const upd={clientid, instrumentid ,price,quantity,stats}
                              axios.post("http://localhost:8094/api/v1/sell",upd)
                              .then(response=>{
                                  console.log(response.data)
                              })
                          })
                          throw console.error("its an error");
                      }
                     
                  }
                  else{
                      console.log("price diff")
                  }
                 
              }
             
              else{
                  console.log("instrument id diff")
              }
          }
          else{
              console.log("stats is diff")
             // console.log(array.stats)
          }
      }
      else{
          console.log("transactionan limit exceeded")
        //  alert("transactin limit exceeded")
        throw console.error("its an error");
      }
      count=count+1
      }
      if(count===len){
        setSellmsg("sorry no match found u r data will be added to the database")
          const stats="open"
          //alert("sorry no match found u r data will be added to the database")
          const newdata={clientid,instrumentid,price,quantity,stats}
          axios.post("http://localhost:8094/api/v1/sell",newdata)
          .then(response=>{
              console.log(response.data)
          })
      }
      
  
  }
  catch{
      console.log("Match found")
  }

//  window.location.reload();
}


// ------------------------------------buy------------------------------------
const [buymsg,setBuyMsg]=useState("")

const handlebuy=(e)=>{
  setIsOpen(!isOpen);
    
  console.log(array)
  // console.log(loop)
//    // console.log(array[0].stats)
  const len=array.length
  var count=0
  try{
  for(var i=0;i<len;i++){
      // if(loop==="true"){
          const diff=(array[i].quantity-quantity)
          console.log(diff)
          // console.log(parse.long(array[i].quantity))
          // console.log(loop)
   if(quantity*price<=transactionlimit){
      if(array[i].stats==="open"){
          if(array[i].instrumentid===instrumentid){
              if(array[i].price===price){
                  if(array[i].quantity===quantity)
                  {

                      setBuyMsg("Exact Macth Found")
                      console.log(buymsg)
                      const updsellid=array[i].sellid
                      console.log(updsellid)
                      e.preventDefault()
                      const update={clientid, instrumentid ,price,quantity,stats}
                      axios.put("http://localhost:8094/api/v1/sell/"+ updsellid,update)
                      .then(response=>{
                          console.log(response.data)
                      })
                      .catch(error => {
                          console.log(error)
                      })
                      const transactiontype="buy"
                      const pushdata={transactiontype,clientid,instrumentid,price,quantity,custodianid}
                      axios.post("http://localhost:8094/api/v1/history",pushdata)
                      .then(response=>{
                          console.log(response.data)
                      })
                      console.log("all are same")
                      // setLoop("false")
                      throw console.error("its an error");
                  }
                  if(Number(quantity)<=Number(array[i].quantity)){
                       console.log("quantity is diff")
                       console.log(diff)
                      // if(quantity<=array[i].quantity){
                      setBuyMsg("Match found and Sell database is updated") 
                      console.log(buymsg)
                      const updsellid=array[i].sellid
                      console.log(updsellid)
                      const stats="open"
                      // const quantity=array[i].quantity-quantity
                      console.log(quantity)
                      // var val=Number(quantity)
                      // var val1=Number(array[i].quantity)
                      //setUpdQuantity(Number(array[i].quantity)-Number(quantity))
                      // console.log(quantity)
                      
                     // console.log(updquantity)
                      e.preventDefault()
                      const transactiontype="buy"
                      const update={transactiontype,clientid, instrumentid ,price,quantity,custodianid}
                      axios.post("http://localhost:8094/api/v1/history",update)
                      .then(response=>{
                          console.log(response.data)
                      })
                      .catch(error => {
                          console.log(error)
                      })
                      .finally(()=>{
                          const quantity=diff
                          console.log(quantity)
                          const update={clientid, instrumentid ,price,quantity,stats}

                          axios.put("http://localhost:8094/api/v1/sell/"+updsellid,update)
                          .then(response=>{
                              console.log(response.data)
                          })
                      })
                      
                      throw console.error("its an error");
                      }
                  if(Number(quantity)>Number(array[i].quantity)){
                          setBuyMsg("partial match found and reamaining quantity is added to buy database")
                          console.log(buymsg)
                          console.log("quantity if large")
                          const updsellid=array[i].sellid
                          const quantity=array[i].quantity
                          console.log(quantity)
                          const stats="close"
                          const transactiontype="buy"
                          const his={transactiontype,clientid,instrumentid,price,quantity,custodianid}
                          axios.post("http://localhost:8094/api/v1/history",his)
                          .then(response=>{
                              console.log(response.data)
                          })
                          .catch(error => {
                              console.log(error)
                          })
                          const update={clientid, instrumentid ,price,quantity,stats}
                          axios.put("http://localhost:8094/api/v1/sell/"+updsellid,update)
                          .then(response=>{
                              console.log(response.data)
                          })
                          .catch(error => {
                              console.log(error)
                          })
                          .finally(()=>{
                              const quantity=diff*(-1)
                              const stats="open"
                              const upd={clientid, instrumentid ,price,quantity,stats}
                              axios.post("http://localhost:8094/api/v1/buy",upd)
                              .then(response=>{
                                  console.log(response.data)
                              })
                          })

                          throw console.error("its an error");
                      }
                      
                  
              
              }  
              
              else{
                  console.log("price diff")
              }
          
              
          }   
          else{
              console.log("instrument id diff")
          }
              
          
         
      }
      else{
          console.log("stats is diff")
         // console.log(array.stats)
      }
  }
  else{
      console.log("transaction limit exceeded")
      throw console.error("its an error");
  }
  count=count+1
  }
  if(count===len){
    
      const stats="open"
      setBuyMsg("sorry no match found u r data will be added to the database")
      console.log(buymsg)
      const newdata={clientid,instrumentid,price,quantity,stats}
      axios.post("http://localhost:8094/api/v1/buy",newdata)
      .then(response=>{
          console.log(response.data)
      })
  }
  
}
catch{
  console.log("Match found")
}
//window.location.reload();
}











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
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800"></h1>
              <br></br>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Client ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Client ID"
                      onChange={handleClientid}
                    ></input>
                  </div>
                  <div className="form-group col-md-4">
                    <i className="fas fa-fw fa-user"></i>
                    <label for="inputAddress">Client Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Client Name"
                      value={cname}
                      disabled
                    ></input>
                  </div>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Instrument ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Instrument ID"
                      onChange={handleInstrumentId}
                    ></input>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div className="col-md-4">
                    <i className="fas fa-fw fa-user"></i>
                    <label for="inputAddress2">Instrument Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Instrument Name"
                      value={instrumentname}
                      disabled
                    ></input>
                  </div>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Face Value</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Face value"
                      disabled
                      value={facevalue}
                    ></input>
                                      </div>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-dollar-sign"></i>
                    <label for="balence">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="balence"
                      placeholder="price"
                      onChange={ (e) => setPrice(e.target.value)}
                    ></input>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <label for="balence">Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      id="balence"
                      placeholder="enter only multiplies of 25"
                      onChange={ (e) => setQuantity(e.target.value)}
                    ></input>
                  </div>
                  <br></br>
                </div>
              </form>
            </div>
            <br></br>
            <br></br>
            <div
              className="form-row"
              style={{ justifyContent: "center", margin: "0px 20px 0px 20px" }}
            >
              {/* <button
                type="button"
                className="btn btn-outline-primary mr-5 pl-5 pr-5"
                onClick={handlebuy}
              >
                Buy
              </button> */}
              <div>
                                <button type="button" className="btn btn-outline-primary mr-5 pl-5 pr-5" onClick={handlebuy} style={{ marginBottom: "5rem" }}>Buy</button>
                                {isOpen && <PopUp
                                    content={<>
                                        
                                        <p>{buymsg}</p>
                                        
                                        {/* <button className="btn btn-outline-primary ml-5 pl-5 pr-5">ok</button><br/> */}
                                    </>}
                                    handleClose={togglePopup}
                                />}
                            </div>
              {/* <button
                type="button"
                className="btn btn-outline-primary ml-5 pl-5 pr-5"
                onClick={handlesell}
              >
                Sell
              </button> */}

<div>
                                <button type="button" className="btn btn-outline-primary mr-5 pl-5 pr-5" onClick={handlesell} style={{ marginBottom: "5rem" }}>Sell</button>
                                {isop && <Pop
                                    content={<>
                                        
                                        <p>{sellmsg}</p>
                                        
                                        {/* <button className="btn btn-outline-primary ml-5 pl-5 pr-5">ok</button><br/> */}
                                    </>}
                                    handleClose={tgglePop}
                                />}
                            </div>




             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
