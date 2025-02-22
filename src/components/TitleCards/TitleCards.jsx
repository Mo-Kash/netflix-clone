import { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';
//import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M3ZDAwYzcxMzM4ZjJjZTg2MjRiMGJlOTVkOWJlYiIsIm5iZiI6MTc0MDEyOTQxMS4zMDQ5OTk4LCJzdWIiOiI2N2I4NDQ4M2JjODRkNTZjYmViYTVkYmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtfEu-SPvS-HitIOh0k4ln9sLkOj-NZcW5HW2iWg2FI'
    }
  };
  


  const handleWheel = (e) =>{
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  },[]);

  return (
    <div className='title-cards'>
      <h2>{title}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card, id)=>{
          return <Link to={`/player/${card.id}`} className="card" key={id}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
