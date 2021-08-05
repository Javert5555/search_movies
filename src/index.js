import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import { rootReducer } from './redux/rootReducer';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();