import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', height: '100vh',
      }}
      >
        <div>
          <p>404 ERROR</p>
          <br />
          <p>PAGE  NOT FOUND</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
