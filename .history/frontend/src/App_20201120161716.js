import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    axios.get(`/api/values`).then(
      response => {
        setLists(response.data)
      });
  }, []);

  const [lists, setLists] = userState([]);
  const [value, setValue] = userState([]);

  const changeHandler = (event) => {
    setValue(event.currentTarget.vaue);
  }

  const submitHangler = (event => {
    event.preventDefault();

    axios.post(`/api/value`, {value: value} ).then(
      response => {
        if (response.data.success) {
          setLists([...lists, response.data]);
        }
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={submitHangler}>
          <input type="text" onChange={changeHandler}/>
            <button type="submit">send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
