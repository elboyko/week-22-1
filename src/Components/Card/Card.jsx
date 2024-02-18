import React from "react";
import hero from "../data.json"
import '../../style/App.css'
function Card(props) {
   const { name, alterego, friends, url, occupation } = props;
   return (
      <><div className="content">
         <p>Имя: {name}</p>
         <p>Альтер эго: {alterego}</p>
         <p>Друзья: {friends}</p>
         <p>Занятие: {occupation}</p>
      </div>
         <div><img src={url} /></div>
      </>

   )
}
export default Card