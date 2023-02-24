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
      {value: 'Січень', text: 'Січень'},
      {value: 'Лютий', text: 'Лютий'},
      {value: 'Березень', text: 'Березень'},
      {value: 'Квітень', text: 'Квітень'},
      {value: 'Червень', text: 'Червень'},
      {value: 'Липень', text: 'Липень'},
      {value: 'Серпень', text: 'Серпень'},
      {value: 'Вересень', text: 'Вересень'},
      {value: 'Жовтень', text: 'Жовтень'},
      {value: 'Листопад', text: 'Листопад'},
      {value: 'Грудень', text: 'Грудень'},
    ];
    const years = [
      {value: '2023', text: '2023'},
      {value: '2024', text: '2024'},
      {value: '2025', text: '2025'},
      {value: '2026', text: '2026'},
      {value: '2027', text: '2027'},
      {value: '2028', text: '2028'},
      {value: '2030', text: '2030'},
      {value: '2031', text: '2031'},
      {value: '2032', text: '2032'},
      {value: '2033', text: '2033'},
     
     
    ];
    const [month, setMonth] = useState(months[0].value);
    const [year, setYear] = useState(years[0].value);
    const [loaded,setLoaded]= useState(true);

    function handleCoordResponse(response) {
      let lon= response.data.coord.lon;
      let lat =response.data.coord.lat;
      console.log(lon);
      console.log(lat);
    }
function searchCoordinates () {
   let apiKey = "428a806b1ea72671015f9a8da5f82916";
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(handleCoordResponse);
}



    function handleResponse(response) {
      setLoaded(true);
      console.log(response.data.temp);
      // setWeatherData({
      //    coordinates: response.data.coord,
      //    temperature :response.data.main.temp,
      //    description: response.data.weather[0].description,
      //    humidity: response.data.main.humidity,
      //    wind: response.data.wind.speed,
      //    icon: response.data.weather[0].icon,
      //    date: new Date(response.data.dt*1000), 
      //    city: response.data.name,
      // });
   }
  function search(lat, lon) {
   searchCoordinates(city);

   let apiKey = "428a806b1ea72671015f9a8da5f82916";

   let url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt={time}&appid=${apiKey}`
   
   axios.get(url).then(handleResponse);
}
function handleSubmit(event) {
   event.preventDefault();
   search();
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
          <option key={month.value} value={month.value}>
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
 