import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from "./receipt1.json"
import Receipt from "./receipt";

export interface food{
    type:string;
    price:number;
}
export interface cookie extends food{
    quantity:number;
    variety:string;
}
export interface cake extends food{
    shape: string;
    radius?: number;
    message: string;
    flavor: string;
    length?: number;
    width?:number;
}
export interface doughnut extends food{
    flavor:string;
    quantity:number;
}
function App()
{
    var receipt = jsonData.receipt;
  return (
      <div className="Receipt">
          <h1 style = {{color:"pink", padding: "20px", justifyContent: "space-between"}} > Receipt</h1>

          <Receipt receipt={receipt}/>

      </div>
  );
}


export default App;
