// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePoll from './pages/Admin/CreatePoll';
import Dashboard from './pages/Admin/Dashboard';
import PollsList from './pages/User/PollsList';
import PollDetail from './pages/User/PollDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PollsList />} /> {/* Page d'accueil */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/create" element={<CreatePoll />} />
        <Route path="/polls" element={<PollsList />} />
        <Route path="/polls/:id" element={<PollDetail />} />
        <Route path="*" element={<h1>Page non trouvée</h1>} /> {/* Route générique */}
      </Routes>
    </Router>
  );
};

export default App;
