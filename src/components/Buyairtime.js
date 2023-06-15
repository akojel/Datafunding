import React from "react";
import Sidebar from "./Sidebar";
import Form from 'react-bootstrap/Form';
const tittle ='Buy Airtimme'




const Buyairtime  = () => {
    return (  
<div>
<Sidebar />

<div className="form-1">
    <h3>{tittle}</h3>
<Form>
      
      <Form.Select aria-label="Default select example">
      <option>Select network</option>
      <option value="1">Airtel</option>
      <option value="2">Glo</option>
      <option value="3">Mtn</option>
      <option value="3">9 Mobile</option>
    </Form.Select>
    <div className="mt-5">
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Control type="number" placeholder="Phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Control type="number" placeholder="Amount" />
      </Form.Group>

      
      </div>
      <button className="btn-1"  type="submit">
        Buy Now
      </button>
    </Form>
</div>
</div>
 );
}
 
export default Buyairtime ;