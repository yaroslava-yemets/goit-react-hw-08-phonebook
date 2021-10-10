import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactsWrapper from 'components/ContactsWrapper/ContactsWrapper';
import Appbar from './components/Appbar'
// import s from './App.module.css';

const NoSuchPageView = lazy(() => import('./views/NoSuchPageView' 
  /* webpackChunkName: "no-page-view" */));
// const ContactsWrapper = lazy(() => import('./components/ContactsWrapper' 
//   /* webpackChunkName: "cotacts" */));

function App () {
  return (
    <>
      <Appbar />
      
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <div>HomePageView</div>
          </Route>

          <Route path="/register" exact>
            <div>Register</div>
          </Route>

          <Route path="/login">
            <div>Login</div>
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
