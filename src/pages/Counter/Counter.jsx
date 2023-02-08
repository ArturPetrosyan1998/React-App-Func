import { dialogs } from '../../constants/dialogs';
import { withDialog } from '../../hocs/withDialog';
import Button from '../../ui-kit/components/Button/Button';

const Counter = ({ openDialog }) => {
  const onOpenDialog = () => {
    openDialog(dialogs.CounterDialog);
  };

  return (
    <div>
      <Button onClick={onOpenDialog}>
        Open Dialog
      </Button>
    </div>
  );
};
export default withDialog(Counter);
