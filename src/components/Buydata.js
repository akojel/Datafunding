import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Form from 'react-bootstrap/Form';
const tittle = 'Buy Data'




const Buydata  = () => {
  const [state, setState] = useState(null)
  const [selected, setSelected] = useState("Select your network")
  const selectNetworkHandler = (e) => {
 if(e.target.value = "1"){
  const data = {
    type:"Mtn" , prices:[{value : 120, data: "500MB-30 days"}, {value : 225, data: "1GB-30 days"},{value : 450, data: "2GB-30 days"},{value : 900, data: "4GB-30 days"},{value : 1125, data: "5GB-30 days"},{value : 2250, data: "10GB-30 days"},{value : 4500, data: "20GB-30 days"}]
  }
  setSelected(1)
  setState(data)
 }
 if(e.target.value = "2"){
  const data = {
    type:"Glo" , prices:[{value : 160, data: "500MB-30 days"}, {value : 300, data: "1GB-30 days"},{value : 600, data: "2GB-30 days"},{value : 1200, data: "4GB-30 days"},{value : 1500, data: "5GB-30 days"},{value : 3000, data: "10GB-30 days"},{value : 6000, data: "20GB-30 days"}]
  }
  setSelected(2)
  setState(data)
 }
 if(e.target.value = "3"){
  const data = {
    type:"Airtel" , prices:[{value : 150, data: "500MB-30 days"}, {value : 270, data: "1GB-30 days"},{value : 540, data: "2GB-30 days"},{value : 1080, data: "4GB-30 days"},{value : 1350, data: "5GB-30 days"},{value : 2700, data: "10GB-30 days"},{value : 5400, data: "20GB-30 days"}]
  }
  setSelected(3)
  setState(data)
 }
 if(e.target.value = "4"){
  const data = {
    type:"9 Mobile" , prices:[{value : 200, data: "500MB-30 days"}, {value : 400, data: "1GB-30 days"},{value : 800, data: "2GB-30 days"},{value : 1600, data: "4GB-30 days"},{value : 2000, data: "5GB-30 days"},{value : 4000, data: "10GB-30 days"},{value : 8000, data: "20GB-30 days"}]
  }
  setSelected( )
  setState(data)
 }

  }
    return (  
<div>
<Sidebar />

<div className="form-1">
    <h3>{tittle}</h3>
<Form>
      
      <Form.Select aria-label="Default select example" value={selected}  onChange={(e)=>selectNetworkHandler(e)}>
      <option>Select network</option>
      <option value="1">Mtn</option>
      <option value="2">Glo</option>
      <option value="3">Airtel</option>
      <option value="4">9 Mobile</option>
    </Form.Select>
    <div className="mt-5">
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Control type="number" placeholder="Phone number" />
      </Form.Group>

      <Form.Select aria-label="Default select example">
      <option>Select Amount</option>
    {state ? state.prices.map(price =>   <option value="1">{price.data} ({price.value})</option>) : null}
    </Form.Select>
      
      </div>
      <button className="btn-1 mt-2"  type="submit">
        Buy Now
      </button>
    </Form>
</div>
</div>
    );
}
 
export default Buydata ;