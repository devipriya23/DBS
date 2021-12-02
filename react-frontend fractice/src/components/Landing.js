import React, {Fragment} from 'react';
function Landing() {
    return (
        <Fragment>
            <nav class="navbar bg-dark">
            <h1>
              <a href="index.html">DBS Bank Payments</a>
            </h1>
          </nav>
        <div class="container" id="container">
    
           
            
        <form action="transaction.html"> 
            
            <div class="inputBox">  
                <div class="input1">
                 <label for="daydate">Today's Date</label>   
                </div>
                <div class="input2">
                    <input id="daydate" type="date" />
                </div>
            </div>
                <div class="inputBox"> 
                <div class="input1">
                   <label for="num">Account Number</label>
                   </div>
                   <div class="input2">
                    <input id="num" type="text" placeholder="enter account number" />
                </div>
            </div>
        
     <div class="inputBox">  
      <div class="input1">
      <label for="acntname">Account Holder Name </label>
  </div>
  <div class="input2">
    <input id="acntname" type="text" />
</div>
 
  </div>
  
  <div class="inputBox">  
      <div class="input1">   
      <label for="bln">Balance </label>
  </div>
  <div class="input2">
    <input id="bln" type="text" />
</div>
  </div>
  <div class="inputBox">  
      <div class="input1">
      <label for="draft">Over Draft </label>
  </div>
  <div class="input2">
    <input id="draft" type="text" />
</div>
  </div>
  <div class="inputBox">  
      <input type="submit" value="next" class="btn" />
  </div>
  
   </form>
</div>
</Fragment>
    )
}
export default Landing

