import './styles.places.css';

export const Places = () => {
    return (
        <div className="containerPlaces">
            <div>
                <div className="daysForecast">
                    <p><b>Places to</b> visit</p>
                </div>
                <div>
                    <img className="imgPlaces" alt="" src={`https://astelus.com/wp-content/viajes/lauterbrunnen-una-zona-unica-de-suiza.jpg`} />
                </div>
            </div>
            <div className="divPlaces">
                <div>
                    <p><small style={{ color: 'gray' }}>Top reviews</small></p>
                </div>
                <div className="imgPlaces2"></div>
                <div className="imgPlaces3"></div>
            </div>
        </div>
    )
}