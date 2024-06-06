import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data';
import { useRef, useState } from 'react';
import { useEffect } from 'react';


const TitleCards = ({ title, url }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTczNDgwZmEyNTYyMWI3NjdhNThkZWFiNWJlYmM0ZCIsInN1YiI6IjY2NTk5NjE1Yzk0MGNmYzVjZDc1MTk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.67LplGXgWnCxCK6cTiWRdQyw4hp2qKgn3Kl-FhVES3M'
    }
  };
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    // // const URL = `https://api.themoviedb.org/3/${category ? category : "movie/now_playing"}+?language=en-US&page=1`
    // const URL = `https://api.themoviedb.org/3/${category? category: "movie/now_playing"}?language=en-US&page=1`;
    fetch(url+"?language=en-US&page=1", options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  console.log(apiData);
  return (
    <div className='titlecards'>
      <h2>{title ? title : "Polpular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card?.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards