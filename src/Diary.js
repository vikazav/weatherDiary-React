import React, { useState} from "react";
import "./Diary.css";

import axios from 'axios';

export default function Diary(props) {
   const [city, setCity] = useState(props.defaultCity);

  const handleMonthChange = event => {
    console.log(event.target.value);
    setMonth(event.target.value);
  };
  const handleYearChange = event => {
   console.log(event.target.value);
   setYear(event.target.value);
 };
   const months = [
      {value: '0', text: 'Січень'},
      {value: '01', text: 'Лютий'},
      {value: '02', text: 'Березень'},
      {value: '03', text: 'Квітень'},
      {value: '04', text: 'Травень'},
      {value: '05', text: 'Червень'},
      {value: '06', text: 'Липень'},
      {value: '07', text: 'Серпень'},
      {value: '08', text: 'Вересень'},
      {value: '09', text: 'Жовтень'},
      {value: '10', text: 'Листопад'},
      {value: '11', text: 'Грудень'},
    ];
    const years = [
      {value: '2022', text: '2022'},
      {value: '2023', text: '2023'},
      {value: '2024', text: '2024'},
      {value: '2025', text: '2025'},
      {value: '2026', text: '2026'},
      {value: '2027', text: '2027'},
      {value: '2028', text: '2028'},
      {value: '2029', text: '2029'},
      {value: '2030', text: '2030'},
      {value: '2031', text: '2031'},
      {value: '2032', text: '2032'},
      {value: '2033', text: '2033'},
     
    ];
    const [month, setMonth] = useState(months[0].value);
    const [year, setYear] = useState(years[0].value);
    const [loaded,setLoaded]= useState(true);

    const weatherMeanings = {
      0: "Clear",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog and depositing rime fog",
      48: "Fog and depositing rime fog",
      51: "Drizzle: Light intensity",
      53: "Drizzle: Moderate intensity",
      55: "Drizzle: Dense intensity",
      56: "Freezing Drizzle: Light intensity",
      57: "Freezing Drizzle: Dense intensity",
      61: "Rain: Slight intensity",
      63: "Rain: Moderate intensity",
      65: "Rain: Heavy intensity",
      66: "Freezing Rain: Light intensity",
      67: "Freezing Rain: Heavy intensity",
      71: "Snow fall: Slight intensity",
      73: "Snow fall: Moderate intensity",
      75: "Snow fall: Heavy intensity",
      77: "Snow grains",
      80: "Rain showers: Slight intensity",
      81: "Rain showers: Moderate intensity",
      82: "Rain showers: Violent intensity",
      85: "Snow showers: Slight intensity",
      86: "Snow showers: Heavy intensity",
      95: "Thunderstorm: Slight or moderate intensity",
      96: "Thunderstorm with hail: Slight intensity",
      99: "Thunderstorm with hail"
    }
// function getInterval() {
//    let endDate = new Date(`${year},${month} + 1, 0`);
//    console.log(endDate);
   
// }
function search(lat,lon) {
   
   console.log(lon, lat);
   
     
      let apiUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=2023-01-23&end_date=2023-02-21&daily=weathercode,temperature_2m_mean,windspeed_10m_max,winddirection_10m_dominant&timezone=Africa%2FCairo&windspeed_unit=ms`;
      
      axios.get(apiUrl).then(handleResponse);
   }

    function handleCoordResponse(response) {
      let lon = response.data.coord.lon;
      let lat =response.data.coord.lat;
      console.log(lon);
      console.log(lat);
      search(lat,lon);
    }
      // let lon = response.data.coord.lon;
      // let lat =response.data.coord.lat;
     
   
      
    

function searchCoordinates() {
   let apiKey = "428a806b1ea72671015f9a8da5f82916";
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(handleCoordResponse);
   
}



    function handleResponse(response) {
      setLoaded(true);
      console.log(response.data);
      // setWeatherData({
      // coordinates: response.data.coord})
      //    temperature :response.data.main.temp,
      //    description: response.data.weather[0].description,
      //    humidity: response.data.main.humidity,
      //    wind: response.data.wind.speed,
      //    icon: response.data.weather[0].icon,
      //    date: new Date(response.data.dt*1000), 
      //    city: response.data.name,
      // });
const weatherCodes = response.data.daily.weathercode;
      const weatherMeaningsForDays = weatherCodes.map(code => weatherMeanings[code]);
      console.log(weatherMeaningsForDays);
   }
 
function handleSubmit(event) {
   event.preventDefault();
   // getInterval();
   searchCoordinates(city);
   
}

  function handleCityChange(event) {
   console.log(city);
   setCity(event.target.value);
   }
   
   if (loaded) {
   return (
      <div className="container">
      <div className="wrapper">
      <p>Щоденник погоди</p>
      <div className="app-weather">
         <form className="pb-3" onSubmit={handleSubmit}>
         <div className="row">
               <div className="col-3">
   <input type="text" className="input form-control" placeholder="Enter a city" autoFocus ="on" onChange={handleCityChange}/>
</div>
<div className="col-3">
<select value={month} onChange={handleMonthChange}>
        {months.map(month => (
          <option key={month.value} value={month.text}>
            {month.text}
          </option>
        ))}
      </select>
</div>
<div className="col-3">
<select value={year} onChange={handleYearChange}>
        {years.map(year => (
          <option key={year.value} value={year.value}>
            {year.text}
          </option>
        ))}
      </select>
</div>

<div className="col-3">
<input className="btn btn-primary btn-search" type="submit" value="Get the diary" />
</div>
<p>{city}</p>
<p>{month}</p>
<p>{year}</p>
</div>
</form>
</div>
   </div>
   </div>
   )
}
}
 