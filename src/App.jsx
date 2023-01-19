import { Component } from 'react';
import Header from './components/Header/Header';
import Counter from './pages/Counter/Counter';
import Home from './pages/Home/Home';
import './reset.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Counter />
      </>
    );
  }
}

export default App;
