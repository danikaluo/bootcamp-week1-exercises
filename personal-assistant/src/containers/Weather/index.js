import React, { useState, useEffect} from 'react'
import { Container, Hello, Text, } from './styles'
import Austin from './austin.jpg'


const App = () => {
    const [weather, setWeather] = useState('')
    const [location, setLocation] = useState('')
    const [max, setMax] = useState('')
    const [min, setMin] = useState('')

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=109fad643ce2bbee6ef1a5a2fe24e061&units=imperial')
        const data = await res.json()
        console.log(data)
        setWeather(data.main.temp)
        setLocation(data.name)
        setMax(data.main.temp_max)
        setMin(data.main.temp_min)
        }
    fetchData()
    }, [])
    return (
        <Container>
            <Hello>HELLO!</Hello>
            <Text>
                {`It is currently ${weather}˚F in ${location}.`}
            </Text>
            <Text>
                {`Today's high is ${max}˚F and low is ${min}˚F.`}
            </Text>
            <img
                alt="austin"
                src={Austin}
                style={{
                width: '400px', height: 'undefined', aspectRatio: '3',
                }}
            />
        </Container>
    )
}
export default App;
