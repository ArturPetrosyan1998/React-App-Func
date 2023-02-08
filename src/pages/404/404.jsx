import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    height: '100vh',
  }}
  >
    <div>
      <p>404 ERROR</p>
      <br />
      <p>PAGE  NOT FOUND</p>
      <br />
      <Link
        to="/"
        style={{ textDecoration: 'none', color: 'red' }}
      >
        Back to Home page
      </Link>
    </div>
  </div>
);

export default NotFound;
