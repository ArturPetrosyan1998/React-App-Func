import { Component } from 'react';
import './reset.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/auth/Login/Login';
import Counter from './pages/Counter/Counter';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import Registration from './pages/auth/Register/Registration';
import Users from './pages/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            )}
          />
          <Route
            path="/counter"
            element={(
              <PrivateRoute>
                <Counter />
              </PrivateRoute>
            )}
          />
          <Route
            path="/users"
            element={(
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            )}
          />
          <Route
            path="/login"
            element={(
              <PublicRoute>
                <Login />
              </PublicRoute>
            )}
          />
          <Route
            path="/registration"
            element={(
              <PublicRoute>
                <Registration />
              </PublicRoute>
            )}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
