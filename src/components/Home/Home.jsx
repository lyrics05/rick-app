import React, { useEffect, useState} from 'react'
import Characters from '../characters/Characters'
import Pagination from "../Pagination/Pagination"

 
const Home = () => {
    const[characters, setCharacters] = useState([])
    const [info, setInfo] = useState([])
    const url = "https://rickandmortyapi.com/api/character"

    function fetchCharacters(url){
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
           setCharacters(data.results)
           setInfo(data.info)
        })
    }

    console.log(characters)
    useEffect(()=>{
       fetchCharacters(url)
    },[])

    const onPrevious =()=>{
        fetchCharacters(info.prev)
    }
    const onNext =()=>{
        fetchCharacters(info.next)
    }

  return (
    <div>
        <Pagination prev={info.prev} next = {info.next} onPrev={onPrevious} onNext={onNext}/>
      <Characters characters={characters}/>
    </div>
  )
}

export default Home