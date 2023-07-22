import React, { useState } from 'react'
import { arrFavoritos } from "../data.js";
import styles from "../characters/Characters.module.css"
import { Link } from 'react-router-dom';

const Characters = (props) => {
    const [favoritos, setFavoritos] = useState(arrFavoritos)
    localStorage.setItem("favorito",favoritos)
   
   function handleFavorite(id){
    let favorito = props.characters.find(c=> c.id==id)
    
    console.log("ESTO ES FAVORITO",favorito)
    arrFavoritos.push(favorito)
    localStorage.setItem("favorito",favorito)
    console.log("ESTO ES ARRFAVORITOS======>",arrFavoritos)
   }
   console.log("ESTO ES ARRFAVORITOS======>",arrFavoritos)
  return (
    <div  className={styles.cardContainer} >
        {props.characters?.map((c)=>{
            return(
                <div className={styles.infoDiv}>
                    <p className={styles.name}>{c.name}</p>
                    <img className={styles.img} src={c.image}alt="" />
                    <p className={styles.specie}>{c.species}</p>
                   <Link to={"/detail"}> <button className={styles.buttonCard} onClick={()=>handleFavorite(c.id)}>Add to favorites</button></Link>
                </div>
            )
        })}

    </div>
  )
}

export default Characters