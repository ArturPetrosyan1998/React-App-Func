import AuthProvider from './context/AuthContext/AuthContext';
import DialogProvider from './context/DialogContext/DialogProvider';
import AppLayout from './pages/AppLayout/AppLayout';
import './styles.scss';

const App = () => (
  <AuthProvider>
    <DialogProvider>
      <AppLayout />
    </DialogProvider>
  </AuthProvider>
);

export default App;
