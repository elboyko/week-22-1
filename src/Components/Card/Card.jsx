import React from "react";
import hero from "../data.json"
function Card() {
   return (
      hero.map((item) => (
         <>
            <p>{item.name}</p>
            <p>{item.universe}</p>
            <p>{item.alterego}</p>
            <p>{item.occupation}</p>
            <p>{item.friends}</p>
            <p>{item.superpowers}</p>
            <img src={item.url} />
         </>
      ))
   )
}
export default Card