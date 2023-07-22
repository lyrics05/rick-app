import React from 'react'
import {Link} from "react-router-dom"
import styles from "../Nav/Nav.module.css"
import titulo from "../../img/titulo.jpeg"

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <img className={styles.navImg} src={titulo}alt="" />
    
        <ul className={styles.navUlList}>
         <Link to={"/"}><li className={styles.liNav}>Home</li></Link> 
         <Link to={"/detail"}><li className={styles.liNav}>Favorites</li></Link> 
        </ul>
      
    </div>
  )
}

export default Nav