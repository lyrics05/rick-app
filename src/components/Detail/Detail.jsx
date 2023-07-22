import React from 'react'
import { arrFavoritos } from "../data.js";
import styles from "../Detail/Detail.module.css"

const Detail = () => {

  console.log("array favoritos en Favorites",arrFavoritos)
  return (
    <div className={styles.favoritesContainer}>
        {arrFavoritos?.map((c)=>{
            return(
                <div className={styles.containerInfo}>
                    <p className={styles.name}>{c.name}</p>
                    <img className={styles.img} src={c.image}alt="" />
                    <p className={styles.species}>{c.species}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Detail