import React, { useState } from "react";
function Card({id,image,info,price,name,removeTour}){
    const[ReadMore, setReadMore] = useState(false);
    const description = ReadMore ? info : `${info.substring(0, 200)}....`;
    function readHandler(){
        setReadMore(!ReadMore);
    }
    return(
         <div className="card"> 
            <img src={image} className="image"></img>
            <div className="tourInfo">
            <div className="trip-name">{name}</div>
            <div className="trip-price">₹{price}</div>
            </div>
            <div className="description">
                {description}
            <span onClick={readHandler} className="read-more">{ReadMore ? 'ReadMore' : 'Read Less'}</span>
            </div>
           <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>


         </div>
    );
};
export default Card;