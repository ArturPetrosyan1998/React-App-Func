import { Component } from 'react';

class Input extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <input
        {...rest}
      />
    );
  }
}

export default Input;
