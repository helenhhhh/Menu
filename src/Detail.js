import React from "react";
import "./detail.css";

function Detail ({detail}){
  if(detail.length!==0){
    return(
      <div className="container">
        <h1>Item in Categort</h1>
        <table >
        <thead >
         <tr >
           <th>Name</th>
           <th>Description</th>
         </tr>
       </thead>
       <tbody>
         {detail.map(ele=>{
           return(
             <tr key ={ele.id} > 
               <td>{ele.name}</td>
               <td>{ele.description}</td>
             </tr>
           )
         })}
       </tbody>
        </table>
      </div>
    )
  }else{
    return null;
  }
 
  }
  

export default Detail;