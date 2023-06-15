
import React from "react";
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import getImageByKey from "./GetImageByKey";




const Mycard = (props) => {
 
  const alertFunction = () =>{
    alert("Please Login your account")
  }
  return (  

 
  <Card   >
     
      <Card.Body>

      <i class={props.icon} aria-hidden="true"></i>
      <span className="ms-1">{props.tittle}</span>
        <Figure>
      <Figure.Image
        
        alt="171x180"
      src={getImageByKey(props.img)}
      />

    </Figure>
        <Card.Text>
      <p className="text-white ">{props.description}</p>
        </Card.Text>
        <div class="contain" >
        {props.btn && <a className='aa' href={props.link}>
       <span onClick={props.type === "alert" ? alertFunction : null}>{props.btn}</span>
    </a>}
   
    </div>
      </Card.Body>
    </Card>
  




  );
}
 
export default Mycard;