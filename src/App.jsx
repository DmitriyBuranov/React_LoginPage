import React from 'react';
import { Container } from 'react-bootstrap'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import  PrivateRoute from './Services/PrivateRoute'

import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home"
import { history } from "./Services/history"
import Page404 from "./Components/404"




const App=() => {

  return (
        <Container>
                  <Router history={history}>
                      <Switch>
                          <PrivateRoute exact path="/" component={Home} />
                          <Route path="/login" component={Login} />
                          <Route path="/register" component={Register} />
                          <Route path="/404" component={Page404} />
                          <Redirect from="*" to="/404" />
                      </Switch>
                  </Router>
              </Container>
  );
}

export default App;
