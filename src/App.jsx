import React from 'react';
import { Container } from 'react-bootstrap'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import  PrivateRoute from './Services/PrivateRoute'

import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home"
import { history } from './Services/history'




const App=() => {

  return (
        <Container>
                  <Router history={history}>
                      <Switch>
                          <PrivateRoute exact path="/" component={Home} />
                          <Route path="/login" component={Login} />
                          <Route path="/register" component={Register} />
                          <Redirect from="*" to="/" />
                      </Switch>
                  </Router>
              </Container>
  );
}

export default App;
