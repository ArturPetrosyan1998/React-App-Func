import { Component } from 'react';
import Button from '../../../ui-kit/components/Button/Button';
import Dialog from '../../../ui-kit/components/DIalog/index';

class CounterDialog extends Component {
  state = {
    isOpenModal: false,
    count: 0,
  };

  plus = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  minus = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { isOpenModal, count } = this.state;
    return (
      <div>

        <Dialog isOpen>
          <Button onClick={this.plus}>INCREMENT</Button>
          <Button onClick={this.minus}>DECREMENT</Button>
          <h2>{count}</h2>
        </Dialog>
      </div>
    );
  }
}

export default CounterDialog;
