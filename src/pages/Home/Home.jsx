import { Component } from 'react';
import Aside from '../../components/Aside/Aside';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

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
        <Header onClick={this.handleToggleAside} />
        <Aside isOpen={isOpen} />
      </div>
    );
  }
}

export default Home;
