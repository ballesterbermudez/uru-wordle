import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './component/nav/Nav'
import Grid from './component/nav/Grid'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Grid/>
  </React.StrictMode>
);