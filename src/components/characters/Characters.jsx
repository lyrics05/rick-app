import React, { useContext, useEffect, useState } from 'react';
import { arrFavoritos } from '../data.js';
import styles from '../characters/Characters.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserProvider';

const Characters = (props) => {
  const data = useContext(UserContext);

  function handleFavorite(id) {
    let favorito = props.characters.find((c) => c.id === id);
     data.push(favorito)
    // Agregar el favorito al estado local
    localStorage.setItem("favoritos",JSON.stringify(data))
  }

  console.log('ESTO ES ARRFAVORITOS======>', arrFavoritos);
  return (
    <div className={styles.cardContainer}>
      {props.characters?.map((c) => {
        return (
          <div className={styles.infoDiv} key={c.id}>
            <p className={styles.name}>{c.name}</p>
            <img className={styles.img} src={c.image} alt="" />
            <p className={styles.specie}>{c.species}</p>
            <Link to={'/detail'}>
              {' '}
              <button className={styles.buttonCard} onClick={() => handleFavorite(c.id)}>
                Add to favorites
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
