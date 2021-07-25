import React from "react";
import { useEffect, useState } from 'react';
import './styles.weatherday.css';


export const WeatherDay = () => {
    const [temperatura, setTemperatura] = useState("");
    const [ciudad] = useState("Bogotá");

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Bogota,CO&APPID=d0fed389831e829ff46ed9cf1e3950ca`)
            .then(res => res.json())
            .then(res => setTemperatura(res.main.temp - 273.15));

    }, []);


    return (
        <div className="divImagen">
            <div className="divPrincipal">
                <div style={{margin: "85px"}}>
                    {ciudad}
                    <br></br>
                    {Math.round(temperatura)}°C
                </div>
            </div>
        </div>
    );

};
