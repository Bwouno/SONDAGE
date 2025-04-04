import React, { useEffect, useState } from "react";
import axios from "axios";

const PollsList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/polls")
      .then((response) => {
        setPolls(response.data); 
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des sondages:", error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des sondages</h1>
      <ul>
        {polls.length === 0 ? (
          <li>Aucun sondage disponible</li>
        ) : (
          polls.map((poll) => <li key={poll.id}>{poll.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default PollsList;
