import { Component } from 'react';
import Button from '../../../ui-kit/components/Button/Button';
import Dialog from '../../../ui-kit/components/DIalog/index';

class CreateNewDialog extends Component {
  render() {
    const { closeDialog } = this.props;
    return (
      <div>

        <Dialog isOpen>
          <Button onClick={closeDialog}>Close Dialog</Button>
          <div>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta,
            incidunt. Consectetur neque quis ut!
            Labore eligendi voluptate, nam ullam,
            delectus quibusdam voluptatibus perferendis
            eaque autem magnam doloribus nulla officiis suscipit.
          </div>

        </Dialog>
      </div>
    );
  }
}

export default CreateNewDialog;
