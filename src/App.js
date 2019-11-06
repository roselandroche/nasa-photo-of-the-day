import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import APOD from './APOD'
import ChangeDate from './ChangeDate'
import Date from './Date'
import Explanation from './Explanation'

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
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <Header title={data.title}/>
      <APOD picUrl={data.hdurl}/>
      <ChangeDate />
      <Date date={data.date}/>
      <Explanation explanation={data.explanation}/>
    </div>
  );
}

export default App
