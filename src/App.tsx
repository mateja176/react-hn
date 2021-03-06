import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Jumbotron style={{ minHeight: '100vh', marginBottom: 0, paddingTop: 32 }}>
      <Link to="/">
        <h2>Hacker news</h2>
      </Link>
      <hr />
      <Routes />
    </Jumbotron>
  </BrowserRouter>
);

export default hot(module)(App);
