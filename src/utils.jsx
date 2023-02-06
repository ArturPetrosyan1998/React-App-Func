import React from 'react';
import { dialogs } from './constants/dialogs';
import CounterDialog from './components/Dialogs/CounterDialog/CounterDialog';

export const renderDialog = (dialogId) => {
  switch (dialogId) {
    case dialogs.CounterDialog:
      return <CounterDialog />;
    default:
      return null;
  }
};
