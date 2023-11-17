import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import InvoicePage from './components/sidebar/InvoicePage';

function App() {
  return (
    <>
      <Home />
      <Router>
        <Routes>
          <Route exact path="/label-route/sub1" element={<InvoicePage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
