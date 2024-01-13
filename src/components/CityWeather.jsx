import CurrentWeather from "./CurrentWeather";
import { Container } from "react-bootstrap";
import Forecast from "./Forecast";

function CitySearch(props) {
  return (
      <Container>
        <CurrentWeather
          city={props.city}
          temp={props.temp}
          weather={props.weather}
          wind={props.wind}
        />
        <Forecast city={props.city}/>
      </Container>
  );
}

export default CitySearch;
