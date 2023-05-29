import { Badge, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ForecastCard({
  date,
  icon,
  feels_like,
  maxTemp,
  minTemp,
  humidity,
  pressure,
  visibility,
  windSpeed,
  desc,
  status,
  temp,
}) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  
  let dt = new Date(date * 1000);
  return (
    <>
      <Box
        w="100%"
        px="30px"
        py="20px"       
        mt="20px"
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        }
      >
        <Text color={"#ea6e4b"}>{`${month[dt.getMonth()]} ${dt.getDate()}, ${
          days[dt.getDay()]
        }`}</Text>

        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          <Text fontSize={"50px"}>{`${temp} °C`}</Text>
        </Box>
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
        >{`Feels like ${feels_like}°C. ${desc}`}</Text>
        <Box
          width={"100%"}
          display={"grid"}
          gridTemplateColumns={"repeat(2,1fr)"}
          mt="10px"
        >
          <Text>{`Max Temp: ${maxTemp} °C`}</Text>
          <Text>{`Min Temp: ${minTemp} °C`}</Text>
          <Text>{`Humidity: ${humidity}%`}</Text>
          <Text>{`Pressure: ${pressure}hPa`}</Text>
          <Text>{`Wind Speed: ${windSpeed}m/s`}</Text>
          <Text>{`Visibilit: ${visibility / 1000}km`}</Text>
        </Box>
        <Badge ml="2" fontSize="16px" colorScheme="green" mt="10px">
          {status}
        </Badge>
      </Box>      
    </>
  );
}
