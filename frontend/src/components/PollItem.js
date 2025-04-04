// src/components/PollItem.js

import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PollItem = ({ poll }) => {
  const navigate = useNavigate();

  const handleVote = () => {
    navigate(`/polls/${poll.id}`);
  };

  return (
    <div>
      <h3>{poll.title}</h3>
      <p>{poll.description}</p>
      <Button onClick={handleVote}>Répondre</Button>
    </div>
  );
};

export default PollItem;
