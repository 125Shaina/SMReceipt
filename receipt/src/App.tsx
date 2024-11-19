import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from "./receipt1.json"

export interface food{
    type:string;
    price:number;
}
interface cookie extends food{
    quantity:number;
    variety:string;
}
interface cake extends food{
    shape: string;
    radius?: number;
    message: string;
    flavor: string;
    length?: number;
    width?:number;
}
interface doughnut extends food{
    flavor:string;
    quantity:number;
}
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
