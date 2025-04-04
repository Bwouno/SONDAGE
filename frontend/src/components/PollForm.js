// src/components/PollForm.js

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { createPoll } from '../services/pollService';

const PollForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState(['']);
  const [singleChoice, setSingleChoice] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pollData = { title, description, options, singleChoice };
    try {
      const newPoll = await createPoll(pollData);
      console.log('Poll created:', newPoll);
    } catch (error) {
      console.error('Error creating poll:', error);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <div>
        {options.map((option, index) => (
          <TextField
            key={index}
            label={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            fullWidth
            margin="normal"
          />
        ))}
      </div>
      <Button onClick={handleAddOption}>Ajouter une option</Button>
      <Button type="submit">Créer le sondage</Button>
    </form>
  );
};

export default PollForm;
