import { useEffect, useState } from "react";
import CustomNav from "./CustomNav.jsx";
import CityWeather from "./CityWeather.jsx";
import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";


function converter(temp) {
  return Math.trunc(temp - 273.15) + "°";
}

export default function Page() {
  const location = useLocation();
  const [cityWeather, setCityWeather] = useState({
    name: "Naples",
    main: {
      temp: 273.15,
    },
    weather: [{ main: "Clear" }],
    wind: { speed: 0, deg: 0 },
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      fetchSearch("naples");
    }
  }, []);

  function fetchSearch(searchQuery) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=e0f9e936c57a7b9f031545e0618b1d31`;

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCityWeather(data);
      });
  }

  if (cityWeather.cod !== 200) {
    return (
      <>
        <CustomNav onSearchFetch={fetchSearch} />
        <Container>
          <Alert className="mt-4" variant="danger">Not Found</Alert>
        </Container>{" "}
      </>
    );
  }

  return (
    <>
      <CustomNav onSearchFetch={fetchSearch} />
      <CityWeather
        city={cityWeather.name}
        temp={converter(cityWeather.main?.temp)}
        weather={cityWeather.weather[0].main}
        wind={`Wind: ${cityWeather.wind.speed} m/s, ${cityWeather.wind.deg} °`}
      />
    </>
  );
}
