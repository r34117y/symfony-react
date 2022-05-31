// ./src/js/app.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import Home from './components/Home';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Router><Home /></Router>);