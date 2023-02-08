import { Component } from 'react';
import Button from '../../ui-kit/components/Button/Button';
import Input from '../../ui-kit/components/Input/Input';
import styles from './TodoList.module.scss';

class ToDoList extends Component {
  state = {
    value: '',
    inputValue: [],
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  onCick = () => {
    const { value, inputValue } = this.state;
    inputValue.push({ value });
    this.setState(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <Input
            className={styles.input}
            onChange={this.onChange}
          />
          <Button
            className={styles.classNameButton}
            onClick={this.onCick}
          >
            Add
          </Button>
          <div>
            <ul>
              {inputValue.map((item, index) => (<li key={index} className={styles.li}>{item.value}</li>))}
            </ul>
          </div>
        </div>

      </div>

    );
  }
}

export default ToDoList;
