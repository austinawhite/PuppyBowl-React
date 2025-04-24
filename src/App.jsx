import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import background from './assets/background.png';

function App() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();


  const getPlayers = async () => {
    try {
      const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTV-ET-WEB-PT/players");
      const data = await res.json();
      setPlayers(data.data.players);
    }
    catch (error) {
      console.error("No teams are registered", error)
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>

    <div className="Background" style={{ backgroundImage: `url(${background})` }}>

      <NavBar />
      
      <div className="banner"> 
        <h1> Puppy Bowl 2025 </h1>
        <h3> May 1, 2025 | Dorthea Dix Park | Raleigh, NC </h3>
      </div> 

    <div className="teams"> 
    {players.map((player) => (
          <div key={player.id} className="player-card">
            <h4>{player.name}</h4>
            <img src={player.imageUrl} alt={player.name} style={{ width: "300px" }} />
            <br></br>
            <button onClick={() => navigate(`/details/${player.id}`)}>View Details</button>
          </div>
        ))}

    </div>
    </div>

    </>
  )
}

export default App
