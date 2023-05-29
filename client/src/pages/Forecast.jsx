import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getForecast } from "../utils/ApiCalls";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import ForecastCard from "../components/ForecastCard";

export default function Forecast() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let { city } = useParams();

  useEffect(() => {
    setLoading(true);
    getForecast(city)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res.list);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  return (
    <>
      <Box
        w={{ base: "100%", sm: "100%", md: "70%", lg: "40%" }}
        display={loading ? "none" : "block"}
        m="auto"
        mt="20px"
      >
        <Box
          w="100%"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Forcast
          </Text>
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>
        </Box>
        {data &&
          data.map((el, i) => {
            return (
              <ForecastCard
                key={i}
                date={el.dt}
                name={city}
                feels_like={el.main.feels_like}
                icon={el.weather[0].icon}
                maxTemp={el.main.temp_max}
                minTemp={el.main.temp_min}
                humidity={el.main.humidity}
                pressure={el.main.pressure}
                windSpeed={el.wind.speed}
                visibility={el.visibility}
                temp={el.main.temp}
                desc={el.weather[0].description}
                status={el.weather[0].main}
              />
            );
          })}
      </Box>
      <Box
        display={loading ? "flex" : "none"}
        justifyContent={"center"}
        alignContent={"center"}
        w="70%"
        m="auto"
        mt="30px"
      >
        <Spinner size={"xl"} />
      </Box>
      <Box
        display={error ? "flex" : "none"}
        justifyContent={"center"}
        alignContent={"center"}
        w="70%"
        m="auto"
        mt="30px"
      >
        <Text fontSize={"2xl"} color={"red"}>
          Error While Loading Data
        </Text>
      </Box>
    </>
  );
}
