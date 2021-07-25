import './styles.weathersw.css';
import React from "react";
import { useEffect, useState } from 'react';


export const WeatherDaySw = () => {
    const [tempSw, setTempSw] = useState();
    const [icon1, setIcon] = useState();
    const [ciudad, setCiudad] = useState();
    const [pais, setPais] = useState();
    const [humedad, setHumedad] = useState();
    const [viento, setViento] = useState();




    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bern,CH&APPID=c550430803358da3dcf601a18a49d4d0
        `)
            .then(res => res.json())
            .then(res => setTempSw(res.main.temp - 273.15))

    }, []);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bern,CH&APPID=c550430803358da3dcf601a18a49d4d0
        `)
            .then(res => res.json())
            .then(res => setIcon(res.weather[0].icon));
    }, []);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bern,CH&APPID=c550430803358da3dcf601a18a49d4d0
        `)
            .then(res => res.json())
            .then(res => setCiudad(res.name));
    }, []);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bern,CH&APPID=c550430803358da3dcf601a18a49d4d0
        `)
            .then(res => res.json())
            .then(res => setPais(res.sys.country));
    }, []);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bern,CH&APPID=c550430803358da3dcf601a18a49d4d0
        `)
            .then(res => res.json())
            .then(res => setHumedad(res.main.humidity));
    }, []);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bern,CH&APPID=c550430803358da3dcf601a18a49d4d0
        `)
            .then(res => res.json())
            .then(res => setViento(res.wind.speed));
    }, []);

    return (
        <div>
            <div className="containerSw">

                <div className="divImgsw">
                    <img className="imagen" alt={icon1} src={`https://openweathermap.org/img/wn/${icon1}@2x.png`} />
                </div>
                <div className="divWeathersw">{Math.round(tempSw)} <small>°C</small></div>
                <div className="divCiudad"><strong style={{ fontSize: '20px' }}>{ciudad}</strong>
                    <div><small style={{ fontSize: '10px' }}>{pais}</small></div>
                </div>


            </div>
            <div className="containerSec">
                <div style={{marginLeft:"20px", marginTop: "5px", fontSize: "12px", float:"left"}}>
                    Humidity {humedad}%
                </div>
                <div style={{marginLeft: "90px", marginTop: "5px", fontSize: "12px", float:"right"}}>
                    {viento}km/h
                </div>
            </div>
        </div>
    )

};
