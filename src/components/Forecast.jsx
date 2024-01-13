import { ListGroup, ListGroupItem } from "react-bootstrap";
import SingleForecast from "./SingleForecast";
import { useEffect, useState } from "react";

function Forecast(props) {
  const [results, setResults] = useState({ list: []});

  function fetchForecast(query) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=e0f9e936c57a7b9f031545e0618b1d31`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }

  useEffect(() => {
    fetchForecast(props.city);
  }, [props.city]);

  return (
    <>
      <ListGroup>
        {results.list?.slice(0, 8)?.map((result) => {
          return (
            <ListGroupItem className="py-4" key={result.dt}>
              <SingleForecast
                hour={new Date(1000 * result.dt).getHours() + ":00"}
                temp={Math.trunc(result.main.temp - 273.15) + "°"}
                weather={result.weather[0].main}
                rain={`Rain: ${result.rain?.["3h"] || 0} mm`}
                wind={`Wind: ${result.wind.speed} m/s, ${result.wind.deg} °`}
              />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Forecast;
