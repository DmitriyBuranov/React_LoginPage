import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers';
import thunkMiddleware from 'redux-thunk';
import { configureFakeBackend } from './Data/fake-backend'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, undefined, middlewareEnhancer)


// setup fake backend
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

