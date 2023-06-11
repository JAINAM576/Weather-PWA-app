import React from "react";
// import './App.css'
// import { fetchweather1 } from "./fetchweather/fetchweather1";
import Navbar from './Navbar.js'
import About from './About.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fetching from "./Fetching.js";
const App=()=>{
//     const  [query,setQuery]=useState('');
//     const  [weather,setWeather]=useState({});
//     const search= async (e)=>{
//  if(e.key==='Enter'){
// document.getElementById('load').style.display='block'
//      const weather1= await fetchweather1(query.trim())

//      setWeather( weather1)
//      if(weather1){
//         document.getElementById('load').style.display='none'
//      }
// console.log(weather1)
//  setQuery('')
    
    
    
//     }
// }
    return(

        <>
<BrowserRouter>

        <Navbar/>
       
      <Routes>
          <Route  exact path="/about" element={<About/>} >
            
            </Route>

   
          <Route  exact path="/" element={<Fetching/>} />
      </Routes>
        </BrowserRouter>
        </>
    );
}
export default App;
