import { Component } from 'react';
import AuthProvider from './context/AuthContext/AuthContext';
import DialogProvider from './context/DialogContext/DialogProvider';
import AppLayout from './pages/AppLayout/AppLayout';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <DialogProvider>
          <AppLayout />
        </DialogProvider>
      </AuthProvider>
    );
  }
}

export default App;
