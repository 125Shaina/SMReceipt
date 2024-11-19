import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from "./receipt1.json"

function App()
{
    var receipt = jsonData.receipt;
  return (
    <div className="Receipt">
     <h1> cookie</h1>
    </div>
  );
}


export default App;
