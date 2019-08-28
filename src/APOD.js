import React, { useState, useEffect } from 'react'
import axios from 'axios'

function APOD () {
    const [spacePic, updateSpacePic] = useState()
    const [imgData, updateImgData] = useState()

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

            .then(result => {
                updateSpacePic(`${result.data.hdurl}`)
                updateImgData(`${result.data}`)
            })

            .catch(error => console.log(error))
    }, []);
    
    return <img src={spacePic} alt='The vast universe'></img>
}

export default APOD