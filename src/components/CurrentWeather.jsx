import { Container } from "react-bootstrap";
import css from "./css/CurrentWeather.module.css";
import * as Icon from "react-bootstrap-icons";

function CurrentWeather(props) {
  return (
    <Container className="bg-primary-subtle mt-5">
      <h1>{props.city}</h1>
      <hr />
      <div className={css.weatherInfo}>
        <div className={css.textBox}>
          <h2>{props.temp}</h2>
          <p>{props.weather}</p>
          <p>{props.wind}</p>
        </div>
        <div className={css.iconBox}>
          <Icon.CloudRainFill size={96} />
        </div>
      </div>
    </Container>
  );
}

export default CurrentWeather;
