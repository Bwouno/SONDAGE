// src/pages/User/PollDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPolls } from '../../services/pollService';

const PollDetail = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const polls = await getPolls();
        const foundPoll = polls.find((poll) => poll.id === parseInt(id));
        setPoll(foundPoll);
      } catch (error) {
        console.error('Error fetching poll:', error);
      }
    };
    fetchPoll();
  }, [id]);

  const handleVote = () => {
    console.log('Vote submitted for option:', selectedOption);
    // Appel à l'API pour enregistrer le vote
  };

  if (!poll) return <div>Loading...</div>;

  return (
    <div>
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>
      {poll.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="poll"
            value={option}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      <button onClick={handleVote}>Voter</button>
    </div>
  );
};

export default PollDetail;
