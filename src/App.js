import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form'



const API_KEY = "b3310b1bf51a6689f194685c318bfeaf";



function App() {
  const [values, setValues] = useState({
    temperature:undefined,
    place: undefined,
    humidity:undefined,
    description: undefined
});

const [error, setError] = useState(false);

let getWeather = async (e) => {
    e.preventDefault();
    setValues({
      temperature:undefined,
      place: undefined,
      humidity:undefined,
      description: undefined
    })

    setError(false)

    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(data.name){
      setValues({
        temperature:data.main.temp,
        place:data.name +', '+ data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description
      })
    }
    else{
      setError(true)
    }
    document.getElementById("input").value = "";
  }


  return (
    <div className="container">
      <Form  getWeather={getWeather}/>
      <br/>
      <div className="card card-body my-5">
        {values.place && <h5 className="text-capitalization"><span>Place</span> : {values.place}</h5>}
        {values.temperature && <h5 className="text-capitalization"><span>Temperature</span> : {values.temperature}°C</h5>}
        {values.humidity && <h5 className="text-capitalization"><span>Humidity</span> : {values.humidity}gcc</h5>}
        {values.description && <h5 className="text-capitalization"><span>Description</span> : {values.description}</h5>}
        {error && <h5 className="text-danger">**Please enter valid city!</h5>}
      </div>
      
      
    </div>
  );
}

export default App;
