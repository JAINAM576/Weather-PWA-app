import React from "react";
import axios from "axios";

const URL="https://api.openweathermap.org/data/2.5/weather";
const API_kEY="8113b7b6c17024c9dc3f0f94359073c9";

export const fetchweather1=async(query)=>{
const {data}=await axios.get(URL,{
params:{
    q:query,
    units:'metric',
    APPID:API_kEY
}
});
return data;
}