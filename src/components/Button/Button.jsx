import { Component } from 'react';

class Button extends Component {
  render() {
    const { text, children, ...rest } = this.props;
    return (
      <button type="button" {...rest}>{children}</button>
    );
  }
}
export default Button;
