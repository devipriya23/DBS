import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
function Home() {

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
console.log(transactionlimit)

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

const handlesell=(e)=>{
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
            const stats="open"
            alert("sorry no match found u r data will be added to the database")
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

   // window.location.reload();
}

//const [updquantity,setUpdQuantity]=useState("")

const handlebuy=(e)=>{
    
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
            alert("sorry no match found u r data will be added to the database")
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
        <div className="root">

            <div className="row">
                <div className="card col-md-7 offset-md-3 offset-md-3">
                    <div className="card-body">
                                                  
                            <div className="form-group mb-3">
                                <label className="form-label">ClientId</label>
                                <input
                                    type="text"
                                    placeholder="Client id"
                                    name="Clientid"
                                    className="form-control"
                                    onChange={handleClientid}
                               />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">ClientName</label>
                                <p>{cname}</p>
                            </div>
                            <div className="form-group mb-3">
                            <label className="form-label">InstrumentId</label>
                                <input
                                    type="text"
                                    placeholder="Instrument id"
                                    name="Instrumentid"
                                    className="form-control"
                                    onChange={handleInstrumentId}
                               />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Instrument Name</label>
                                <p>{instrumentname}</p>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Face Value</label>
                                <p>{facevalue}</p>
                            </div>
                            
                            <div className="form-group mb-3">
                            <label className="form-label">Price</label>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    name="Price"
                                    className="form-control"
                                    onChange={ (e) => setPrice(e.target.value)}
                        
                               />
                            </div>
                            <div className="form-group mb-3">
                            <label className="form-label">Quantity</label>
                                <input
                                    type="text"
                                    placeholder="Quantity"
                                    name="Quantity"
                                    className="form-control"
                                    onChange={ (e) => setQuantity(e.target.value)}
                                
                               />
                            </div>
                            <button onClick={handlebuy}>BUY</button>
                            <button onClick={handlesell}>SELL</button>
                            

                           
                        
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home
