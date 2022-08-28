import React from "react";
import ReactDOM from "react-dom";
import PuppyAPI from "./api/api";
import LoadingSpinner from "./LoadingSpinner";
import { useState, useEffect, useContext } from "react";
import picture from "./asset/first.jpg";


function App() { 
  const [puppy, setPuppy] = useState(null);

  useEffect(function getInfo(){
    getPuppy()
  },[]
  )

  async function getPuppy(){
    let result = await PuppyAPI.getPups();
    setPuppy(result)
  }

  if (!puppy) return <LoadingSpinner/>
  return (
    <div>
      <div>
        <p>test</p>
        <p>name:{puppy.pup[0].breed}</p>
        <img src={picture} alt='puppy picture'></img>
      </div>

    </div>
);
}

export default App;
