import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M3ZDAwYzcxMzM4ZjJjZTg2MjRiMGJlOTVkOWJlYiIsIm5iZiI6MTc0MDEyOTQxMS4zMDQ5OTk4LCJzdWIiOiI2N2I4NDQ4M2JjODRkNTZjYmViYTVkYmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TtfEu-SPvS-HitIOh0k4ln9sLkOj-NZcW5HW2iWg2FI'
    }
  };
  

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[]);

  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
