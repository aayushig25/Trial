import logo from './logo.svg';
import UsersContainer from './components/UsersContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import React from 'react'


function App() {
  return (
    <Provider store={store}>
       <UsersContainer />
    </Provider>
  );
}



export default App;
