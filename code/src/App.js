import React from 'react';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import CreateTodo from 'pages/CreateTodo';
import { todos } from './reducers/todos';


// StoreCreation - tell redux about my reducers 
const reducer = combineReducers({ todos: todos.reducer, })

// StoreCreation - Create the store using our reducers and the retrieved state
//const store = configureStore({ reducer })
 
const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
//console.log(`persistedState: ${persistedState}`)

const store = configureStore({
  reducer,
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <CreateTodo />
        </Route>  
      </Switch>
      </Provider>
    </BrowserRouter>
  )
}
export default App;

