import { Component } from 'react';
import { dialogs } from '../../constants/dialogs';
import { withDialog } from '../../hocs/withDialog';
import Button from '../../ui-kit/components/Button/Button';

class Counter extends Component {
  onOpenDialog = () => {
    const { openDialog } = this.props;
    openDialog(dialogs.CounterDialog);
  };

  render() {
    const { openDialog } = this.props;
    return (
      <div>
        <Button onClick={this.onOpenDialog}>
          Open Dialog
        </Button>
      </div>
    );
  }
}

export default withDialog(Counter);
