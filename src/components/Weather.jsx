import { useState, useEffect } from "react";

import country from "../services/country";
import { Card } from "react-bootstrap";

const Weather = ({ capital, api_key }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    country.getWeather(api_key, capital).then((data) => {
      setWeather(data);
    });
  }, [api_key, capital]);
  return (
    <Card className="card">
      <Card.Header>Weather in {capital}</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Temperature:</strong> {weather.main?.temp} Celsius
        </Card.Text>
        <Card.Text>
          <img height={100} width={100} src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="weather icon" />
        </Card.Text>
        <Card.Text>
          <strong>Wind:</strong> {weather.wind?.speed} m/s
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Weather;
