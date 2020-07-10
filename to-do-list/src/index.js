import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App'
import {loadState, saveState } from './local_storage';


const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
