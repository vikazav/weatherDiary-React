import React from "react";
import "./Diary.css";

export default function Diary() {
  function handleSubmit(params) {
   
  }
  function handleChange(params) {
   
}
   return (
      <div className="container">
      <div className="wrapper">
      <p>Щоденник погоди</p>
      <div className="app-weather">
         <form className="pb-3" onSubmit={handleSubmit}>
         <div className="row">
               <div className="col-3">
   <input type="text" className="input form-control" placeholder="Enter a city" autoFocus ="on" onChange={handleChange}/>
</div>
<div className="col-3">
   <select name="select">

  <option value="value1" selected> Січень</option>
  <option value="value2" >Лютий</option>
  <option value="value3">Березень</option>
  <option value="value3">Квітень</option>
  <option value="value3">Травень</option>
  <option value="value3">Червень</option>
  <option value="value3">Липень</option>
  <option value="value3">Серпень</option>
  <option value="value3">Вересень</option>
  <option value="value3">Жовтень</option>
  <option value="value3">Листопад</option>
  <option value="value3">Грудень</option>
</select>
</div>
<div className="col-3">
<select name="select">

<option value="value1" selected> 2023</option>
<option value="value2" >2024</option>
<option value="value3">2025</option>
<option value="value3">2026</option>
<option value="value3">2027</option>
<option value="value3">2028</option>
<option value="value3">2029</option>
<option value="value3">2030</option>
<option value="value3">2031</option>
<option value="value3">2032</option>
<option value="value3">2033</option>

</select>
</div>

<div className="col-3">
<input className="btn btn-primary btn-search" type="submit" value="Get the diary" />
</div>
</div>
</form>
</div>
   </div>
   </div>
   )
}