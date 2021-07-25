import './styles.forecast.css';

export const Forecast = ({ min, max, weatherType, icon }) => {
    return (
        <div className="container">
            
            <div className="divImg">
                <img className="imagen" alt={icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            </div>
            <div className="divWeather">{weatherType}</div>
            <div className="divTemp">{Math.round(min)} / {Math.round(max)}</div>
        </div>
    )
}