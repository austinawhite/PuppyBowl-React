import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTV-ET-WEB-PT/players/${id}`);
        const data = await res.json();
        setPlayer(data.data.player);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) return <p>Loading player info...</p>;

  return (
    <div className="details">
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} style={{ width: "250px" }} />
      <p><strong>Breed:</strong> {player.breed}</p>
      <p><strong>Status:</strong> {player.status}</p>
      <p><strong>Team:</strong> {player.team?.name || "Awaiting Team Assignment"}</p>

      <button onClick={() => navigate(-1)} style={{ marginTop: "2rem" }}>
        Return
      </button>
    </div>
  );
}

export default Details;
