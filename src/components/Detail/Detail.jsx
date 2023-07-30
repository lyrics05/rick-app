import React, { useContext, useEffect } from 'react';
import styles from '../Detail/Detail.module.css';
import { UserContext } from '../../Contexts/UserProvider';
import { useState } from 'react';

const Detail = () => {
  const [data,setData] = useState(useContext(UserContext));
    let newData
   const handleDelete = (id) => {
    // Filtrar los elementos que tienen un id diferente al que se quiere eliminar
     newData = data.filter((c) => c.id !== id);
    // Actualizar el estado con el nuevo array filtrado
    localStorage.setItem('favoritos', JSON.stringify(newData));
    window.location.reload(true);
  };
    
  return (
    <div className={styles.favoritesContainer}>
      {data?.map((c) => {
        return (
          <div className={styles.containerInfo} key={c.id}>
            <p className={styles.name}>{c.name}</p>
            <img className={styles.img} src={c.image} alt="" />
            <p className={styles.species}>{c.species}</p>
            <button className={styles.buttonFavorite} onClick={()=>handleDelete(c.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
