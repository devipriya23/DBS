import React, {Fragment} from 'react';

 function Transaction() {
    return (
        <Fragment>
        <div class="transaction">
        <form action=""> 
            <div class="inputBox">  
                <div class="input1">
                   <label for="bic">BIC CODE</label> 
                   </div>
                   <div class="input2">
                    <input id="bic" type="text" placeholder="BIC CODE" />
                </div>
            </div>
           
            
                <div class="inputBox">  
                  <div class="input1"> 
                       <label for="ins"> Institution Name</label>
                      </div>     
                      <div class="input2">
                        <input id="ins" type="text" />
                    </div>
                    
                </div>
                <div class="inputBox">  
                    <div class="input1">
                      <label for="rec"  >Receiver Name</label>
                      </div>
                      <div class="input2">
                        <input id="rec" type="text" placeholder="Receiver Name" />
                    </div>
                </div>
                <div class="inputBox">  
                    <div class="input1">
                       <label for="acnt">Receiver Account Number</label> 
                       </div>
                       <div class="input2">
                        <input type="text" placeholder="Receiver Account Number" />
                    </div>
                </div>
                <div class="inputBox">  
                <input type="submit" value="transfer" class="btn" />
                </div>
                <div class="inputBox">
                  <div class="input1">   
                      <label for="transfertype">Tranfer Type</label>
                      </div>
                      <div class="input2"> 
              <select id="transfertype" name="transfertype">
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Customer Transfer">Customer Transfer</option>
                  
                </select>
                </div>
                </div>
                <div class="inputBox">
                  <div class="input1"> 
                <label for="msgcode">Message Code :</label>
                </div>
                <div class="input2"> 
                <select id="msgcode" name="msgcode">
                    <option value="CHQB">CHQB</option>
                    <option value="CORT">CORT</option>
                    <option value="HOLD">HOLD</option>
                    <option value="INTC">INTC</option>
                    <option value="PHOB">PHOB</option>
                    <option value="PHOI">PHOI</option>
                    <option value="PHON">PHON</option>
                    <option value="REPA">REPA</option>
                    <option value="SDVA">SDVA</option>
                    
                  </select>
                  </div>
                  </div>
                  
                  <div class="inputBox">
                      <div class="input1">
                       <label for="amnt">Amount</label>  
                       </div> 
                       <div class="input2">
                          <input id="amnt" type="text" placeholder="Amount" />
                      </div>
                  </div>
                  <div class="inputBox">  
                    <div class="input1">
                      <label for="transfee">Transfer Fee </label>
                    </div>
                    <div class="input2">
                      <input id="transfee" type="text" / >
                  </div>
          
                  </div>
                  <div class="inputBox">  
                    <div class="input1">
                      <label for="clrbln">Clear Balance </label>
                  </div>
                  <div class="input2">
                    <input id="clrbln" type="text" / >
                </div>
                </div>
                </form>
           
            </div>
            </Fragment>
    )
}
export default Transaction
