import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({});
  const root = document.getElementById('root');
  console.log(store.getState());
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
});
