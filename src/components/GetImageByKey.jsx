import c1 from '../pictures/c1.jpg'
import c2 from '../pictures/c2.jpg'
import c3 from '../pictures/c3.png'
import c4 from '../pictures/c4.png'
import c5 from '../pictures/c5.png'
import c6 from '../pictures/c6.png'
import c7 from '../pictures/c7.png'
import c8 from '../pictures/c8.png'
import c9 from '../pictures/c9.jpg'
import c10 from '../pictures/c10.jpg'
import c11 from '../pictures/c11.png'
import c12 from '../pictures/c12.jpg'

const images ={
   c1,
   c2,
   c3,
   c4,
   c5,
   c6,
   c7,
   c8,
   c9,
   c10,
   c11,
   c12
 
    
   
};

function getImageByKey(key){
    return images[key];
}

export default getImageByKey;