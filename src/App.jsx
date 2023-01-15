import { Component } from 'react';
import Aside from './components/Aside/Aside';
import Button from './components/Button/Button';
import './Reset.scss';

class App extends Component {
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
      <>
        <Aside isOpen={isOpen} />
        <Button onClick={this.handleToggleAside} />
      </>
    );
  }
}

export default App;
