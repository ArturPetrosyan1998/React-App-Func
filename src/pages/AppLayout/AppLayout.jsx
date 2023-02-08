import classNames from 'classnames/bind';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import PrivateRoute from '../../components/routes/PrivateRoute';
import PublicRoute from '../../components/routes/PublicRoute';
import { withAuthProvider } from '../../hocs/withAuthProvider';
import { withDialog } from '../../hocs/withDialog';
import { renderDialog } from '../../utils';
import NotFound from '../404/404';
import Login from '../auth/Login/Login';
import Registration from '../auth/Register/Registration';
import Counter from '../Counter/Counter';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import ToDoList from '../ToDoList/TodoList';
import User from '../User/User';
import Users from '../Users/Users';
import styles from './AppLayout.module.scss';

class AppLayout extends Component {
  state = {
    isOpenAside: false,
  };

  handleOpenAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  render() {
    const { isOpenAside } = this.state;
    const { token, dialogId } = this.props;
    return (
      <>
        <BrowserRouter>
          {token && <Header isOpenAside={this.handleOpenAside} />}
          <div>
            <main className={styles.main}>
              {token && <Aside isOpenAside={isOpenAside} />}
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
                  path="/todolist"
                  element={(
                    <PrivateRoute>
                      <ToDoList />
                    </PrivateRoute>
                                  )}
                />
                <Route
                  path="/posts"
                  element={(
                    <PrivateRoute>
                      <Posts />
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
                <Route
                  path="*"
                  element={(
                    <NotFound />
                                  )}
                />
                <Route
                  path="/user"
                  element={(
                    <User />
                                  )}
                />
              </Routes>
            </main>
          </div>

        </BrowserRouter>
        {renderDialog(dialogId)}
      </>
    );
  }
}

export default withAuthProvider(withDialog(AppLayout));
