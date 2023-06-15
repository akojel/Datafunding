import React from "react";
import getImageByKey from "./GetImageByKey";
import { Figure } from "react-bootstrap";




const Getimage = (props) => {
    return (  
<div>


    <Figure className='mt-3'  >

    <Figure.Image
        width={100}
        height={205}
        alt="171x180"
        src={getImageByKey(props.img)}
      />
      <h3>{props.tittle}</h3>
      <p>{props.description}</p>
     
  
    </Figure>

    







</div>
);

}
 
export default Getimage;