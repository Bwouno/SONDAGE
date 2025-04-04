// src/services/pollService.js

import axios from "axios";

const API_URL = "http://localhost:3000/polls";

// Récupérer tous les sondages
export const getPolls = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching polls:", error);
    return [];
  }
};

export const createPoll = async (pollData) => {
  try {
    const response = await axios.post(API_URL, pollData);
    return response.data;
  } catch (error) {
    console.error("Error creating poll:", error);
    return null;
  }
};

// Voter sur un sondage
export const votePoll = async (pollId, voteData) => {
  try {
    const response = await axios.post(`${API_URL}/${pollId}/vote`, voteData);
    return response.data;
  } catch (error) {
    console.error("Error voting:", error);
    throw error;
  }
};
