import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { getWeather } from "../utils/ApiCalls";
import CityWeather from "../components/CityWeather";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let init = {
  dt: "",
  name: "",
  sys: { country: "" },
  main: {
    feels_like: "",
    temp_max: "",
    temp_min: "",
    pressure: "",
    humidity: "",
    temp: "",
  },
  visibility: "",
  wind: { speed: "" },
  weather: [{ icon: "", description: "", main: "" }],
};
export default function Home() {
  let [city, setCity] = useState("nashik");
  let [data, setData] = useState(init);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  let getData = (val) => {
    setCity(val);
  };

  useEffect(() => {
    setLoading(true);
    getWeather(city)
      .then((res) => {
        console.log(res);
        if(res.cod==="404"){
          setLoading(false);
          setError(true); 
          return alert("invalid city")
        }
        setLoading(false);
        setError(false);
        setData(res);       
      })
      .catch((err) => {
        setError(true);        
      });
  }, [city]);

  return (
    <Box>
      <Form getData={getData} />

      <CityWeather
        date={data.dt}
        name={data.name}
        country={data.sys.country}
        feels_like={data.main.feels_like}
        icon={data.weather[0].icon}
        maxTemp={data.main.temp_max}
        minTemp={data.main.temp_min}
        humidity={data.main.humidity}
        pressure={data.main.pressure}
        windSpeed={data.wind.speed}
        visibility={data.visibility}
        temp={data.main.temp}
        desc={data.weather[0].description}
        status={data.weather[0].main}
        loading={loading}
        error={error}
      />
      <Box
        w={{ base: "100%", sm: "100%", md: "80%", lg: "70%" }}
        m="auto"
        mt="30px"
      >
        <Link to={`/forecast/${city}`}>
          <Button>View Forecast</Button>
        </Link>
      </Box>
    </Box>
  );
}
