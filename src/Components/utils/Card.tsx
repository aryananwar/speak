import React from 'react';
import "../Styles/Card.css";



function Card(inputs:any) {
    return(

        <div className  = "card" style = {{height: inputs.height, width: inputs.width, top: inputs.top, left: inputs.left}}> 
        </div>
    );

}

export default Card;