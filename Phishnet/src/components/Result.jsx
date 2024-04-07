import React from "react";
import convertToJSON from "./DataHandler";

function Result({data}){
    return(
        <>
        {data && (
             <div>
             <h1> Here are Your results: <u>{data[0].VALID}</u>: </h1>
             <h2> Heres more information on your results:</h2>
             <hr/>
             <p>This url was found to be malicious you can reference its id number <b>{data[0].ID}</b>  and the status of this site is now <a href link="https://phishtank.com">Phishtank</a>. </p>
         </div>
            
        )}
 
           
        
        </>
    )

}


export default Result