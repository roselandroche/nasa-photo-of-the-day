import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import APOD from './APOD'
import Date from './Date'

function App() {
  const [data, updateData] = useState({})

    useEffect(() => {
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=p4vCtPMLUYfzJMemA8BZimHfXv90RZeakiwtFoMf')

        .then(result => {
            updateData(result.data)
        })
        .catch(error => console.log(error))
    }, []);
    console.log(data)
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
      <Header title={data.title}/>
      <APOD picUrl={data.hdurl}/>
      <Date date={data.date}/>
    </div>
  );
}

export default App;
