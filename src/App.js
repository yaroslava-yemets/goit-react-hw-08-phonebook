import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactsWrapper from 'components/ContactsWrapper/ContactsWrapper';
import Appbar from './components/Appbar'

import HomePage from './views/HomePage';
// import s from './App.module.css';

const NoSuchPageView = lazy(() => import('./views/NoSuchPageView' 
  /* webpackChunkName: "no-page-view" */));
const Registration = lazy(() => import('./views/Registration' 
  /* webpackChunkName: "registration-wiew" */));
const Login = lazy(() => import('./views/Login' 
  /* webpackChunkName: "login-wiew" */));
// const ContactsWrapper = lazy(() => import('./components/ContactsWrapper' 
//   /* webpackChunkName: "cotacts" */));

function App () {
  return (
    <>
      <Appbar />
      
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            {/* <HomePage /> */}
            <div>Hello</div>
          </Route>

          <Route path="/register" exact>
            <Registration />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/contacts">
            <ContactsWrapper />
          </Route>

          <Route>
            <NoSuchPageView />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
};

export default App;
