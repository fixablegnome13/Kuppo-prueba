import React from "react";
import './styles.weatherday.css';


export const WeatherDay = ({ temperatura, ciudad }) => {

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
