import { Component } from 'react';
import Aside from '../../components/Aside/Aside';
import Button from '../../components/Button/Button';

class Home extends Component {
  state = {
    isOpen: false,
  };

  handleToggleAside = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Aside isOpen={isOpen} />
        <Button onClick={this.handleToggleAside} text="Button Aside" />
      </div>
    );
  }
}

export default Home;
