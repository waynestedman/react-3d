import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.scss';

const container = document.getElementById('approot');
const root = createRoot(container);

const AppWrapper = () => {
  return (
    // <BrowserRouter>
      <App />
    // </BrowserRouter>
  );
};

root.render(<AppWrapper />);

// root.render(<AppWrapper tab="Home" />);
