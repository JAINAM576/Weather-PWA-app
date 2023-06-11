import {React,useState} from 'react'
import { fetchweather1 } from "./fetchweather/fetchweather1";
import './App.css'
const Fetching=()=> {
    const  [query,setQuery]=useState('');
    const  [weather,setWeather]=useState({});
    const search= async (e)=>{
 if(e.key==='Enter'){
document.getElementById('load').style.display='block'
     const weather1= await fetchweather1(query.trim())

     setWeather( weather1)
     if(weather1){
        document.getElementById('load').style.display='none'
     }
console.log(weather1)
 setQuery('')
    
    
    
    }
}
  return (
    <div className="main-container">
    <h2 className="city-name above">Serach city,country,state...</h2>
    <div >
        <input 
        type='text'
        placeholder="Search..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="search"
        id='search'
        onKeyPress={search}
        />
        <div className="load" id="load"></div>
    
    </div>
    
        {weather.main && (
           
            <div className="city">
                <h2 className="city-name">{weather.name}
                <sup>{weather.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.main.temp)}&deg;C
                </div>
            <div >
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                <p className="info">{weather.weather[0].description}</p>
            </div>
            </div>
            )
        }
        </div>
  )
}
export default Fetching;