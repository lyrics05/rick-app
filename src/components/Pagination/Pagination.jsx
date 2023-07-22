import React from 'react'
import styles from "../Pagination/Pagination.module.css"

const Pagination = ({prev,next,onPrev, onNext}) => {

  function handlePrevious(){
    onPrev()
  }
  function handleNext(){
    onNext()
  }
  return (
    <div className={styles.container}>
       <ul className={styles.flexContainer}>
         {prev?
         <li>
            <button className={styles.buttonPagination}  onClick={handlePrevious}>Prev</button>
         </li>:null}
         {next?
         <li>
           <button className={styles.buttonPagination} onClick={handleNext}>Next</button>
         </li>:null}
       </ul>
    </div>
  )
}

export default Pagination