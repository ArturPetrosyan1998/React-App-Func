import React from 'react';

export const withRouter = (Component) => {
  class Wrapper extends React.Component {
    render() {
      return <Component x={10} />;
    }
  }
  return Wrapper;
};
