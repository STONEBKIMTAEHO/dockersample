import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    axios.get(`/api/values`).then(
      response => {
        setLists(response.data)
      }
    )
  });

  const [lists, setLists] = userState([]);
  const [value, setValue] = userState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit>
          <input type="text" />
            <button type="submit">send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
