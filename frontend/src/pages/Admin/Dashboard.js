// src/pages/Admin/Dashboard.js

import React, { useState, useEffect } from 'react';
import { getPolls } from '../../services/pollService';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PollItem from '../../components/PollItem'; 
import { createPoll } from '../../services/pollService';

const Dashboard = () => {
  const [polls, setPolls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const pollsData = await getPolls();
        setPolls(pollsData);
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };
    fetchPolls();
  }, []);

  const handleCreatePoll = () => {
    navigate('/admin/create'); // Redirige vers la page de création de sondage
  };

  return (
    <div>
      <h1>Tableau de bord - Sondages</h1>
      <Button onClick={handleCreatePoll} variant="contained" color="primary">
        Créer un sondage
      </Button>
      <div>
        {polls.length === 0 ? (
          <p>Aucun sondage créé pour le moment.</p>
        ) : (
          polls.map((poll) => (
            <PollItem key={poll.id} poll={poll} /> // On utilise PollItem pour afficher chaque sondage
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
